// Importing required modules  
import fs from 'node:fs/promises'; // Use promises version of fs for async/await  
import sql from 'better-sqlite3';  
import slugify from 'slugify';  
import xss from 'xss';  
  
// Initialization of the database  
const db = sql('meals.db');  
  
// Function to get all meals  
export function getMeals() {  
    return db.prepare('SELECT * FROM meals').all();  
}  
  
// Function to get a single meal by slug  
export function getMeal(slug) {  
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);  
}  
  
// Function to save a meal  
export async function saveMeal(meal) {  
    // Slugifying and sanitizing inputs  
    meal.slug = slugify(meal.title, { lower: true });  
    meal.instructions = xss(meal.instructions);  
  
    // Handling the image upload  
    const extension = meal.image.name.split('.').pop();  
    const fileName = `${meal.slug}.${extension}`;  
    const imagePath = `public/images/${fileName}`;  
  
    // Using `fs.writeFile` to handle the buffer  
    const bufferedImage = await meal.image.arrayBuffer();  
    await fs.writeFile(imagePath, Buffer.from(bufferedImage)); // No need for a stream  
  
    // Updating the image path for the meal object  
    meal.image = `/images/${fileName}`; // Corrected the path  
  
    // Inserting the meal into the database  
    db.prepare(`  
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)  
        VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)  
    `).run(meal);  
}  

// there are a lot ways to do that
// sever component can be converted to server components
// it does not use server components
// but the meal is not being showen this 


// STORING THE UPLOADED FILES IT THE PUBLIC FOLDER

