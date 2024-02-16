const User = require("../models/User");
const jwt = require("jsonwebtoken");

const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "pet_adoption", { expiresIn: maxAge });
};
module.exports.register_post = async (req, res) => {
  try {
    let result = new User(req.body);
    let user = await result.save();
    const token = createToken(user._id);
    res.status(201).json({user,token});
  } catch (err) {
    console.log(err);
  }
};
module.exports.login_post = async (req, res) => {
  const user = await User.login(req.body.Email, req.body.Password);
  const token = createToken(user._id);
  res.status(201).json({currUser:user,token});
};
module.exports.logout_get = async (req, res) => {
  localStorage.clear('jwt');
  localStorage.clear('user');
};
