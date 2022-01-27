const express = require("express");
const app = express();
require("dotenv").config();
const hbs = require("hbs");
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estatico
app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.render("home", {
    titulo: "Curso de node",
    nombre: "Pablito",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    titulo: "Curso de node",
    nombre: "Pablito",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    titulo: "Curso de node",
    nombre: "Pablito",
  });
});

app.get("/personas", (req, res) => {
  res.send("Personas Works");
});

app.get("*", (req, res) => {
  res.send("404 page not found");
});

app.listen(port);
