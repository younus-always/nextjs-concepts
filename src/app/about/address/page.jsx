"use client"
import { useRouter } from "next/navigation"

//? You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive.
// export const metadata = {
//       title: "Address",
//       description: "Trying to learn next.js as well as good",
// }

const AddressPage = () => {
      const router = useRouter()
      return (
            <div>
                  <div className="text-center py-5 space-y-3">
                  <h3 className="text-3xl font-semibold">Address page</h3>
                        <button type="button" onClick={() => router.push('/about')}
                              title="navigate using useRouter"
                              className="py-2 px-5 rounded-md bg-blue-800 text-slate-50 cursor-pointer">Go Back</button>
                  </div>
            </div>
      )
}
export default AddressPage