const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/project", (req, res) => {
    res.render("index.ejs");

});

app.get("/project/resume", (req, res) => {
    res.render("resume.ejs");
});

// app.get("/project/info", (req, res) => {
//     res.render("info.ejs");

// });

app.get("/project/project", (req, res) => {
    res.render("project.ejs");
});

app.get("/project/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/project/edit", (req, res) => {
    res.render("edit.ejs");
});



app.listen(port, () => {
    console.log("Listening to port : 8080");
});
