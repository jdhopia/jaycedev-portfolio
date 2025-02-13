import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to JayceDev</h1>
        <p className="mt-4 text-gray-600">
          I create modern web apps and automation tools to help local businesses
          increase efficiency, reduce manual work, and enhance customer experience.
        </p>
      </header>

      <nav className="mt-6 flex space-x-6">
        <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
        <Link href="/portfolio" className="text-blue-600 hover:underline">Portfolio</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
    </div>
  );
}