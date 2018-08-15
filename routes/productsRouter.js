
const express = require("express");
const productRouter = express.Router();

const products = [
  {
   id: 1,
   name: "Shoes",
  color: "red",
  description: "leather",
  price: 200,
   brand: "Nike"
  },
  {
  id: 2,
  name: "Bedsheet",
  color: "white",
  description: "cotton",
  price: 20,
   brand: "marimeko"
  },
  {
  id: 3, 
   name: "Tshirt",
  color: "black",
  description: "cotton",
  price: 10,
   brand: "Nike"
  },
  {
  id: 4,
  name: "Trouser",
  color: "blue",
  description: "cotton",
  price: 100,
   brand: "levis"
  }
   
];
let id = products.length;


productRouter
  .route("")
  .get((req, res) => {
    return res.json(products);
  })
  .post((req, res) => {
    products.push({
      id: ++id,
      name: req.body.name,
      color:req.body.color,
      description: req.body.description,
      price: req.body.price,
      brand: req.body.brand
    });
    return res.json({message: "Created"});
  });

productRouter
  .route("/:id")
  .get((req, res) => {
    const product = products.find(val => val.id === Number(req.params.id));
    return res.json(product);
  })
  .put((req, res) => {
    const product = products.find(val => val.id === Number(req.params.id));
    product.name = req.body.name;
    return res.json({ message: "Updated" });
  })
  .delete((req, res) => {
    const productIndex = products.findIndex(val => val.id === Number(req.params.id));
    productIndex.splice(userIndex, 1);
    return res.json({ message: "Deleted" });
  });

module.exports = productRouter;
