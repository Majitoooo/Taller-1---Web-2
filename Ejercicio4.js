/** 4.	Dado un arreglo de objetos JSON que representan usuarios, escribe una función que 
 * devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o más),
 *  y para cada usuario se agregue una nueva propiedad "ageInDays" que represente la edad 
 * del usuario en días. Utiliza el spread operator, la función map y filter. */

const users = [
    { name: "Carlos", age: 20 },
    { name: "Juana", age: 17 },
    { name: "Oliver", age: 25 },
    { name: "Katherine", age: 30 },
  ];

  const userMayores = users
    .filter(function(usuario){
      return usuario.age > 18
    })
    .map(function(usuario) {
      return {
        ...usuario,
      ageInDays: usuario.age * 365
      }
    })

  console.log(userMayores)

    /**
   * Expected Result:
   * [
        { name: "Carlos", age: 20, age_in_days: 7300 },
        { name: "Oliver", age: 25, age_in_days: 9125 },
        { name: "Katherine", age: 30, age_in_days: 10950 },
    ]
   */