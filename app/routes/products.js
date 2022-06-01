const express = require("express");
const router = express.Router();
const ProductsService = require("../services/products.service");

const service = new ProductsService();
// router.use declara el middleware para la ruta especificada
//en este caso /
router.use("/", function (req, res, next) {
  console.log("comenzando el middleware de la raiz");
  const { size } = req.query;
  if (size >= 1 || size == undefined) {
    console.log("middleware pasado");
    next(); //se ejecuta el router.get
  } else {
    res.json(
      { error: "middleware rechazado porque se necesita mas de un producto" },
      404
    );
    // console.log();
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error)
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const newProduct = await service.create(body);
    res.json({
      message: "succes",
      newProduct: newProduct,
    });
  } catch (error) {
    res.json({
      error: error
    })
  }
});
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedProduct = await service.update(body, id);
  res.json({
    message: "succes",
    product: updatedProduct,
  });
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedProduct = await service.update(body, id);
  res.json({
    message: "succes",
    product: updatedProduct,
  });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProductId = await service.delete(id)
  res.json({
    message: "succes",
    deletedProductId,
  });
});

router.use("/about", function (req, res, next) {
  console.log("pasando por middleware de about");
});
router.get("/about", (req, res) => {
  res.send("yabout");
});

module.exports = router;
