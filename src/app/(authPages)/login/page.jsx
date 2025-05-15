import Link from "next/link"

export const metadata = {
  title: "Login",
  description: "Trying to learn next.js as well as good",
}

const LoginPage = () => {

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center py-6">Login page</h2>
      <p className="text-gray-600 text-center">Don't have an account? <Link href={'/register'} className="text-blue-400 font-semibold underline">Register</Link></p>
    </div>
  )
}

export default LoginPage
