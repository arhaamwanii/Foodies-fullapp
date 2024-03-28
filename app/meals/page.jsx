import React from 'react'
import  Link  from 'next/link';

function page() {
  return (
    <div>
      <Link href='meals/newPage' >New page</Link>
    </div>
  )
}

export default page