import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zuhdan Nur Ihsan Portofolio",
  description: "full-stack developer portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
