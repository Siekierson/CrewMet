const router = require('express').Router();
let Crew = require('../models/crew.model');

router.route('/').get((req, res) => {
  Crew.find()
    .then(crews => res.json(crews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const {crewname, description, password,members ,heads,photo} = req.body

  const newCrew = new Crew({
    crewname,
    description,
    password,
    members,
    heads,
    photo
  });

  newCrew.save()
  .then(() => res.json('Crew added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/exist/:login').get((req, res) => {
  const {login}=req.params
  Crew.find({"crewname":login})
    .then(crews => res.json(crews.length?false:true))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;