const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");

// mongoose.connect("mongodb://localhost:27017/yelp-camp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database Connected");
// });

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/massage", (req, res) => {
  res.render("massage");
});

app.get("/intro", (req, res) => {
  res.render("intro");
});

app.get("/paperwork", (req, res) => {
  res.render("paperwork");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/insurance", (req, res) => {
  res.render("insurance");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
