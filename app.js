// const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// middleware
// static means files the server doesnt have to change 
// (there just being send to client without anything being changed about them)
// examples: *.png/jpg (images), *.css, *.js, *html
app.use(express.static(__dirname + './public'));

app.get("/", (req, res) => {
  // sendFile() needs the ABSOLUTE PATH of the file (not relative)
 
  // path.join() vs path.resolve()
  // path.join accepts segements of paths and joins them together
  // with the os specific delimiter
  // path.resolve() concatenates by prepending the path segments 
  // from right to left unti an "absolute path" is found
  
  // doesnt need to be send; index route automatically requests the static "index.html"
  // file
  // res.sendFile(path.join(__dirname, './public/index.html'));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> Page not found </h1>");
});

app.listen(PORT, () => {
  console.log(`app listening on localhost://${PORT}`);
});
