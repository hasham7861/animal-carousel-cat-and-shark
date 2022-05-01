import React, { useState, useContext } from "react";
import './style/ImageCarousel.scss';

import {
    BiLoaderAlt as IconSpinner
} from "react-icons/bi"

import {GlobalStateContext} from '../../app'
import useGetSlideImages from "./hooks/useGetSlideImages";
import FilterContainer from "./FilterContainer";
import ImageContainer from "./ImageContainer";
import NavigationContainer from "./NavigationContainer";

export default function ImageCarousel() {
    
    const {isLoading} = useContext(GlobalStateContext);
    const [current, setCurrent] = useState(0); 
    const [filter, setFilter] = useState();
    const slides = useGetSlideImages(filter)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const onUpdateFilter = (filter) => {
        setFilter(filter)
    }

    const getCarouselJSX = () => (
        <> 
            <FilterContainer onUpdateFilter={onUpdateFilter} filter={filter}/> 
            <ImageContainer slides={slides} current={current}/>
            <NavigationContainer prevSlide={prevSlide} nextSlide={nextSlide}/> 
        </>)
    


    return (
        <div className="slider">
            {isLoading ? <IconSpinner className="spinner-icon" />: getCarouselJSX()}
        </div>
    )
}