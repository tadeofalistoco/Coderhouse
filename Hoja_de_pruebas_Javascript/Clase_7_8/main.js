// VAMOS A VER METODOS DE BUSQUEDA Y DE TRANSFORMACION

// primero creamos algunos arrays para usar de ejemplo
let numeros = [50, 12, 37, 17, 25, 6]
let animales= ["Perro", "Gato", "Cisne", "Tortuga"]
let productos= [
    {nombre: "Mesa", precio: 3500},
    {nombre: "Silla de plastico", precio: 2000},
    {nombre: "Silla de madera", precio: 2500},
    {nombre: "Ventana", precio: 4500},
    {nombre: "Puerta", precio: 3000},
]


// METODOS DE BUSQUEDA

// forEach (itera el array ejecutando una accion en cada uno de los elementos)
// se lee: en el array "numeros", por cada (forEach) elemento (parametro que esta entre parentesis) hace esta accion que está entre llaves
numeros.forEach((parametro) => { /* En este caso hemos utilizado una funcion estilo flecha */
    console.log(parametro)
})

// find (itera el array y retorna SOLO el primer elemento que cumpla con una condicion)
// en este caso vamos a crear un prompt primero, y luego con .find vamos a pedir que retorne el primer elemento del array "productos" que sea igual al prompt ingresado 
let producto_elegido = prompt("Ingrese el producto que desea comprar")
console.log( productos.find((parametro2) => parametro2.nombre === producto_elegido) )

// filter (itera el array y retorna un nuevo array solo con los elementos que cumplen una condicion)
// en este caso vamos a solicitar que se arme un nuevo array de productos pero solo con los elementos que contengan la palabra "Silla"
let array_de_sillas = productos.filter((se_puede_repetir_parametro) => se_puede_repetir_parametro.includes("Silla"))
console.log(array_de_sillas) /* Es lo mismo consologuear el metodo que guardar el metodo en una variable para luego consologuear esta misma */
// ESTO NOS SIRVE PARA FILTROS DE BUSQUEDA EN UNA PAGINA

// some (itera el array y responde con booleanos dependiendo de si alguno de los elementos cumplen una condicion, con que uno solo la cumpla responde true)
let hay_tortugas = animales.some((parametro) => parametro === "Tortuga")
console.log(hay_tortugas)

// map (itera el array y retorna un nuevo array con los elementos del array original transformados)
let precios_actualizados = productos.map((parametro) => {
    return{
        nombre: parametro.nombre,
        precio: parametro.precio * 1.5
    }
})
console.log(precios_actualizados) // map es muy utilizado

// reduce (itera el array y retorna un unico valor del array, luego de hacer una operacion)
let total_del_carrito = productos.reduce((acumulador, parametro) => acumulador + parametro.precio, 0)
console.log(total_del_carrito)
// En el primer parametro se pone el acumulador que sera retornado al consologuear

// sort (reordena el array segun el criterio que le indiquemos)
numeros.sort((a,b) => a - b)
console.log(numeros) // ESTE METODOO MODIFICA NUESTRO ARRAY PARA SIEMPRE


// METODOS DE MATH

// min (retorna el menor numero de un listado)
console.log(Math.min(50, 12, 37, 17, 25, 6))

// max (retorna el mayor numero de un listado)
console.log(Math.max(50, 12, 37, 17, 25, 6))

// ceil (retorna el numero mas cercano al que le indiquemos, redondeando hacia arriba)
console.log(Math.ceil(1.25)) // 2

// floor (retorna el numero mas cercano al que le indiquemos, redondeando hacia abajo)
console.log(Math.floor(1.25)) // 1

// round (retorna el numero mas cercano al que le indiquemos)
console.log(Math.round(1.25)) // 1
console.log(Math.round(1.75)) // 2

// random (retorna un numero aleatorio entre 0 y 1)
console.log(Math.random())
// con el codigo correcto esto se puede reutilizar para pedirle a al computadora que te mande numeros aleatorios dentro de un intervalo