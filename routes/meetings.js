const router = require('express').Router();
let Meeting = require('../models/meeting.model');

router.route('/').get((req, res) => {
  Meeting.find()
    .then(meeting => res.json(meeting))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/create').post((req, res) => {
    const {meetname,groupId,description,date,time,location} = req.body
    const equaled = `${date}, ${time}`
    const newMeeting = new Meeting({
      meetname,group:groupId,description,date:equaled,takes:[],location
    });
    newMeeting.save()
    .then(() => res.json('Meeting added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/get/:id').get((req, res) => {
    const {id}=req.params;
    Meeting.find({group:id})
      .then(meeting => res.json(meeting))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/confirm').put((req, res) => {
    const {id,user} = req.body;
    Meeting.collection.updateOne(
      { _id:id },
      {
        $push:{
          "takes": user
        }
      }
   )
  Meeting.findOne({_id:id})
      .then(meeting => res.json(meeting))

  });

module.exports = router;