const express = require('express')
const cors = require('cors');
const productService = require('./src/services/products.service')
const app = express()
const port = 3000

const path = require('path')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Routes static files
app.use('/', express.static(path.join(__dirname, 'public')))

// Routes api
//// Products
app.get('/api/products', (req, res) => {
    res.json(productService.getProducts())
})

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
app.use(function (req, res) {
    res.status(404);
    res.send({ error: "Sorry, can't find that" })
});

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
})