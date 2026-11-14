import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/actions/cms";

export async function POST(request: Request) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const rawFilename = searchParams.get("filename") || "upload.jpg";
  const safeFilename = `kacco/${Date.now()}-${rawFilename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

  if (!request.body) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  try {
    const blob = await put(safeFilename, request.body, {
      access: "public",
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Blob upload failed:", error);
    return NextResponse.json({ error: "Cloud upload failed" }, { status: 500 });
  }
}
