import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
    </header>
  );
}
