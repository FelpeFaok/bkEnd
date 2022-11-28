const fs = require("fs");
const fileName = './archivo.json'

class ProductManagerFilesystem {
    constructor(path) {
        this.path = path;
        this.init();
    }
    init() {
        try {
        const existFile = fs.existsSync(this.path);
        if (existFile) return;
        fs.writeFileSync(this.path, JSON.stringify([]));
        } catch (error) {
        console.log(error);
        }
    }

    
    //f() agregar productos
    async addProduct({title, descrip, price, code, urlImg, stock}){
        const lect = await fs.promises.readFile(this.path, "utf-8")
        const pLect = await JSON.parse(lect)
        if ( pLect.length == 0) {
        try {
            if ((!title || !descrip || !price || !code || !urlImg || !stock) )  
            return console.log("Error addProduct");
            const newProduct = {title, descrip, price, code, urlImg, stock}
            const products = await this.getProducts();
            newProduct.id = !products.length ? 1: products[products.length - 1].id + 1;
            products.push(newProduct);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 3));
            return newProduct;
        }catch (error) {console.log(error);}  
        }

        pLect.forEach( async element => {
            if (element.code !== code){
                try {
                    if ((!title || !descrip || !price || !code || !urlImg || !stock) )  
                    return console.log("Error addProduct");
                    const newProduct = {title, descrip, price, code, urlImg, stock}
                    const products = await this.getProducts();
                    newProduct.id = !products.length ? 1: products[products.length - 1].id + 1;
                    products.push(newProduct);
                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, 3));
                    return newProduct;
                }catch (error) {console.log(error);} 
            }
            });

    }
    
    async getProducts() {
        try {
        const response = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(response);
        } catch (error) {
        console.log(error)};
    }

    getProductByID = async (idIngre) => {
        const lect = await fs.promises.readFile(this.path, 'utf-8')
        const pFound = await JSON.parse(lect)
        try{
        if ( pFound[idIngre-1] === undefined){
            console.log("No encontrado");
        
            }else{console.log("El producto es:", pFound[idIngre-1]);
            }
        console.log("__________________________");
    } catch (error) {console.log(error);}
    }

    async updateProduct (){

    }

    async deleteProduct (idDelete){
        const lect = await fs.promises.readFile(this.path, 'utf-8')
        const pdelete = await JSON.parse(lect)
        if (pdelete[idDelete-1] === undefined){
            console.log(" No se borro nada ");
        }else {
            pdelete.splice(idDelete-1, 1); 
            console.log("array", pdelete, "array");
            pdelete.push(pdelete)
            return pdelete
    }

    }

}


const foodProducts = new ProductManagerFilesystem("./archivo.json");

const testClass = async () => {

    await foodProducts.addProduct({
        code: "111",
        title: "producto",
        descrip: "descripcion producto",
        price: 1200,
        urlImg: "url",
        stock: 12 
    });
    const allProducts1 = await foodProducts.getProducts();
    console.log(allProducts1);
    };
    
testClass();
foodProducts.getProductByID(1);
foodProducts.deleteProduct(1);
