const express = require('express');
const routerApi = require('../routes')
const cors = require('cors')
const app = express()
const port = '5040'
var bodyParser = require('body-parser')
const {logErrors, errorHandler, boomErrorHandler} = require('../middlewares/error.handler')
const whiteList = ['http://localhost:3000']
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin)){
            callback(null, true)
        } else {
            callback(new Error('no permitido'))
        }
    }
}
app.use(cors())
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