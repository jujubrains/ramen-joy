const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  login: {
    type: Boolean,
    default: false
  },
  friends: [
    {
      type:Schema.Types.ObjectId,
      ref: "User"
    }
  ]
})

const User = mongoose.model("User", UserSchema); 

module.exports = User; 