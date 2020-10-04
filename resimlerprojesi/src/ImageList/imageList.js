import React from 'react'
import Image from './Image'
import  './image.css'
export default function imageList(props) {

    const formattedImageList = props.imageList.map(image=>{
        return (
           <Image key={image.id} image={image}/> 
        )
        
    });
    return (
        <div className="image-list-container">
            {formattedImageList}
        </div>
    )
}
