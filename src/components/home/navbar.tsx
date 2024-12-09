import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 bg-opacity-80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-2xl font-bold">
            <Link href="/">Logo</Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/book" className="text-gray-300 hover:text-white transition-colors duration-200">
              Book
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-white transition-colors duration-200">
              Help
            </Link>
            <Link href="/signin" className="text-gray-300 hover:text-white transition-colors duration-200">
              Sign In
            </Link>
            <Link href="/signup" className="text-gray-300 hover:text-white transition-colors duration-200">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
