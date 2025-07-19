// src/app/products/page.js
import ProductCard from '../../components/ProductCard'

// Example “database” of watches
const watches = [
  {
    id: 1,
    name: 'Classic Silver',
    price: 149,
    image: '/images/watch1.jpg'
  },
  {
    id: 2,
    name: 'Vintage Leather',
    price: 189,
    image: '/images/watch2.jpg'
  },
  {
    id: 3,
    name: 'Modern Black',
    price: 199,
    image: '/images/watch3.jpg'
  },
  // …add more as needed
]

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Watches</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {watches.map(watch => (
          <ProductCard key={watch.id} watch={watch} />
        ))}
      </div>
    </main>
  )
}
