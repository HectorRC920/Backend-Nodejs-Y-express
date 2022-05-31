const express = require('express')
const router = express.Router()

// MiddleWare para la ruta base de categories categories
router.use('/',(req, res, next)=> {
    console.log('paso por el middleware de las catgorias');
    next()
})

router.get('/', (req, res) => {
    res.json({
        categories: 'Muchas'
    })
})

module.exports = router