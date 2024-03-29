'use client';

import React , {useRef} from 'react'
import classes from "./imagepicker.module.css"

function ImagePicker({label , name}) {
    const imageInput = useRef();

    function handleClick(){
        imageInput.current.click();
    }

  return (
    <div className={classes.picker}>
        <label htmlFor={name} > {label}</label>
        <div className={classes.controls}>
            <input
            ref={imageInput}
            className={classes.input} 
            id={name} 
            type="file" 
            accept='image/png , image/jpeg' 
            name={name}/>
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

