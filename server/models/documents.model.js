const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const documentSchema = new Schema({
    topic: { type: String, required: true },
    subject: { type: String, required: true },
    tests: [
        {
            name:{type:String},
            link:{type:String, required:true}
        }
    ],
    notes: [
        {
            name:{type:String},
            link:{type:String, required:true}
        }
    ],
    
  }, {
    timestamps: true,
  });

  const Document = mongoose.model('Document',documentSchema );

  module.exports = Document;