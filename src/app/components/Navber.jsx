"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Roboto } from "next/font/google";

// Customize font 
const roboto = Roboto({
  weight: ['400', '500', '600', '700']
})

const Navber = () => {
  const pathname = usePathname()
  // const hideNavber = pathname === '/user-dashboard' || pathname === '/admin-dashboard'

  if (!pathname.includes('dashboard')) {
    return (
      <nav className={`${roboto.className} bg-gray-900 flex items-center justify-center`}>
        <div className='flex items-center justify-between py-5'>
          <ul className='flex items-center font-semibold gap-4'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/gadget/add">Add Gadget</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navber
