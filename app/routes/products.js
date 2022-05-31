const express = require("express");
const router = express.Router();
const faker = require('faker')

// router.use declara el middleware para la ruta especificada
//en este caso /
router.use("/", function (req, res, next) {
  console.log("comenzando el middleware de la raiz");
  const { size } = req.query;
  if (size >= 1) {
    console.log("middleware pasado");
    next(); //se ejecuta el router.get
  } else {
      res.json({error :"middleware rechazado porque se necesita mas de un producto"},404)
    // console.log();
  }
});
router.get('/',(req, res) => {
  const products = []
  const {size} = req.query
  const limit = size || 100;
  console.log(limit);
  for (let index = 0; index < limit; index++) {
      products.push({
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(),10),
          image: faker.image.imageUrl()
      })
      
  }
  res.json(products)

})

router.post('/', (req, res) => {
    const body = req.body
    res.json({
        message: 'succes',
        body: body
    })
})

router.use("/about", function (req, res, next) {
  console.log("pasando por middleware de about");
});
router.get("/about", (req, res) => {
  res.send("yabout");
});

module.exports = router;
