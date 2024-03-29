import React from 'react'
import classes from "./meals-grid.module.css"
import MealItem from './meals-item'

function MealsGrid() {
  return (
    <div>
        <ul>
            {mealsLayout.map(meals => <li key={meals.id}> 
                <MealItem {...meals} />
             </li>)}
        </ul>
    </div>
  )
}

export default MealsGrid

