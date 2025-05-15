import Image from "next/image"
import Link from "next/link"

// Fetch function
export const getProducts = async () => {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      return data
}

export const metadata = {
      title: "All Products",
      description: "Trying to learn next.js as well as good",
}

// Server Side Component
const Products = async () => {
      const { products } = await getProducts()
      if (!products) {
            return <p className="text-red-600 font-semibold text-center text-3xl py-4">Products Not Found</p>
      }
      return (
            <div className="max-w-7xl mx-auto py-8">
                  <h2 className="text-3xl font-semibold">Total Products: {products.length}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
                        {products.map(product => {
                              return (
                                    <Link href={`/products/${product.id}`} key={product.id}>
                                          <div className="rounded-2xl p-5 shadow-lg shadow-lime-200 group cursor-pointer hover:shadow-md duration-300">
                                                <Image src={product.thumbnail} width={268} height={268} alt={`Picture of the ${product.title}`} className="group-hover:scale-90 duration-200" />
                                                <h3 className="text-lg font-semibold">Name: {product.title}</h3>
                                                <p>Category: {product.category}</p>
                                                <p>Price: ${product.price}</p>
                                                <p>Stock: {product.stock}</p>
                                                <p>Description: {product.description.length > 50 ? product.description.substr(0, 50) : product.description}</p>
                                          </div>
                                    </Link>
                              )
                        })}
                  </div>
            </div>
      )
}

export default Products