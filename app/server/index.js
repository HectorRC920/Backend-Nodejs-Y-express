const express = require('express');
const routerApi = require('../routes')
const app = express()
const port = '5040'
var bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.json())

routerApi(app);


app.listen(port,() => {
    console.log(`Escuchando puerto ${port}`);
})