const faker = require("faker");
const boom = require('@hapi/boom')

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: index,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean()
      });
    }
  }
  find = () => {
      return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve(this.products)
          },5000)
      })
  };
  findOne = async (id) => {
    const product = this.products.find((item) => item.id == id);
    if (product === undefined) {
      throw boom.notFound('product not found');
    }
    if(product.isBlocked){
        throw boom.conflict('product is blocked')
    }
    return product;
  };
  create = async (data) => {
    const newProduct = {
      ...data,
      id: faker.datatype.uuid(),
    };
    this.products.push(newProduct)
    return newProduct
  };
  update = async (body,id) => {
    const index = this.products.findIndex((item) => item.id == id)
    if(index === -1){
        throw boom.notFound()
    }
    const updatedProduct = this.products[index]
    this.products[index] = {
        ...updatedProduct,
        ...body
    }
    return updatedProduct
  }
  delete = async (id) => {
    const index = this.products.findIndex((item) => item.id == id)
    if(index === -1){
        throw new boom.notFound()
    }
    this.products.splice(index,1)
    return {id}
  }
}

module.exports = ProductsService;
