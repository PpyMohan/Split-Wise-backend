const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  mobileNumber: {
    type: String,
    default: "0123456789",
  },
  participentGroups:[
    {type: mongoose.Schema.Types.ObjectId, default: 0, ref: 'Group'}
  ],

});

const  User = mongoose.model("User", UserSchema);
module.exports = User;
