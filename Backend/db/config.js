const mongoose = require("mongoose");
const dbURL =
  "PUT URL TO YOUR OWN DATABASE";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected");
  });
