var express = require('express');
const expenseModel = require("../models/expenseSchema");
var router = express.Router();
const mongoose = require("mongoose");

/* GET all Expenses for group. */
router.get('/getExpenses/:id',async function(request, response) {
  try {
    const result = await expenseModel.find({"groupId":request.params.id}).exec()
    response.send(result);
  } catch(error){
    response.status(500).send(error);
  }
});
async function fetchexpenses(id) {
  return await expenseModel.find({"groupId":id}).exec();
}


/**/
router.post('/addExpenses', async (request, response) => {
  const expense = new expenseModel(request.body);
  try {
    await expense.save();
    response.send(expense);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
