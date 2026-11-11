import type { Metadata } from "metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: "KACCO - Karamoja Child Care Organization",
  description: "Empowering children, youth, and communities in Karamoja through education, anti-FGM advocacy, skilling, and healthcare.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
