import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karamoja Child Care Organization (KACCO)",
  description: "Empowering children, youth, and communities in Moroto and Napak, Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
