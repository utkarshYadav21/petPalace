const User = require("../models/User");
const jwt = require("jsonwebtoken");

const maxAge = 1 * 24 * 60 * 60; // 1 day in seconds

const createToken = (id) => {
  return jwt.sign({ id }, "pet_adoption", { expiresIn: maxAge });
};

module.exports.register_post = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = createToken(user._id);
    res.status(201).json({ user, token });
  } catch (err) {
    console.error("Registration error:", err);
    res
      .status(400)
      .json({ message: "Registration failed", error: err.message });
  }
};

module.exports.login_post = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.login(Email, Password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(400).json({ message: "Login failed", error: err.message });
  }
};
module.exports.logout_get = async (req, res) => {
  localStorage.clear("jwt");
  localStorage.clear("user");
};

// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// const maxAge = 1 * 24 * 60 * 60;
// const createToken = (id) => {
//   return jwt.sign({ id }, "pet_adoption", { expiresIn: maxAge });
// };
// module.exports.register_post = async (req, res) => {
//   try {
//     let result = new User(req.body);
//     let user = await result.save();
//     const token = createToken(user._id);
//     res.status(201).json({user,token});
//   } catch (err) {
//     console.log(err);
//   }
// };
// module.exports.login_post = async (req, res) => {
//   const user = await User.login(req.body.Email, req.body.Password);
//   const token = createToken(user._id);
//   res.status(201).json({currUser:user,token});
// };
