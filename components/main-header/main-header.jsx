'use client';


import React from 'react'
import  Image  from 'next/image';
import LogoImage from "@/assets/logo.png"
import Link from 'next/link';
import classes from "@/components/main-header/main-header.module.css"
import { usePathname } from 'next/navigation';

function MainHeader() {
  const path = usePathname();

  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={LogoImage} alt='logo of the app heee ha'/>
            Next Level Food
        </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals"className={path.startsWith('/meals') ? classes.active : undefined} >Browse Meals</Link>
          </li>
          <li>
            <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined} >Communtity </Link>
          </li>
        </ul>
      </nav>        
    </header>

  )
}

export default MainHeader


