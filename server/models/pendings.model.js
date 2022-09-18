const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pendingSchema = new Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    topic: {type:String, required:true},
    type:{type:String, required:true} ,
    link:{type:String, required:true} ,
    
  }, {
    timestamps: true,
  });

  const Pending = mongoose.model('Pending',pendingSchema );

  module.exports = Pending;