const express = require('express')
const bodyParser = require('body-parser')
const itemsRoute = require('./routes/items')

const PORT = 3030
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/items', itemsRoute)

app.get('/', (req, res) => {
    res.end('HomePage')
})





app.listen(PORT, () => {
    `Server listening on port ${PORT}`
})