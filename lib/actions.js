'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal (formData){

    const meal = {
      title : formData.get('title'),
      image : formData.get('image'),
      instructions : formData.get('instructions'),
      summary : formData.get('summary'),
      creator : formData.get('name'),
      creator_email : formData.get('email')
    }
    console.log(meal)
    await saveMeal(meal);
    revalidatePath(
      '/meals'
    );
    redirect('/meals')
  }


// after doing this the input is fixed and is being showen except for the image
// at the end it is the next folder that contains all the cached resoponse and also the public folder at the end is showen to it
// production will try to find images in next folder
// storing images in aws s3
// adding static meta data

