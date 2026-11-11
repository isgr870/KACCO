import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kacco1.org"),
  title: "Karamoja Child Care Organization (KACCO)",
  description: "Empowering Children, Youth & Communities across Moroto and Napak districts in Karamoja, Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
