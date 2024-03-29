'use client';

import React , {useRef, useState} from 'react'
import classes from "./imagepicker.module.css"
import Image from 'next/image';

function ImagePicker({label , name}) {
    const imageInput = useRef();
    const [pickedImage , setPickedImage] = useState()

    function handleClick(){
        imageInput.current.click();
    }
    
    function handleInputChange(event){
        const file = event.target.files[0]
        if(!file){
            return ; 
        }
        const fileReader = new FileReader();
    
        fileReader.onload = () => {
            console.log("File loaded successfully:", fileReader.result);
            setPickedImage(fileReader.result)
        }
    
        fileReader.onerror = (error) => {
            console.error("Error occurred while reading the file:", error);
        }
    
        fileReader.readAsDataURL(file);
    }
    

  return (
    <div className={classes.picker}>
        <label htmlFor={name} > {label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage  && <p> No image picked yet.</p> }
                {pickedImage  && <Image src={pickedImage} fill  alt="Image selected by the user"/> }
            </div>
            <input
            ref={imageInput}
            className={classes.input} 
            id={name} 
            type="file" 
            accept='image/png , image/jpeg' 
            name={name}
            onChange={handleInputChange}/>
            <button  
            className={classes.button}
            type='button'
            onClick={handleClick}>
                Pick an Image
            </button>
        </div>
    </div>
  )
}

export default ImagePicker



// multiple files can be picked using the input you have to add the multiple prop
// well you learn by building that is pretty obvius so after this thing is finihsed will get straight ot buildind will also make demos for it on twitter
// porject one -- the hierarchy maker 
// project two reddit.gpt


// 