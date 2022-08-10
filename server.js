require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const userRoute = require("./routes/userRoute");
const petitionRoute = require("./routes/petitionRoute");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use("/api/user", userRoute);
app.use("/api/petition", petitionRoute);

const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
  console.log("Connection established");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
