import React, {useState} from 'react'
import ImageCarousel from './components/animal-image-carousel/ImageCarousel'
import './style.scss'

export const GlobalStateContext = React.createContext('App')

export default function App() {
    
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className='App'>
            <GlobalStateContext.Provider 
                value={{isLoading, setIsLoading}}>
                <ImageCarousel />
            </GlobalStateContext.Provider>
        </div>
    )
}