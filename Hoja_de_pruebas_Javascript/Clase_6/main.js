// Declaramos un array

let muebles= ["mesa", "silla", "escritorio", "sillon"]

// Para hacer un array con objetos no hace falta ponerle nombre al objeto, ya que estos se iteran/invocan con un indice/numero de posicioon del 0 en adelante y no con un nombre

let usuarios= [ {nombre: "Tadeo", apellido: "Falistoco"} , {nombre:"Teo", apellido: "Dolce"}, "Usuario desconocido" ]

// Invocamos un elemento del array

console.log(muebles[2])

// Iterar el array con bucle for

for (let i = 0; i<4; i++) {
    console.log(muebles[i])
}

// METODOS
// Length (cuantos elementos tiene el array)
console.log(muebles.length)
// tambien lo podemos usar para los bucles
for (let i = 0; i < muebles.length; i++) {
    console.log(muebles[i])
}

// Push (agrega elementos al final del array)
muebles.push("cama")

// Unshift (agrega elementos al comienzo del array)
muebles.unshift("biblioteca")

// Shift (elimina el primer elemento del array)
muebles.shift()

// Pop (elimina el ultimo elemento del array)
muebles.pop()

// Splice (elimina uno o mas elementos del array segun su indice/posicion) (el primer numero es la posicion de la que parte, el segundo numero es cuantos elementos eliminara a partir de aquella posicion)
muebles.splice(1,2)

// Join (mostrar un string con todos los elementos del array separados por algun caracter)
console.log(muebles.join("algun caracter"))

// Concat (une dos arrays en uno) (en este caso guardamos estos arrays unidos en una nueva variable)
let arraysumados= muebles.concat(usuarios)

// Slice (genera una copia de una parte de nuestro array) (el primer numero es la posicion donde empieza a copiar, el segundo numero es la posicion donde ya no copia, esa ultima no se toma)
let copiamuebles = muebles.slice(1,3)

// IndexOf (permite saber el numero de indice de un elemento)
console.log(muebles.indexOf("silla"))

// Includes (indica si un elemento existe en el array) (el resultado es un booleano)
console.log(muebles.includes("cama"))

// Reverse (invierte el orden del array afectando sus posiciones)
muebles.reverse()

