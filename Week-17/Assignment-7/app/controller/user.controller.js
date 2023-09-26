const User = require("../models/user.model");

const addUser = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    const result = await user.save();

    res.status(201).json({
      message: "new user created",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);

    res.status(200).json({
      message: "successfully fetched user",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addUser, getUserById };
