import React from 'react'
import classes from "./meals-grid.module.css"
import MealItem from './meals-item'
import MealsLayout from './layout'

function MealsGrid({meals }) {
  return (
    <div>
        <ul className={classes.meals}>
            {meals.map(meals => <li key={meals.id}> 
                <MealItem {...meals} />
             </li>)}
        </ul>
    </div>
  )
}

export default MealsGrid

// SQL LITE - 
// improving the server side rendering i want to get started and start making that thing like first we need to get that won't we
// you make a graphical hierarchy for any thing like you put in the name and then you will start having the hierarchies 

// like it will create a whole mind map 
// then for each step it will give you instruction on what to do next

// i want to learn about making a fucking burger
// this is not a must have it is good to have kind of thing or maybe lesser then good to have caue what real porblim is it solving
