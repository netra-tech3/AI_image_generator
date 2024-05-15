import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import default1_image from '../Assets/default1_image.jpg'
import ai from '../Assets/ai.jpg'



const ImageGenerator = () => {

const [image_url,setImage_url]= useState("/");
let inputRef= useRef(null);
const [loading,setLoading]= useState(false);

const imageGenerator= async () =>{
    if(inputRef.current.value===""){
        return 0;

    }
    setLoading(true);
    const response= await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent?key=${API_KEY}",{//use ur api key here
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                
                
            },

           
            body:JSON.stringify({
                "contents": [
                  {
                    "parts": [
                      {
                        "text": "Write a story about a magic backpack"
                      }
                    ]
                  }
                ]
              }),


        }

    );

  let data= await response.json();
 console.log(data);
  setLoading(false);



}





  return (
    
    <div className='ai-image-generator'>
    <div className='logo'> <img  src={ai} alt=''/></div>
    
    <div className='header'>  Ai image <span> generator</span></div>
    <div className='img-loading'>
    <div className='image'><img src={image_url==="/"? default1_image:image_url} alt='' /></div>
    <div className={loading? "loading-bar-full" :"loading-bar"}>

    </div>
    <div className={loading?"loading-text": "display-none"}>Loading...</div>

    </div>
    <div className='search-box'>
        <input type='text'  ref={inputRef} className='search-input' placeholder='Describe what do u want' />
        <div className='generate-btn' onClick={() =>{imageGenerator()} }>
            generate
        </div>
    </div>

    

     
    </div>
  )
}

export default ImageGenerator
