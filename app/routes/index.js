const productsRouter = require('./products')
const express = require("express");
const router = express.Router();
function routerApi(app) {
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
}

module.exports = routerApi