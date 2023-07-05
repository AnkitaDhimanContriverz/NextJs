import Counter from "./counter/page";
import Sidebar from "./sidebar/page";
import Link from "next/link";
// Pages in Next.js are Server Components by default
export default function Page() {
  // return <Sidebar />;
  return (
    <div>
      <Link href="/sidebar">View</Link>
      <br />

      <Link href="/counter">counter</Link>
      <br />
      <Link href="/profile">Profile Page</Link>
      <br />
      <Link href="/video">video upload</Link>
      <br />
      <Link href="/movie">movies</Link>
    </div>
  );
}
