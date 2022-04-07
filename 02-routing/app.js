const express = require('express')
const app = express()
const port = 3000


// It is possible to route using the app constant
// Handles GET HTTP method for /
app.get('/', (req, res) => {
    res.send("Home get request")
})

// Handles POST HTTP method for /
app.post('/', (req, res) => {
    res.send("Home post request")
})

// Handles all HTTP methods for /test
app.all('/test', (req, res) => {
    res.send("Standard test route!")
})

// But it is also possible to create multiple routers and use those
const apiRouter = express.Router();
const adminRouter = express.Router();

// Can be useful to handle routes behind a prefix e.g. /api/...
app.use('/api', apiRouter)
app.use('/admin', adminRouter)

apiRouter.get('/test', (req, res) => {
    res.send("Hello from the API router test route!")
})

adminRouter.get('/test', (req, res) => {
    res.send("Hello from the admin router test route!")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
