const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

const posts = [];

function createPostID() {
  const id = randomBytes(8).toString("hex");
  if (posts.some((post) => post.id === id)) return createPostID();
  return id;
}

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const body = req.body;
  if (!body.name || !body.author || !body.content) return res.sendStatus(400);

  const post = {
    id: createPostID(),
    createdAt: new Date(),
    name: body.name,
    author: body.author,
    content: body.content,
  };
  posts.push(post);
  res.json(post);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((post) => post.id == req.params.id);
  if (!post) return res.sendStatus(404);
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const post = posts.find((post) => post.id == req.params.id);
  if (!post) return res.sendStatus(404);
  posts.splice(posts.indexOf(post), 1);
  res.json(post);
});

app.listen(8080, () => {
  console.log("Webserver läuft auf http://localhost:8080");
});
