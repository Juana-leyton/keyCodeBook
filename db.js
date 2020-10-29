const mongoose = require('mongoose')

const conectDB = () => {
    mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true }, (error) =>{
        if (error){
            console.log('Error: ', error)
        }else{
            console.log('Nos conectamos a la DB')
        }
    })
}

module.exports = { conectDB }