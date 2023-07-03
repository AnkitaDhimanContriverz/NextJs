import "./globals.css";
import { Roboto } from "next/font/google";

const inter = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Next Js Practice",
  description: "next js app for practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
