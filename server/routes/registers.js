var express = require('express');
var router = express.Router();
let Admin = require(`../models/admin.model`);

router.get('/', function(req, res, next) {
    Pending.find()
    .then(pendings => res.json(pendings))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').post((req, res) => {

    const password = req.body.password;

    const newAdmin = new Admin ({
      password: password,
    });
    
    newAdmin.save()
    .then(() => res.json('password added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});
router.route('/login').post( (req,res)=>{
    Admin.findOne({password:req.body.password}).then(user => {
        if(!user){
            return res.json({
                admin: false,
                message:"Wrong Password Cro"
            })
        }
        return res.json({
            admin:true,
            message: "Welcome to Notified Admin"
        })
    })
});


module.exports = router;