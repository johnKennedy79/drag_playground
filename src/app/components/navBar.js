import Link from "next/link";
import "./axis.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/word">Word</Link>
      <Link href="/jigsaw">JigSaw</Link>
    </nav>
  );
}
