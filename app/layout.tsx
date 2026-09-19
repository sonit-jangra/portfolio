import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonit Jangra | Cybersecurity Portfolio",
  description:
    "Cybersecurity enthusiast and developer portfolio of Sonit Jangra.",
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