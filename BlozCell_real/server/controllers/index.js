const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");
const getUsers = require("./getUsers");
const deleteUser = require("./deleteUser");
const editUser = require("./editUser");
const updatePassword = require("./updatePassword")
const changeState = require("./changeState")
const getUserData = require("./getUserData")
 
module.exports = {
  register,
  login,
  getUserById,
  getUsers,
  deleteUser,
  editUser,
  updatePassword,
  changeState,
  getUserData,
};
