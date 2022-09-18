const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pendingSchema = new Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    tests: [
        {
            name:{type:String},
            Link:{type:String, required:true}
        }
    ],
    notes: [
        {
            name:{type:String},
            Link:{type:String, required:true}
        }
    ],
    
  }, {
    timestamps: true,
  });

  const Pending = mongoose.model('Pending',pendingSchema );

  module.exports = Pending;