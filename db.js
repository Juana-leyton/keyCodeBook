const mongoose = require('mongoose')
const config = require('./config')

const conectDB = () => {
    mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, (error) =>{
        if (error){
            console.log('Error: ', error)
        }else{
            console.log('Nos conectamos a la DB')
        }
    })
}

module.exports = { conectDB }