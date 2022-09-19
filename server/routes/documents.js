var express = require('express');
var router = express.Router();
let Document = require(`../models/documents.model`);
/* GET the name and subject of every document catagory i.e Advanced Functions Math */
router.get('/', function(req, res, next) {
  Document.find('topic subject')
  .then(documents => res.json(documents))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const topic = req.body.topic;
  const subject = req.body.subject;
  const tests = req.body.tests;
  const notes = req.body.notes;

  const newDocument = new Document ({
    topic,
    subject,
    tests,
    notes,
  });

  newDocument.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/:topic').get((req, res) => {
  Document.find({topic:req.params.topic})
    .then(document => res.json(document))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update').post((req,res)=>{
    
    Document.find({topic:req.body.topic,subject:req.body.subject})
      .then(document =>{
        const subject = req.body.subject;
        const topic = req.body.topic;
        const type = req.body.type;
        const name = req.body.name;
        const link = req.body.link;
        if(document.length == 0){
          
          const tests = [];
          const notes = [];
          if(type == "test")tests.push({name:name,link:link});
          else notes.push({name:name,link:link});
          const newDocument = new Document ({
            topic:topic,
            subject:subject,
            tests:tests,
            notes:notes,
          });
          newDocument.save()
          .then(() => res.json('New topic and note added!'))
          .catch(err => res.status(400).json('Server issue diff Error: ' + err));
        }else{
          if(type == "tests")document[0].tests.push({name:name,link:link});
          else document[0].notes.push({name:name,link:link});

          document[0].save()
            .then(() => res.json('note updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
      })
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
