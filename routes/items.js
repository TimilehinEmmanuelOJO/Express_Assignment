const express = require('express')
const itemsRouter = express.Router()

const items = [
    {
        name:"rice",
        Price:1500,
        Size:"Medium",
        id:1
    },
    {
        name:"beans",
        Price:5300,
        Size:"large",
        id:2
    },
    {
        name:"fufu",
        Price:300,
        Size:"Small",
        id:3
    }

]
//At home, it returns the whole items to get all items
itemsRouter.get('/', (req, res) => {
    res.json(items)
})

//To create an item
itemsRouter.post('/', (req, res) => {
    const item = req.body
    items.push(item)
    res.json(item)
})

//To get one item (use the id to get the item) i could use price but they may hace same price.
itemsRouter.get('/:id', (req, res) => {
    const id = req.params.id //fetch the id from the json and assign to the new id.
    const item = items.find(item => item.id == id) //call the find ppty on the items to return true if the id of each
    // book in the array matches target id

    if (!item){
        res.status(404)
        res.end("item not found")
        return
    }

    res.json(item)
})


//Update an item//Use Put
itemsRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const item = req.body
    const index = items.findIndex(item => item.id = id)

    if (index == -1){
        res.status(404)
        res.end('item not found')
        return
    } 

    items[index] = item
    res.json(item)
})


//Delete an item
itemsRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = items.findIndex(item => item.id == id)

    if(index == -1){
        res.status(404)
        res.end('item not found')
        return
    }

    items.splice(index, 1)
    res.json(items)
})





module.exports = itemsRouter