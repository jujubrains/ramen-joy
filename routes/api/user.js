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

const DIR ='./public'; 

const storage = multer.diskStorage({
  destination:(req, rile, cb)=>{
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
})

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});

// User model
let User = require('../../models/user');

router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      profileImg: url + '/public/' + req.file.filename
  });
  user.save().then(result => {
      res.status(201).json({
          message: "User registered successfully!",
          userCreated: {
              _id: result._id,
              profileImg: result.profileImg
          }
      })
  }).catch(err => {
      console.log(err),
          res.status(500).json({
              error: err
          });
  })
})

router.get("/", (req, res, next) => {
  User.find().then(data => {
      res.status(200).json({
          message: "User list retrieved successfully!",
          users: data
      });
  });
});

module.exports = router;