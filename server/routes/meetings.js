const router = require('express').Router();
let Meeting = require('../models/meeting.model');

router.route('/').get((req, res) => {
  Meeting.find()
    .then(meeting => res.json(meeting))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/create').post((req, res) => {
    const {} = req.body
    const newMeeting = new Meeting({
      
    });
    newMeeting.save()
    .then(() => res.json('Meeting added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;