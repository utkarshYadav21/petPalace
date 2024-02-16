const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true, validate: isEmail },
  Password: { type: String, required: true, minlength: 8 },
});
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.Password = await bcrypt.hash(this.Password, salt);
});
userSchema.statics.login = async (Email, Password) => {
  const user = await User.findOne({ Email });
  if (user) {
    const auth = await bcrypt.compare(Password, user.Password);
    if (auth) {
      return user;
    } else console.log("Password incorrect");
  } else console.log("No user found, please register first");
};
const User = mongoose.model("Users", userSchema);
module.exports = User;
