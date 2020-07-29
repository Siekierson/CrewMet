const router = require('express').Router();
let Message = require('../models/message.model');

router.route('/').get((req, res) => {
  Message.find()
    .then(mess => res.json(mess))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/create').post((req, res) => {
  const {message,owner,date,group} = req.body
  const newMessage = new Message({
    message,owner,date,group
  });
  newMessage.save()
  .then(() => res.json('Message added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/get/:id').get((req, res) => {
  const {id} = req.params;
  Message.find({"group":id})
    .then(mess => res.json(mess))
    .catch(err => res.status(400).json('Error: ' + err));
});
// delete all mess for development :))
// router.route('/all').delete((req, res) => {
//   Message.remove()
//   res.json('deleted succesfully')
// });

module.exports = router;