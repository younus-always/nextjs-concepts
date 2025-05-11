import Link from "next/link"

const Navber = () => {
  return (
    <nav className='bg-gray-900 flex items-center justify-center'>
      <div className='flex items-center justify-between py-5'>
        <ul className='flex items-center gap-4'>
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
        </ul>
      </div>
    </nav>
  )
}

export default Navber
