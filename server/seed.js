require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

const db = require("./models");

const users = [
  { username: "username", password: "password" },
  { username: "kelvin", password: "password" },
];

const petitions = [
  {
    question: "Which is the best JavaScript framework",
    options: ["Angular", "React", "VueJS"],
  },
  { question: "Who is the best mutant", options: ["Wolverine", "Deadpool"] },
  { question: "Truth or dare", options: ["Truth", "Dare"] },
  { question: "Boolean?", options: ["True", "False"] },
];

const seed = async () => {
  try {
    await db.User.remove();
    console.log("DROP ALL USERS");

    await db.Petition.remove();
    console.log("DROP ALL PETITIONS");

    await Promise.all(
      users.map(async (user) => {
        const data = await db.User.create(user);
        await data.save();
      })
    );
    console.log("CREATED USERS", JSON.stringify(users));

    await Promise.all(
      petitions.map(async (petition) => {
        petition.options = petition.options.map((option) => ({
          option,
          votes: 0,
        }));
        const data = await db.Petition.create(petition);
        const user = await db.User.findOne({ username: "username" });
        data.user = user;
        user.petitions.push(data._id);
        await user.save();
        await data.save();
      })
    );
    console.log("CREATED PETITIONS", JSON.stringify(petitions));
  } catch (err) {
    console.error(err);
  }
};

seed();
