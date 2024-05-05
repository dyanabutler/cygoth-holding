"use client"
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4">
      <Link href="https://www.dyanabutler.com">
        <text className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-100">
          © 2024 dyanabutler.com
        </text>
      </Link>
    </div>
  );
}

export default Footer;


