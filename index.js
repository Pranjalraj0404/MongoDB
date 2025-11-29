import express from "express"

const app = express()
const port = 3000

app.use(express.json())

let  teaData = []
let nextID = 1


//add a new data
app.post('/te', (req, res) => {
    const {name, price} =  req.body
    const newTea = {id: nextID++, name , price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

// get all data
app.get('/te',(req, res) => {
    res.status(200).send(teaData)
})
 //get data with id
app.get('/te/:id',(req, res) => {
    const te = teaData.find(t => t.id === parseInt(req.params.id))
    if (!te){
    return res.status(404).send("content not found")
    }
    res.status(200).send(te)
   })

//update
app.put('/te/:id',(req, res) => {
    const te =  teaData.find(t => t.id === parseInt(req.params.id))

    if (!te){
    return res.status(404).send("content not found")}

    const {name, price} = req.body
    teaData.name = name
    tea.price = price
    res.status(200).send(te)
    })

//delete
app.delete('/te/:id',(req, res) => {
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))
    if (index === -1){
        return res.status(404).send("not found")
    }
    teaData.splice(index, 1)
    return res.status(404).send("deleted found")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
