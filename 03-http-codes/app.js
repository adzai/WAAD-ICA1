const express = require('express')
const app = express()
const port = 3000


const users = [
    {id: 0,
        name: "Adam",
        role: "admin"},
    {id: 1,
        name: "Bob",
        role: "user"}
]


app.get('/users/:id', (req, res) => {
    if (Math.random() < 0.3) { // Simulating a random server error
        res.status(500).send("Internal server error")
    } else if (req.params.id < 0 || req.params.id >= users.length) {
        res.status(404).send("ID not found")
    } else {
        res.status(200).json(users[req.params.id])
    }
})

app.get('/user/:id', (req, res) => {
    res.redirect(301, req.protocol + '://' + req.get('host') + "/users/" + req.params.id)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
