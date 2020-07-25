const router = require('express').Router();
let Crew = require('../models/crew.model');

router.route('/').get((req, res) => {
  Crew.find()
    .then(crews => res.json(crews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const {crewname, description, password,members ,heads,photo} = req.body
  let without = photo?photo:'https://st2.depositphotos.com/1010751/6195/v/950/depositphotos_61952199-stock-illustration-teamwork-group-of-3-people.jpg'
  const newCrew = new Crew({
    crewname,
    description,
    password,
    members,
    heads,
    photo:without
  });

  newCrew.save()
  .then(() => res.json('Crew added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/exist/:login').get((req, res) => {
  const {login}=req.params
  Crew.find({"members":login})
    .then(crews => res.json(crews.length?false:true))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/photos').post(async(req, res) => {
  const {groups}=req.body
  let photos
    await Crew.find({"crewname":groups})
    .then(crews =>photos=crews)
    .catch(err => res.status(400).json('Error: ' + err));
    res.json(photos.map(item => item.photo))
});
router.route('/list/:letters').get(async(req, res) => {
  const {letters}=req.params
  let all;
    await Crew.find({"crewname":{$regex : `.*${letters}.*`}})
    .then(crews =>all=crews)
    .catch(err => res.status(400).json('Error: ' + err));
  const conditionaled =all?(all.map(item=>({crewname:item.crewname,photo:item.photo}))):null
    res.json(conditionaled)
});
module.exports = router;