const express = require("express"); 
const app = express(); 
const path = require("path"); 

const mongoose = require("mongoose"); 
const PORT = process.env.PORT || 3001; 

//Define middleware here 
app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build")); 
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ramen",
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)

const User = mongoose.model('User', new mongoose.Schema(
  {
    name: 'string'
  }
))

app.post("/api/user", async(req, res) => {
  const user = await User.create({
    name: req.body.name, 
  })
  res.json(user); 
})

app.get("/api/user", async(req, res) =>{
  const user = await User.find({}); 
  res.json(user); 
})



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})