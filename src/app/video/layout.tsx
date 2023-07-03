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
      {/* <body className={inter.className}>{children}</body> */}
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 60,
        }}
      >
        <header
          style={{
            display: "flex",
            gap: 15,
            alignSelf: "flex-start",
            marginBottom: 30,
          }}
        >
          <Link href="/">Home Page</Link>
          {/* We use the router here to revalidate our videos data on each page load */}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/showVideos")}
          >
            Videos list
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
