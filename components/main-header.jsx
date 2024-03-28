import React from 'react'
import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from "./main-header.module.css"
import Image from 'next/image'

const mainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImg} alt="A plate with food on it " priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
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
// 






// app that makes an hierarchy key