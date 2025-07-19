// src/app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-extrabold text-blue-600">
        Welcome to Your Watch Store!
      </h1>
      <Link
        href="/products"
        className="mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Browse Our Watches
      </Link>
    </main>
  )
}