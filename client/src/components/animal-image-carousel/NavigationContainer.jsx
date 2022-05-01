import React from 'react'

import {
    FaChevronRight as IconRight,
    FaChevronLeft as IconLeft,
} from "react-icons/fa";


export default function NavigationContainer({prevSlide, nextSlide}){
    return (<div>
                <IconLeft className="left-arrow" onClick={prevSlide}/>
                <IconRight className="right-arrow" onClick={nextSlide}/>
    </div>)
}