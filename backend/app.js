const express = require("express");
const toDoPath = require("./routes/tasks");
const app = express();
const mongoose = require("mongoose");

// Connect To Mongoose
async function ConnectToMongoose() {
  try {
    const res = await mongoose.connect("mongodb://127.0.0.1:27017/Todo");
    if (res) {
      console.log(`Connecting to MongoDb Successfully...`);
    }
  } catch (error) {
    console.log(error.message);
  }
}
ConnectToMongoose();
//Middleware
app.use(express.json());
app.use("/api", toDoPath);

const PORT = 7800;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
