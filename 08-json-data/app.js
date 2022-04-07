const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    console.log("Received JSON: " + JSON.stringify(req.body))
    res.send()
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
