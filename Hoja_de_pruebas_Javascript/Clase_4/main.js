// Funcion sin parametros
// Ejemplo de declaracion de una funcion que saluda al usuario
function saludar(){
    alert("Hola usuario")
}

// Ahora invocamos la funcion como cualquier otra
saludar()

// Funcion con parametros
function sumar(parametro1,parametro2){
    let resultado= parametro1 + parametro2
    // Importante incluir el return para, no solo codificar su algoritmo sino que tambien declarar que devuelve la funcion
    return console.log(resultado)
}

sumar(8,1)

// Funcion de calculadora con switch
function calculadora(primerNumero, operacion, segundoNumero) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break
        case "-":
            return primerNumero - segundoNumero;
            break
        case "*":
            return primerNumero * segundoNumero;
            break
        case "/":
            return primerNumero / segundoNumero;
            break
        default:
            return 0;
            break
    }
}
console.log(calculadora(10, "*", 2));

// Funcion anonima
const sumando  = function (a, b) { return a + b }
const restando = function (a, b) { return a - b }
console.log( sumando(15,20) )
console.log( restando(15,5) )

// Funcion flecha: es igual a la anonima pero con una sintaxis simplificada
const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )
