"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

//? You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive.
// export const metadata = {
//       title: "About",
//       description: "Trying to learn next.js as well as good",
// }

const AboutPage = () => {
      const router = useRouter()
      const isLogin = true
      const handleNavigation = () => {
            if (isLogin) {
                  router.push('/about/address')
            } else {
                  router.push('/')
            }
      }

      return (
            <div>
                  <h2 className="text-3xl text-center font-semibold py-6">About page</h2>
                  <div className="space-x-3 text-center py-4">
                        {/* navigate using Link tag */}
                        <Link href='about/address'
                              title="navigate using Link tag"
                              className="outline-2 rounded-md py-3 px-5 ">Address page</Link>
                        {/* navigate using nextjs useRouter hook */}
                        <button type="button" onClick={handleNavigation}
                              title="navigate using useRouter"
                              className="py-3 px-5 rounded-md bg-sky-900 text-slate-50 cursor-pointer">Address page</button>
                  </div>
            </div>
      )
}

export default AboutPage
