import React from 'react'
import  Link  from 'next/link';
import classes from './page.module.css'

function MealsPage() {
  return 
    <>
    <header>
      <h1>
        Delicious meals , created{''}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>Choose the shit you want to do, cause you don't have a lot to do yourself</p>
    </header>
    <main className={classes.main}> </main> 
    </>
  
}

export default MealsPage