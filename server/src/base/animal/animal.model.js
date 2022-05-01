const { shuffleArray } = require('../../lib/array-helpers')

const {catsPictures, sharksPictures} = require('./animal-info.json')

const ANIMAL_TYPES = {
    SHARK: 'shark',
    CAT: 'cat'
};

module.exports = class Animal {
    static getPicturesOfAnimals(animalType){
        switch(animalType){
            case ANIMAL_TYPES.CAT:
                return catsPictures
            case ANIMAL_TYPES.SHARK:
                return sharksPictures
            default:
                return shuffleArray([...catsPictures, ...sharksPictures])
        }
    }
}
