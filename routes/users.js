const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/auth").post((req, res) => {
  const { username, password } = req.body;
  User.find({ username: username, password: password })
    .then((users) => res.json(users[0]))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { username, password, email } = req.body;
  const isExist = () => {
    const newUser = new User({
      username,
      password,
      email,
    });

    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  };

  User.find({
    $or: [{ username: username }, { password: password }, { email: email }],
  }).then((users) =>
    users.length ? res.json("User arleady exist") : isExist()
  );
});
router.route("/group").put((req, res) => {
  const { login, crewname } = req.body;
  User.collection.updateOne(
    { username: login },
    {
      $push: {
        groups: crewname,
      },
    }
  );
  res.json();
});
module.exports = router;
