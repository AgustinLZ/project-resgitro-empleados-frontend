const cors = require('cors')
const express = require('express')
const app = express()
const port = 4200

app.use(cors())
app.get('/'), (req, res)=> {
  res.send({status:'BIEN!'})
}
