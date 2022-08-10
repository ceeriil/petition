require("dotenv").config();
const bcrypt = require("bcrypt");
const userSchema = require("../model/userModel");
const generateToken = require("../token/token");
const { loginSchema, registerSchema } = require("../validate/auth");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { userName, email, password , description } = req.body;

      const value = await registerSchema.validate({
        userName: userName,
        email: email,
        password: password,
      });

      if (value.error) return res.json({ error: value.error.message });

      const userExist = await userSchema.findOne({ email: email });

      if (userExist) return res.json({ error: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new userSchema({
        userName: userName,
        email: email,
        description: description,
        password: hashedPassword,
      });
      user.save();
      res.json({ created: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const value = await loginSchema.validate({ email: email });
      if (value.error) return res.json({ error: value.error.message });

      const User = await userSchema.findOne({ email: email });

      if (!User) return res.json({ error: "User not found" });

      const validDatePassword = await bcrypt.compare(password, User.password);

      if (!validDatePassword) return res.json({ error: "Password incorrect" });

      const credentials = {
        _id: User._id,
        email: User.email,
      };

      const token = await generateToken(credentials);
      const user = await userSchema.findOne({ _id: credentials._id });
      if (!user) return res.json({ status: false });
      const userData = {
        _id: user._id,
        userName: user.userName,
        email: user.email,
        description: user.description,
        createdAt: user.createdAt,
      };
      res.json({ token: token, status: true, user: userData });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  edit: async (req, res) => {
    try {
      const { id, email, userName , desc  } = req.body;

      const user = {
        email: email,
        userName: userName,
        description:desc,
      };
      await userSchema.updateOne({ _id: id }, user);

      const data = await userSchema.findOne({ _id: id });

      if (!data) {
        res.json({
          message: "Can't update your profile, please try again later.",
        });
      }

      const userData = {
        _id: data._id,
        userName: data.userName,
        email: data.email,
        createdAt: data.createdAt,
      };

      res.json({ userInfo: userData });
    } catch (error) {
      res.send({ error: error.message });
    }
  },

  getUserById: async (req , res) => {
    try {
     const data = await userSchema.findOne({_id: req.params.id})
     if(!data) return res.json({message:"No user found."})
     
     const user = {
       userName:data.userName,
       email:data.email,
       _id:data._id,
       description: data.description,
       createdAt:data.createdAt
     }
     res.json(user)
    } catch (error) {
      res.json({error: error.message})
    }
  },

  userCount: async (req, res) => {
    try {
      const data = await userSchema.find().count()
      res.json({count:data})
    } catch (error) {
      res.json({error: error.message })
    }
  }
};

module.exports = userCtrl;
