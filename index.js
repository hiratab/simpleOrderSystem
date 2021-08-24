'use strict'

const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes')

app.get('/health', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(express.urlencoded())
app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})