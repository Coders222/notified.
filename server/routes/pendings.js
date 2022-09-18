var express = require('express');
var router = express.Router();
let Pending = require(`../models/pendings.model`);

router.get('/', function(req, res, next) {
    Pending.find()
    .then(pendings => res.json(pendings))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {

    const topic = req.body.topic;
    const subject = req.body.subject;
    const link = req.body.link;
    const type = req.body.type;
    const name = req.body.name;

    const pendingDocument = new Pending ({
      topic,
      subject,
      type,
      name,
      link,
    });
  
    pendingDocument.save()
    .then(() => res.json('PendingDocument added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});
router.route('/:id').delete((req, res) => {
    Pending.findByIdAndDelete(req.params.id)
      .then(() => res.json('Pending deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;