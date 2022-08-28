const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");
const getUsers = require("./getUsers");
const deleteUser = require("./deleteUser");
const editUser = require("./editUser");
const updatePassword = require("./updatePassword")

module.exports = {
  register,
  login,
  getUserById,
  getUsers,
  deleteUser,
  editUser,
  updatePassword,
};
