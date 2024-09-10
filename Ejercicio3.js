/**
 * 3.	Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo 
 * que contenga solo los números pares, y cada número se multiplique por 2. Utiliza la 
 * función filter y la función map.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numbers.filter (function(numero){
    return numero % 2 === 0
})

let multiplicacion = numerosPares.map(function(numero){
    return numero * 2;
});

console.log("Números pares multiplicados por 2: ", multiplicacion)

/**
 * Expected Result:
 * [4, 8, 12, 16, 20]
 */