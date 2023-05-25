const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json()) 

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]


//get all 
app.get("/inventoryItems", (req, res) => {
    res.send(inventoryItems)
    })


//get by type
app.get("/inventoryItems/type", (req, res) => {
    const type = req.query.type
    const filteredItem = inventoryItems.filter(item => item.type === type)
    res.send(filteredItem)
})
    
app.listen(9000, ()=>{
    console.log("Server is running")
})

module.exports = express