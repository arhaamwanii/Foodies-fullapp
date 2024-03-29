import React from 'react'
import classes from "./meals-grid.module.css"

function MealsGrid() {
  return (
    <div>
        <ul>
            {mealsLayout.map(meals => <li key={meals.id}> 
                
             </li>)}
        </ul>
    </div>
  )
}

export default MealsGrid