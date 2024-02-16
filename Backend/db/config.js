const mongoose = require("mongoose");
const dbURL =
  "PUT THE URL FOR YOUR DATABASE";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected");
  });
