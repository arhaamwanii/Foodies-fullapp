import sql from 'better-sqlite3'

const db = sql('meals.db')

export async  function getMeals(){
    await new Promise((resolve) => setTimeout(resolve , 2000)); 
    return db.prepare('SELECT * FROM meals').all();
}

// there are a lot ways to do that
// sever component can be converted to server components
// it does not use server components