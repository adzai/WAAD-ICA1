const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const public = path.join(__dirname, 'public');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send()
})

app.get('/pcu', (req, res) => {
  res.sendFile(path.join(public, 'pcu.html'));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
