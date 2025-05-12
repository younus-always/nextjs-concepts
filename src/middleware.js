import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
      // cookies get method
      // const currentCookie = request.cookies.get('nextjs-token')
      // console.log(currentCookie.value)

      const dummyUserData = {
            role: 'user',
            email: 'test@gmail.com'
      }
      const isServicesPage = request.nextUrl.pathname.includes("services")
      const isAdmin = dummyUserData.role === 'admin'
      if (isServicesPage && !isAdmin) {
            return NextResponse.redirect(new URL("/login", request.url))
            // return NextResponse.rewrite(new URL("/login", request.url))
      }
      return NextResponse.next()
}

