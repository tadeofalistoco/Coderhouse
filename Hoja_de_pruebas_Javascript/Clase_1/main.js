/* Declaramos una variable con var */
var nombre = "Tadeo"

/* Declaramos una variable con let */
let apellido = "Falistoco"

// Mostramos lo el valor de una o mas variables con console.log()
console.log(nombre * 2) /* Esto se ve solamente en la consola al hacer F12 en la pagina web */

// Ejemplo de prompt con variable if
let anio_actual = 2023
let nombre_prompt = prompt("Ingrese su nombre: ")
let anio_nacimiento_prompt = prompt("Ingrese su año de nacimiento: ")

let edad_actual = anio_actual - anio_nacimiento_prompt

if (nombre!= "" && anio_nacimiento_prompt!= "" && !isNaN(edad_actual)){
                                        // El isNaN significa "is not a number", por lo tanto, al poner un "!" al comienzo, significa lo contrario. Osea que la condicion es: "is a number"

    let mensaje_prompt= "Confirmas que tus datos son correctos: \n" + "Nombre: "+ nombre +"\nAño de nacimiento: " + anio_nacimiento_prompt
    
    let respuesta = confirm(mensaje_prompt)

    if (respuesta){
        alert("Bienvenido "+ nombre + ", usted tiene " + edad_actual + " años")
    }else{
        alert("Recarga y modifica tus datos")
    }

}else{
    alert("Vuelva a ingresar correctamente")
}