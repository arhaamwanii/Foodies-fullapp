import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
        <h1>Meals Page</h1>
        <Link href="/meals/NewSlug"> Anything Works </Link>
    </div>
  )
}

export default page