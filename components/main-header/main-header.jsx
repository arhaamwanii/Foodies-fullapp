import React from 'react'
import  Image  from 'next/image';
import LogoImage from "@/assets/logo.png"
import Link from 'next/link';
import classes from "@/components/main-header/main-header.module.css"

function MainHeader() {
  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={LogoImage}/>
            Next Level Food
        </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Communtity </Link>
          </li>
        </ul>
      </nav>        
    </header>

  )
}

export default MainHeader
// well this barlelu 