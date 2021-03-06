var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use((req, res, next) => {
  console.log("/" + req.method);
  next();
});

router.get("/", (req, res) => {
  res.sendFile(path + "index.html");  //Built-in functino in ExpressJS, designed to send files to a web browser
});

router.get("/about", (req, res) => {
  res.sendFile(path + "about.html");
});

router.get("/contact", (req, res) => {
  res.sendFile(path + "contact.html");
});

app.use("/", router);                 //Tells Express to use Routes

app.use("*", (req, res) => {
  res.sendFile(path + "404.html");
});

app.listen(3000, () => {
  console.log("Live at Port 3000");
});
