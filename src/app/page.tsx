import Counter from "./counter";
import Sidebar from "./sidebar";
import Link from "next/link";
// Pages in Next.js are Server Components by default
export default function Page() {
  // return <Sidebar />;
  return (
    <div>
      <h1>Hello</h1>
      {/* <Counter /> */}
      <Sidebar />
      {/* <Link href="/counter">Counter</Link> */}
    </div>
  );
}
