const express = require('express')
const itemsRouter = express.Router()

const items = [
    {
        name:"rice",
        Price:1500,
        Size:"large",
        Id:34
    },
    {
        name:"beans",
        Price:5300,
        Size:"large",
        id:399
    },
    {
        name:"fufu",
        Price:300,
        Size:"Small",
        id:154
    }

]

itemsRouter.get('/', (req, res) => {
    res.json(items)
})

module.exports = itemsRouter