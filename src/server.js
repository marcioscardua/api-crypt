const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(routes)

app.use('/', (req, res) => {
    res.json({deconde: true})
} )
app.listen(4000, () => console.log('Crypts Run'))