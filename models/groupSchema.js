const mongoose = require("mongoose");
const user = require("../models/userSchema");

const GroupSchema = new mongoose.Schema({
  groupName:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  adminId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  mobileNumber: {
    type: Number,
    default: 0,
  },
  participents: [
      {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
  ],

});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
 