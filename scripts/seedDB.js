const mongoose = require("mongoose"); 
const db = require("../models"); 

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ramenDB"
);

const UserSeeds = [
  {
    name: "alex",
    password: "bigBlackBooties",
    
  },
  {
    name:"Juju",
    password: "DoerOfHomework"
  },
  {
    name:"Sasha",
    password:"Vodka"
  },
  {
    name:"charlie",
    password:"EggplantSucker"
  },
  {
    name:"LN",
    password:"CleanFreak"
  }
];

db.User
  .remove({})
  .then(()=> db.User.collection.insertMany(UserSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0)
  })
  .catch(err =>{
    console.error(err); 
    process.exit(1); 
  })