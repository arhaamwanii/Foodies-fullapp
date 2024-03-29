import React from 'react'
import  Link  from 'next/link';
import classes from './page.module.css'

function MealsPage() {
  return 
    <>
    <header>
      <h1>
        <h1>What is going on here</h1>
        Delicious meals , created{''}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>Choose the shit you want to do, cause you don't have a lot to do yourself</p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share you favourite recipie
        </Link>
      </p>
    </header>
    <main className={classes.main}> </main> 
    </>
  
}

export default MealsPage
