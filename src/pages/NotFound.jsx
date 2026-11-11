// 404 page — shown when user visits a route that doesn't exist
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-pink-600">404</h1>
      <p className="text-gray-500 mt-4 text-xl">Page not found</p>
      <Link to="/" className="mt-6 text-pink-500 underline">
        Go back home
      </Link>
    </div>
  )
}
export default NotFound
