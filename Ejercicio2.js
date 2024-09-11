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
];

const sumaPrecios = products.reduce((acumulador, producto) => {
    return {
      totalPrice: acumulador.totalPrice + producto.product_price, 
      totalQuantity: acumulador.totalQuantity + producto.product_quantity 
    };
  }, { totalPrice: 0, totalQuantity: 0 });

const mostExpensiveProduct = products.sort((a, b) => b.product_price - a.product_price)[0];

const resultado = {
    ...sumaPrecios, 
    mostExpensiveProduct: {
      product_name: mostExpensiveProduct.product_name,
      product_price: mostExpensiveProduct.product_price,
      product_quantity: mostExpensiveProduct.product_quantity
    }
  };
  
  console.log(resultado);

/** Expected result: 
 * // { totalPrice: 170, totalQuantity: 10, mostExpensiveProduct: { product_name: "Chaqueta", product_price: 160000, product_quantity: 44 } }
 * */