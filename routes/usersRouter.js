
const express = require("express");
const userRouter = express.Router();

const users = [
  {name: "Jasmini",
   id: 1},
   {name: "Miko",
    id: 2
  },
  {name: "Jasmini",
     id: 3
  },
  {name: "Kiara",
     id: 4
  }
];
let id = 4;


userRouter
  .route("")
  .get((req, res) => {
    return res.json(users);
  })
  .post((req, res) => {
    users.push({
      name: req.body.name,
      id: ++id
    });
    return res.json({message: "Created"});
  });

userRouter
  .route("/:id")
  .get((req, res) => {
    const user = users.find(val => val.id === Number(req.params.id));
    return res.json(user);
  })
  .put((req, res) => {
    const user = users.find(val => val.id === Number(req.params.id));
    user.name = req.body.name;
    return res.json({ message: "Updated" });
  })
  .delete((req, res) => {
    const userIndex = users.findIndex(val => val.id === Number(req.params.id));
    users.splice(userIndex, 1);
    return res.json({ message: "Deleted" });
  });

module.exports = userRouter;
