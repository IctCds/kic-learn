import React from 'react'
import { Link } from 'react-router-dom'

const Construction = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl">Page Under Construction</h1>
          <p className="mt-6 text-base leading-7 text-gray-500">Sorry, the page your're looking for is currently under construction.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to='/dashboard'
              className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Go back home
            </Link>
            <Link to='/dashboard' className="text-sm font-semibold text-gray-500">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
  )
}

export default Construction