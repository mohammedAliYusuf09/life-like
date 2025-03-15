import Link from 'next/link';
import React from 'react'

function NotFound() {
  return (
    <div>
        <h1>Blog Not Found</h1>
        <p>Sorry, the Blog youre looking for doesnt exist.</p>
        <Link href='/'>Go back to Homepage</Link>
    </div>
  )
}

export default NotFound;