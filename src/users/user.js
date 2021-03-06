const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  avatar: {
    type: String,
    require: true,
  },
});

  UserSchema.pre("save", async function (next ) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }); 

const user = mongoose.model("user", UserSchema);

module.exports = user;

