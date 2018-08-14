const express = require("express");
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Mambo vipi ');
  //res.status(index).send({ title: 'Express' });
});

module.exports = router;
