const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://admin:admin@cluster0.uxgwiwo.mongodb.net/BlozCell?retryWrites=true&w=majority";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db
