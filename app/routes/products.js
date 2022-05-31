const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// router.use declara el middleware para la ruta especificada
//en este caso /
router.use("/", function (req, res, next) {
  console.log("comenzando el middleware de la raiz");
  const { id } = req.query;
  if (id == 1) {
    console.log("middleware pasado");
    next(); //se ejecuta el router.get
  } else {
      res.json({error :"middleware rechazado porque no es 1 el id o no se envio id"},404)
    // console.log();
  }
});
router.get("/", (req, res) => {
  res.send("ya pasamos la migra");
});

router.use("/about", function (req, res, next) {
  console.log("pasando por middleware de about");
});
router.get("/about", (req, res) => {
  res.send("yabout");
});

module.exports = router;
