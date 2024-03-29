import React from 'react'
import classes from "./loading.module.css"

function MealsLoadingPage() {
  return <p className={classes.loading}>
    Fetchign Meals...
  </p>
}

export default MealsLoadingPage

