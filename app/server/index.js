const express = require('express');
const routerApi = require('../routes')
const app = express()
const port = '5040'
var bodyParser = require('body-parser')
const {logErrors, errorHandler, boomErrorHandler} = require('../middlewares/error.handler')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

routerApi(app);

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port,() => {
    console.log(`Escuchando puerto ${port}`);
})