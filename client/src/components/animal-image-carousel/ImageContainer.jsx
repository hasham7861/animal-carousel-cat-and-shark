import React from 'react'

export default function ImageContainer({slides, current}){
   return (<div>
    {slides.map((imageUrl, index) => {
        return (
            <div key={index}>
                {index === current && (
                    <img className="slide-image" src={imageUrl} alt="" />
                )}
            </div>
        );
    })}
    </div>)
}