// console.log("hello world")
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()
app.get('/api/goals', (req, res) => {
  res.send({ message: 'Get Goals' })
})

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.listen(port, () => console.log(`server started on port ${port}`))