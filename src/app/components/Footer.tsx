import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-4">
      <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-100" href="https://www.dyanabutler.com">
        © 2024 dyanabutler.com
      </Link>
    </footer>
  )
}

export default Footer

