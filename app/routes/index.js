const productsRouter = require('./products')
const categoriesRouter = require('./categories')
const express = require("express");
const router = express.Router();
function routerApi(app) {
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
}

module.exports = routerApi