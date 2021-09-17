const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.js");
const expensesRouter = require("./routes/expenses.js");
const username = "mohan";
const password = "s4mWLqfxMaYcsZq8";
const cluster = "cluster0.8zrlz";
const dbname = "Splitwise";

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    w: "majority"
  }
);
// mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(userRouter);
app.use(expensesRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
