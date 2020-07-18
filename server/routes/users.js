const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/auth/:login/:password').get((req, res) => {
  const {login,password}=req.params;
  User.find({"username":login,"password":password}).then(users => res.json(users.length?true:false))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const {username,password,email} = req.body;
  const isExist=()=>{
    const newUser = new User({
      username:username,
      password:password,
      email:email
    });
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  }

  User.find({ $or: [ {username:username},{password:password},{email:email} ] }).then(users => users.length?res.json('User arleady exist'):isExist())
});

module.exports = router;