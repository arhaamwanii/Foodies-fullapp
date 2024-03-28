import React from 'react'
import Link from 'next/link'
import logoImg from '@/assets/logo.png'

const mainHeader = () => {
  return (
    <header>
      <Link href='/'>
        <img src={logoImg.src} alt="A plate with food on it " />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>


  )
}

export default mainHeader

// this code in here -- the layout file in the root directory has access to the whole app 