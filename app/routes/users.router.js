const express = require('express')
const { route } = require('./products')
const router = express.Router()
const find = require('../services/users.service')

router.get('/', async (req,res) => {
    try {
        const rows = await find()
        res.json({
            rows
        })
    } catch (error) {
        
    }
})


module.exports = router