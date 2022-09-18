var express = require('express');
var router = express.Router();
let Document = require(`../models/documents.model`);
/* GET the name and subject of every document catagory i.e Advanced Functions Math */
router.get('/', function(req, res, next) {
  Document.find('name subject')
  .then(documents => res.json(documents))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const name = req.body.name;
  const subject = req.body.subject;
  const tests = req.body.tests;
  const notes = req.body.notes;

  const newDocument = new Document ({
    name,
    subject,
    tests,
    notes,
  });

  newDocument.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/:name').get((req, res) => {
  Document.find({name:req.params.name})
    .then(document => res.json(document))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update').post((req,res)=>{
    
    Document.find({name:req.body.name})
      .then(document =>{
        if(!document){
          const subject = req.body.subject;
          const topic = req.body.topic;
          const type = req.body.type;
          const name = req.body.name;
          const link = req.body.link;
          const tests = [];
          const notes = [];
          if(type == "test")tests.push({name:name,link:link});
          else notes.push({name:name,link:link});
          const newDocument = new Document ({
            topic,
            subject,
            tests,
            notes,
          });
          newDocument.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
        }else{
          document.tests = [...document.tests, ...req.body.tests];
          document.notes = [...document.notes, ...req.body.notes];

          document.save()
            .then(() => res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
      })
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
