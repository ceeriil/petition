const mongoose = require("mongoose");

const petitionSchema = new mongoose.Schema({
 
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expectedVote: {
    type:Number,
    required: true,
  },
  category:{
      type: String,
      required: true,
  },
  completed:{
    type: Boolean,
    default: false,
    required: false
  },
  supporters:{
      type:Array,
      default: [],
      required: true,
  },
  user:{
    type:Object,
    default:{},
    required: true,
  },
 
},{timestamps:true});

const petition = mongoose.model("Petition", petitionSchema);

module.exports = petition;
