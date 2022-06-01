const faker = require("faker");

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
      });
    }
  }
  find = async () => {
    return this.products;
  };
  findOne = async (id) => {
    const product = this.products.find((item) => item.id == id);
    if (product === undefined) {
      return new Error(`No se encuentra el producto con id ${id}`);
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
        return new Error('product not found')
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
        return new Error('product not found')
    }
    this.products.splice(index,1)
    return {id}
  }
}

module.exports = ProductsService;
