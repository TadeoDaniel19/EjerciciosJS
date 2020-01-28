const fetch = require('node-fetch')
const express = require("express")
const app = express()
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0'

//run the app
app.listen(3000, () => {
  console.log("Server running on port 3000")
})

//fetch data from the api 
fetch(pokeUrl) //limit and offset because only get 150 kanto pokemon
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    app.get("/pokemon/kanto", (req, res, next) => {
      res.json(data) //parse data to string 
    })
  })
  .catch(err => console.log(err))
