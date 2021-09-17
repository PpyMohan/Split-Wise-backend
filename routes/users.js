var express = require('express');
const userModel = require("../models/userSchema");
const groupModel = require("../models/groupSchema");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registerUser', async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.post('/createGroup', async (request, response) => {
  const group = new groupModel(request.body);
  try {
    await group.save();
    response.send(group);
  } catch (error) {
    response.status(500).send(error);
  }
});

/*add user to group*/
router.patch("/addUser/:id", async (request, response) => {
  try {
    const group = await groupModel.findByIdAndUpdate(request.params.id, request.body);
    response.send(group);
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = router;
