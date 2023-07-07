import { Roboto } from "next/font/google";
const inter = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
