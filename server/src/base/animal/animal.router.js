const Animal = require('./animal.model')

module.exports = function (serverInstance){
    /**
     * example for this request: http://localhost:5000/animal/?animalType=cat|dog
     */
    serverInstance.get("/animal", function(req, res){
        const animalType = req.query['animalType'];
        const animalPictures = Animal.getPicturesOfAnimals(animalType)
        res.send({animalType, animalPictures})
    })
}