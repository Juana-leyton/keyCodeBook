const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const { conectDB } = require('./db')
const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())

conectDB()

require('./routes/user')(app)
require('./routes/genre')(app)
require('./routes/book')(app)

app.listen(port, () => {
    console.log('El servidor se levantó correctamente')
})