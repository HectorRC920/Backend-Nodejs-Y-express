const productsRouter = require('./products')
function routerApi(app) {
    app.use('/products', productsRouter);
}

module.exports = routerApi