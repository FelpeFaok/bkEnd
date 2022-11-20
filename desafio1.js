class ProductManager {
    
    // array de procutos vacio
    constructor (){
        this.products = []
    }

    //obtener el producto por ID
    getNextProductID = () => {
        const amount = this.products.length;
        const productId = (amount > 0) ? this.products[ amount - 1].id + 1 : 1;
        return productId
    }
    
    //obtener el array
    getProduct = () => {
        return this.products
    }

    //obtener los productos segun su ID
    getProductByID = (productId) => {
        const pFound = this.products.find(e => e.id == productId)
        pFound ? console.log("El producto es:", pFound.title) : console.log("No encontrado");
    }

    //f() agregar productos
    addProduct = (title, descrip, price, urlImg, code, stock) => {

        if (this.products.some(p => p.code == code))  return 
            

        const product = {
            id: this.getNextProductID(),
            title,
            descrip,
            price,
            urlImg,
            code,
            stock
        }

        this.products.push(product)
    }

}




const product = new ProductManager()

console.log("Array vacio", product.getProduct());

product.addProduct("Elemento 1", "El 1 Elemento", ("$ ",1000), "img", "codigo 1", 15);
product.addProduct("Elemento 3", "El 1 Elemento", ("$ ",1000), "img", "codigo 1", 15);
product.addProduct("Elemento 2", "El 2 Elemento", ("$ ",1000), "img", "codigo 2", 15);
product.addProduct("Elemento 3", "El 3 Elemento", ("$ ",1000), "img", "codigo 3", 15);
product.addProduct("Elemento 4", "El 4 Elemento", ("$ ",1000), "img", "codigo 4", 15);

console.log("Los Elementos del array son: ", product.getProduct());

product.getProductByID(4)
product.getProductByID(5)