const User = require("../models/userModel");

async function getAllUsers(req, res) {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10; // Number of items per page

  try {
    const user = await User.find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .exec();

    const totalUsers = await User.countDocuments();

    res.json({
      user,
      totalPages: Math.ceil(totalUsers / pageSize),
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addUser(req, res) {
  const { name } = req.body;
  try {
    const alreadyExists = await User.findOne({ name });
    if (alreadyExists) {
      return res.status(409).json({ message: "User already exists..." });
    }
    const user = await User.create({ name });
    console.log(User);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "User not created" });
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  addUser,
};
