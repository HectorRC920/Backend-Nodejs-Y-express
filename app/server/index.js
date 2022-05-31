const express = require('express');
const routerApi = require('../routes')
const app = express()
const port = '8080'

app.use(express.json())

routerApi(app);


app.listen(port,() => {
    console.log(`Escuchando puerto ${port}`);
})