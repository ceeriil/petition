const mongoose = require("mongoose");
const User = require("./user");

const optionSchema = new mongoose.Schema({
  option: String,
  votes: {
    type: Number,
    default: 0,
  },
});

const petitionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  question: String,
  options: [optionSchema],
  voted: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

petitionSchema.pre("remove", async function (next) {
  try {
    const user = await User.findById(this.user);
    user.petitions = user.petitions.filter(
      (petition) => petition._id.toString() !== this._id.toString()
    );
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Petition", petitionSchema);
