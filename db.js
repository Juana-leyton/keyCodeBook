const mongoose = require('mongoose')

const conectDB = () => {
    mongoose.connect('mongodb+srv://Juana_leyton:Juana21042003@juanita.xbxya.mongodb.net/keyCodeBook?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) =>{
        if (error){
            console.log('Error: ', error)
        }else{
            console.log('Nos conectamos a la DB')
        }
    })
}

module.exports = { conectDB }