const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const documentSchema = new Schema({
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

  const Document = mongoose.model('Document',documentSchema );

  module.exports = Document;