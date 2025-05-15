import Link from "next/link"

export const metadata = {
  title: "Register",
  description: "Trying to learn next.js as well as good",
}

const RegisterPage = () => {
  return (
    <div>
      <h2 className="text-center font-semibold text-3xl py-6">Register page</h2>
      <p className="text-gray-600 text-center">Already have an account? <Link href={'/login'} className="text-blue-400 font-semibold underline">Login</Link></p>
    </div>
  )
}

export default RegisterPage
