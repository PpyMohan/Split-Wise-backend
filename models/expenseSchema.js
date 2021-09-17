const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  groupId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Group'},
  expenseDetails:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  amount:{
    type: Number,
    required: true
  },
  spentBy:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  owesBy:[
    {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
  ]
});

const  Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
