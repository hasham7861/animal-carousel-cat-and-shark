import React, { useState, useEffect, useContext } from "react";
import {GlobalStateContext} from '../../../app'
import {getAnimalPictures} from '../api/animals'

export default function useGetSlideImages(filter){
   
    const [slides, setSlideItems] = useState([]);
    const {setIsLoading}= useContext(GlobalStateContext);
    
    const updateSlideImagesByFilter = async () => {

        setIsLoading(true)
    
        try{
           const response = await getAnimalPictures(filter)
           const data = await response.json()

           setSlideItems(data.animalPictures)
        
        } catch {
            alert('Error occured when fetching animal pics')
        } finally {
            setIsLoading(false)
        }
      
    }

    useEffect(() => {
        updateSlideImagesByFilter(filter)
    }, [filter])

    return slides;

}