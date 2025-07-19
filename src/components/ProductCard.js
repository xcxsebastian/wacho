// src/components/ProductCard.js
import Image from 'next/image'

export default function ProductCard({ watch }) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition p-4">
      <div className="relative w-full h-64">
        <Image
          src={watch.image}
          alt={watch.name}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="mt-4 text-xl font-semibold">{watch.name}</h2>
      <p className="mt-1 text-gray-700">${watch.price.toFixed(2)}</p>
      <button className="mt-3 w-full py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  )
}
