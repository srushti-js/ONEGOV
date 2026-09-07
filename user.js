const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true
    },

    mobile: {
      type: String,
      unique: true,
      sparse: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    nationalId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema, "users");