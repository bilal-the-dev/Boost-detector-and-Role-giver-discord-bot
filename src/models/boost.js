const { Schema, model } = require("mongoose");

const boostBot = new Schema({
  userId: {
    type: String,
    required: true,
  },
  hasBoostRole: {
    type: Boolean,
  },
  boostedAt: {
    type: Date,
    required: true,
  },
});

module.exports = model("boost", boostBot);
