const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let name = req.query.name || "Anonymous";
    let limit = req.query.limit;
    const user = {
        name: name,
        admin:  name.toLowerCase() === "adam"
    }
    res.render('pages/index', {
        user
    })
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})
