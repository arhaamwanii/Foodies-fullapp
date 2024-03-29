'use server';

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
  }
