import sql from 'better-sqlite3'

const db = sql('meals.db')

export   function getMeals(){
    return db.prepare('SELECT * FROM meals').all();
}

export  function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// there are a lot ways to do that
// sever component can be converted to server components
// it does not use server components
// but the meal is not being showen this 
