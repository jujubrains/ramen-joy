const router = require('express').Router();
const userController = require('../../controllers/userController');
const User = require("../../models/user");

router.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields."});
  }
  if (password.length < 5) {
    return res.status(400).json({ msg: "Please enter a password at least 5 characters long."});
  }
  const user = await User.findOne({ email:email })
  if (user) return res.status(400).json({ msg: "User already exists."});
  const newUser = await User.create({
    name,
    email,
    password
  });
  res.json({ msg: "You are now registered", newUser})
  console.log(newUser)
})

router.put("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields." });
  }
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ msg: "User does not exist." });
  if (user.password!== password) return res.status(400).json({ msg: "Invalid password."});
  user.login = true;
  res.json({ msg: "You are logged in.", user});
});

router.put("/logout", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email })
  user.login = false;
  res.json({ msg: "You are logged out.", user})
})
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create); 

module.exports = router; 