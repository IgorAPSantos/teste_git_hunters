const express = require('express')

const app = express()

app.get('/victor', (req, res) => {
  return res.json("Victor")
})

app.get('/vinicius', (req, res) => {
  return res.json("Vinicius")
})

app.listen(3000, () => console.log("Funcionando porta 3000"))