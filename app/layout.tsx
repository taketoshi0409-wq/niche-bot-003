import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "niche-bot-003 | niche-bot-003",
  description: "Auto-generated niche web app starter for niche-bot-003",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
