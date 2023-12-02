// Crear un objeto

let mi_usuario = {
    nombre: "Tadeo",
    edad: 22,
    pais: "Argentina",
}

// Invocamos el objeto

console.log(mi_usuario)

// Invocamos una propiedad en especifico poniendo un "." luego del objeto, esto nos devuelve el valor de esa propiedad

console.log(mi_usuario.nombre)
// tambien se pueden usar corchetes poniendo la propiedad entre comillas
console.log(mi_usuario["nombre"])

// Tambien podemos crear objetos dentro de objetos

let mi_usuario_complejo = {
    nombres: {
        primer_nombre: "Tadeito",
        segundo_nombre: "Bautista",
    },
    edad: 21,
    pais: "Grecia",
}

// Para invocar estos objetos dentro de objetos simplemente seguimos una ruta de especificidad, separando con un punto entre cada nivel

console.log(mi_usuario_complejo.nombres.segundo_nombre)

// Podemos cambiar los valores de las propiedades declarandolas denuevo
mi_usuario_complejo.pais= "Italia" // Si ahora hago un console.log(mi_usuario_complejo) este aparecerá actualizado


// FUNCION CONSTRUCTORA

// Primero declaramos la funcion
function Articulo_de_ropa(prenda, color, talle) {
    this.prenda = prenda,
    this.color = color,
    this.talle = talle
} 
// lo que esta a la derecha del "=" debe coincidir con los parametros
// y lo que esta a la izquierda (lo que va junto al "this.") es el nombre que se le asignará a la propiedad
// osea, tanto los parametros como lo que esta a la derecha son palabras clave que no tienen por que tener un significado


// Creamos un objeto a traves de la funcion utilizando "new"
let articulo1 = new Articulo_de_ropa("remera", "roja", "xl")


// CLASS y CONSTRUCTOR
// funciona de la misma manera solo que copiamos y pegamos lo que seria una funcion declarada dentro de la class, utilizando la palabra constructor
class Producto {
    constructor(prenda, color, talle) {
        this.prenda = prenda,
        this.color = color,
        this.talle = talle
    }
}

// se invoca de la misma manera
let producto1 = new Producto("pantalon", "azul", 32)


// METODOS
class Producto_con_metodos {
    constructor(prenda, color, talle) {
        this.prenda = prenda,
        this.color = color,
        this.talle = talle
        this.alerta = function() {console.log("Elegiste la prenda: " + this.prenda) }
    }
}

let prenda1 = new Producto_con_metodos("buzo","blanco","xxl")

prenda1.alerta()


// OPERADOR IN
if ("prenda" in prenda1) {
    console.log(prenda1.prenda)
} else {
    console.log("No hay una prenda")
}


// OPERADOR FOR ... IN
for (let palabra_clave in prenda1) {
    console.log(palabra_clave)
}