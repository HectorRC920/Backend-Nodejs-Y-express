const Joi = require('joi')


const id = Joi.string().uuid();
const  name =Joi.string().alphanum().min(3).max(15)
const price = Joi.number().min(10)
const image = Joi.string()
const createProductSchema = Joi.object({
    // id: id.required(),
    name: name.required(),
    price: price.required(),
    image: image.required(),
})
const updateProductSchema = Joi.object({
    id: id.required(),
    name: name,
    price: price,
    image: image,
})
const getProductSchema = Joi.object({
    id: id.required(),
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema}