const express = require('express');
const { listeningPort } = require('./config');
const animalRouter = require('../base/animal/animal.router');
const getCorsConfig = require('./cors');

module.exports = class Server {
    
    static _instance = null;  
   
    static _create(){
        if(this._instance === null){
            this._instance = express();
            this._instance.use(getCorsConfig())
        }


        return this._instance;
    }

    static start(){
        
        this._create();

        animalRouter(this._instance)

        this._instance.listen(listeningPort,()=>{
            console.log('Server is listening for request on port:',  listeningPort)
        })
        
    }
}