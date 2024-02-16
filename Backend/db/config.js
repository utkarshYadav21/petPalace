const mongoose = require("mongoose");
const dbURL =
  "mongodb+srv://utkarshyadav329:22utkarsh22@cluster0.w14eg7b.mongodb.net/Adoption";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected");
  });
