import Link from "next/link"

const NotFoundPage = () => {
      return (
            <div>
                  <h2 className="text-4xl font-semibold text-center py-5">404 NOT FOUND</h2>
                  <Link href="/" className="py-2 px-5 rounded-md bg-blue-800 text-slate-50 cursor-pointer text-center w-2/12 mx-auto block">Go Back to home</Link>
            </div>
      )
}

export default NotFoundPage
