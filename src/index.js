const ProductManager = require('./product_manager')

const manager = new ProductManager ('products.json');


(async () => {
    await manager.addProduct({
        name: 'producto1',
        price: 1
    })
    
    console.log(await manager.getProducts());

})()