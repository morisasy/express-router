
const express = require("express");
const userRouter = express.Router();
const bodyParser = require("body-parser");

const users = [];
var id = 1;

userRouter.use(bodyParser.json());

// declare the route first, then all the methods on it
userRouter.route("/")
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
  .get(() => {
    return res.json(users);
  })
  .post(() => {
    users.push({
      name: req.body.name,
      id: ++id
    });
    return res.json({ message: "Created" });
  });

userRouter
  .route("/:id")
  .get((req, res) => {
    const user = users.find(val => val.id === Number(req.params.id));
  // const user = users.includes(Number(req.params.id));
    return res.json(user);
  })
  .put((req, res) => {
    user.name = req.body.name;
    return res.json({ message: "Updated" });
  })
  .delete((req, res) => {
    users.splice(user.id, 1);
    return res.json({ message: "Deleted" });
  });

module.exports = userRouter;
