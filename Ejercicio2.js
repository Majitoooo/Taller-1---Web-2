/** 2. Escribe una función que tome un arreglo de objetos JSON que representan productos, 
 * y devuelva un objeto que contenga la suma de los precios de los productos, la cantidad 
 * total de productos, y el nombre del producto más caro. Utiliza el spread operator, la 
 * función reduce, map y sort para calcular los valores necesarios. */

let products = [
    {
        id_product: 1,
        product_name: "Camiseta",
        product_price: 50000,
        product_quantity: 89
    },
    {
        id_product: 2,
        product_name: "Pantalón",
        product_price: 90000,
        product_quantity: 44
    },
    {
        id_product: 3,
        product_name: "Chaqueta",
        product_price: 160000,
        product_quantity: 23 
    },
    {
        id_product: 4,
        product_name: "Correa",
        product_price: 80000,
        product_quantity: 104 
    }
]

//Map
let productsWithDollars = products.map((product) => {
    return {
        ...product,
        product_price_usd: product.product_price / 4000
    }
})

//Filter
let productsWithPrinceGreaterThan60 = products.filter((product) => {
    return product.product_price > 60000
})

//Reduce
let stockValue = products.reduce( function(accumulator, product) {
    return accumulator + (product.product_price * product.product_quantity)
}, 0)

console.log('Productos', products)
console.log('Productos con dólares', productsWithDollars)
console.log('Productos con precio mayor a 60.000', productsWithPrinceGreaterThan60)
console.log('Valor total del stock', stockValue)

let sumaPrecios = products.reduce(function(accumulador, producto) {
    return accumulador + producto.product_price
}, 0)

console.log("------------")


console.log(sumaPrecios)

/** Expected result: 
 * // { totalPrice: 170, totalQuantity: 10, mostExpensiveProduct: { product_name: "Chaqueta", product_price: 160000, product_quantity: 44 } }
 * */