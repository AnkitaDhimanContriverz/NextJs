"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
const inter = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={inter.className} >{children}</body>
    </html>
  );
}
