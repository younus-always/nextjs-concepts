"use client"
import { usePathname } from "next/navigation"

const Footer = () => {
      const pathname = usePathname()
      // const hideFooter = pathname === '/user-dashboard' || pathname === '/admin-dashboard'

      if (!pathname.includes('dashboard')) {
            return (
                  <div className='flex items-center justify-center py-2 bg-gray-700'>
                        <p>&copy; The first next app | Developer Younus</p>
                  </div>
            )
      }
}

export default Footer
