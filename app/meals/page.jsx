import React, { Suspense } from 'react'
import  Link  from 'next/link';
import classes from './page.module.css'
import { getMeals } from '@/lib/meals';
import MealsGrid from './meals-grid';

async function Meals (){
  console.log('Fetching Meals')
  const meals = await getMeals();
  return       <MealsGrid meals={meals} />
}


function MealsPage() {

  return (
    <>
    <header>
      <h1>
        Delicious meals , created{''}
        <span className={classes.highlight}> by you</span>
      </h1>
      <p>Choose the shit you want to do, cause you dont have a lot to do yourself</p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share you favourite recipie
        </Link>
      </p>
    </header>
    <main className={classes.main}>
    <Suspense fallback={<p>Yeah -- it is going on using the Suspence Component : which can be used as wrapper around fetch components </p>}>
        <Meals/>
    </Suspense>
    </main> 
    </>
  )  
}

export default MealsPage


// that was the thing for this compoenent to have rendered properly it had to be showed in the -- if a layout file existst but you have made your page to show inside of it you are done
