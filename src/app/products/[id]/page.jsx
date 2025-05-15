import Link from "next/link"

// Fetching Single Product
export const getSingleProduct = async (id) => {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      return data
};

// export const metadata = {
//       title: "Product Details",
//       description: "Trying to learn next.js as well as good",
// }

// Generate Metadata function ( dynamically set title )
export async function generateMetadata({ params }) {
      // read route params
      const { id } = await params;
      // fetch data
      const singleProduct = await getSingleProduct(id)

      return {
            title: singleProduct.title,
            description: singleProduct.description
      }
};

// Server Side Component
const ProductDetails = async ({ params }) => {
      const id = await params.id
      const singleProduct = await getSingleProduct(id)
      const { title, images, description, price, stock, sku, brand } = singleProduct || {}

      if (!singleProduct) {
            return <p className="text-3xl font-semibold text-red-50 py-5 text-center">No Data Found</p>
      }
      return (
            <section>
                  <div className="max-w-6xl mx-auto my-8 flex items-center justify-between gap-5 bg-gray-800 rounded-lg">
                        <figure className="bg-sky-50 rounded-tl-lg rounded-bl-lg">
                              <img src={images[0]} alt="" />
                        </figure>
                        <div className="p-5 space-y-3">
                              <div className="flex items-center space-x-5">
                                    <span className="text-sm">SKU: {sku}</span>
                                    <span className=" text-xl">Brand: {brand}</span>
                              </div>
                              <h3 className="text-2xl font-semibold">Name: {title}</h3>
                              <p>Price: ${price}</p>
                              <p>Stock: {stock}</p>
                              <div>
                                    <strong>Description:</strong>
                                    <p>{description}</p>
                              </div>
                        </div>
                  </div>
                  <div className="flex items-center justify-center">
                        <Link href={'/products'} className="px-5 py-3 rounded-lg bg-green-500 font-semibold hover:scale-105 duration-200">Continue Shopping</Link>
                  </div>
            </section>
      )
}

export default ProductDetails



/*
{
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 10.48,
    "rating": 2.56,
    "stock": 99,
    "tags": [
        "beauty",
        "mascara"
    ],
    "brand": "Essence",
    "sku": "BEA-ESS-ESS-001",
    "weight": 4,
    "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
    },
    "warrantyInformation": "1 week warranty",
    "shippingInformation": "Ships in 3-5 business days",
    "availabilityStatus": "In Stock",
    "reviews": [
        {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
            "rating": 4,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lucas Gordon",
            "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
    ],
    "returnPolicy": "No return policy",
    "minimumOrderQuantity": 48,
    "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
}
*/