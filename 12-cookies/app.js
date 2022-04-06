const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

const secretCookie = "cookie=secret-cookie"

app.post('/secret', (req, res) => {
  let cookie = req.headers.cookie
  secretCookie === cookie ? res.send("You got the secret!") : res.send("Wrong cookie!")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
