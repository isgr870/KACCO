"use server";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

const SESSION_COOKIE = "kacco_admin_session";

function signSession(secret: string) {
  return crypto.createHmac("sha256", secret).update("authenticated_admin").digest("hex");
}

export async function verifyAdminSession(): Promise<boolean> {
  const secret = process.env.ADMIN_PASSCODE;
  if (!secret) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return token === signSession(secret);
}

export async function loginAdmin(passcode: string): Promise<{ success: boolean; error?: string }> {
  const secret = process.env.ADMIN_PASSCODE;
  if (!secret) {
    return { success: false, error: "Server configuration error: ADMIN_PASSCODE not set in Vercel." };
  }

  if (passcode !== secret) {
    return { success: false, error: "Invalid administrative passcode." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, signSession(secret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return { success: true };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSiteData() {
  try {
    const [configs, articles] = await Promise.all([
      prisma.siteConfig.findMany(),
      prisma.article.findMany({ orderBy: { publishedAt: "desc" } }),
    ]);

    const configMap: Record<string, string> = {};
    for (const item of configs) {
      configMap[item.key] = item.value;
    }

    return {
      stats: {
        primaryPupils: configMap.primaryPupils || "24",
        secondaryStudents: configMap.secondaryStudents || "23",
        nursingStudents: configMap.nursingStudents || "19",
        residentChildren: configMap.residentChildren || "18",
        primaryAnnualFee: configMap.primaryAnnualFee || "750,000",
        secondaryAnnualFee: configMap.secondaryAnnualFee || "1,950,000",
        monthlyFeedingBudget: configMap.monthlyFeedingBudget || "2,000,000",
        clinicStatus: configMap.clinicStatus || "Proposed Capital Construction Plan (Seeking Donors)",
      },
      pages: {
        aboutHeading: configMap.aboutHeading || "Empowering Karamoja's Children & Communities Since 2006",
        aboutText:
          configMap.aboutText ||
          "Established in 2006 in Kangole Parish, Ngoleriet Sub-county, Napak District, KACCO arose in response to severe insecurity, cattle rustling, HIV/AIDS devastation, and extreme poverty that left many children orphaned. We provide holistic support, formal education, healthcare training, and child safeguarding.",
      },
      articles,
    };
  } catch (error) {
    console.error("Database fetch fallback:", error);
    return {
      stats: {
        primaryPupils: "24",
        secondaryStudents: "23",
        nursingStudents: "19",
        residentChildren: "18",
        primaryAnnualFee: "750,000",
        secondaryAnnualFee: "1,950,000",
        monthlyFeedingBudget: "2,000,000",
        clinicStatus: "Proposed Capital Construction Plan (Seeking Donors)",
      },
      pages: {
        aboutHeading: "Empowering Karamoja's Children & Communities Since 2006",
        aboutText:
          "Established in 2006 in Kangole Parish, Ngoleriet Sub-county, Napak District, KACCO arose in response to severe insecurity, cattle rustling, HIV/AIDS devastation, and extreme poverty that left many children orphaned. We provide holistic support, formal education, healthcare training, and child safeguarding.",
      },
      articles: [],
    };
  }
}

export async function saveSiteConfigs(updates: Record<string, string>) {
  if (!(await verifyAdminSession())) {
    throw new Error("Unauthorized");
  }

  const operations = Object.entries(updates).map(([key, value]) =>
    prisma.siteConfig.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    })
  );

  await prisma.$transaction(operations);
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/programs");
  revalidatePath("/clinic");
  revalidatePath("/admin");
}

export async function createArticle(data: {
  title: string;
  category: string;
  content: string;
  imageUrl: string;
}) {
  if (!(await verifyAdminSession())) {
    throw new Error("Unauthorized");
  }

  await prisma.article.create({
    data: {
      title: data.title,
      category: data.category,
      content: data.content,
      imageUrl: data.imageUrl || "/IMG-20261111-WA0043.jpg",
    },
  });

  revalidatePath("/");
  revalidatePath("/clinic");
  revalidatePath("/admin");
}

export async function removeArticle(id: string) {
  if (!(await verifyAdminSession())) {
    throw new Error("Unauthorized");
  }

  await prisma.article.delete({ where: { id } });

  revalidatePath("/");
  revalidatePath("/clinic");
  revalidatePath("/admin");
}
