import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white p-4 flex gap-6">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </header>
  );
}
