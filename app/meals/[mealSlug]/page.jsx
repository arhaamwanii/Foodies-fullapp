import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals.js'


function page({params}) {
  // params will passed in as a object -- params.slug

  const meal = getMeal(params.mealSlug)
  console.log(meal)
  if (meal && meal.instructions) 
    meal.instructions = meal.instructions.replace(/\n/g, '<br>');


  return (
    <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} alt={meal.title} fill/>
      </div>
      <div className={classes.headerText} >
        <h1>{meal.titile}</h1>
        <p>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a> 
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html : meal.instructions,
      }}></p>

    </main>
    </> 
  )
}

export default page


// this component acts as a kin of .map for the pages
// dangereouslysetInnerHtml - opens you up for scripting attacks
// well if there are a lot of things there are a lot of things
// this is kind of like mapping a componet but at the same time we are making a new page route as well

