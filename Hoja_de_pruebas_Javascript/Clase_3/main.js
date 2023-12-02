// Ejemplo de bucle for para contar del 1 al 9

for ( let i = 1 ; i<= 10 ; i++ ) {     // El bucle for utiliza 3 secciones en el parentesis (desde, hasta, actualización)
    alert(i)                           // El "desde" da un valor inicial, el "hasta" da una condicion, despues se ejecutan las instrucciones entre {} y luego de eso se genera la "actualizacion"
}                                      // Finalmente, si la condicion aun se cumple, se repite el bucle


// Ejemplo de bucle for con condicional y sentencia break: su funcion es cortar el bucle en esa instancia

for (let a = 1 ; a<= 10 ; a++ ) {
    if(a==5){
        break
    }
    alert(a)
}

// Ejemplo de bucle for con condicional y sentencia continue: su funcion es saltear ese valor determinado y continuar con el bucle

for (let a = 1 ; a<= 10 ; a++ ) {
    if(a==5){
        continue
    }
    alert(a)
}

// Ejemplo de bucle while
let entrada = prompt("Ingresar una palabra random")

while(entrada!= "ESC") {
    alert("El usuario ingresó "+ entrada)
    entrada  = prompt("Ingresar otro dato")
}

// Ejemplo de bucle do ... while
let numero = 0

do{
    // le pedimos al usuario que ingrese numeros
    numero= prompt("Ingresar un número")
    alert(numero)

// si lo que ingresa no es un numero se rompe el bucle
} while(parseInt(numero))


// Ejemplo de bucle con while y switch
let entradita= prompt("Ingrese su nombre")

// repetimos hasta que se ingrese "ESC"
while(entradita!="ESC") {
    switch(entradita){
        case "Ana":
            alert("Hola Ana")
            break
        case "Juan":
            alert("Hola Juan")
            break
        default: 
            alert("Quien sos?")
            break
    }
    entradita = prompt("Ingrese su nombre")
}