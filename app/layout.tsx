import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonit — Cybersecurity Portfolio",
  description:
    "The cybersecurity learning portfolio of Sonit: hands-on security labs, responsible practice, and notes from the journey.",
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
