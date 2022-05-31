const express = require('express');
const routerApi = require('../routes')
const app = express()
const port = '5040'
var bodyParser = require('body-parser')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

routerApi(app);


app.listen(port,() => {
    console.log(`Escuchando puerto ${port}`);
})