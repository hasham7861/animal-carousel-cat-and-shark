import config from '../../../config/config.dev.js';

const requestClient = (payload) =>{
    const queryStr = Object.keys(payload.query)
            .map(key => `${key}=${payload.query[key]}`)
            .join('&');

    return fetch(`${config.animalPicturesApiUrl}${payload.url}?${queryStr}`,{
        method: payload.method,
    } )
}

const defaultErrorResponsePayload = (error)=> ({
    hasError:true,
    error: {
        message: error.message,
    }
})
export const getAnimalPictures = async (animalType) => {
    try{
        const response = await requestClient({
            method: 'get',
            url: '/animal',
            query: {animalType:animalType}, 
        })
        return response;
    } catch (error) {
        return defaultErrorResponsePayload(error)
    }
}
