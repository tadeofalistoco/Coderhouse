// Ejemplo de condicional if

// Condicion: "si true es true" (lo cual pasa siempre)
if(true){

    // Consecuencia: "se muestra el mensaje entre parentesis y comillas en la consola"
    console.log("vas a ver este mensaje en la consola")
}

// Ejemplo de condicional if + else
let numerito= 10

if(numerito==10){
    alert("Se cumplió la condición")
}else{
    alert("No se cumplió la condicion")
}

// Ejemplo condicional if + else if + else
let numeron= 99

if(numeron>10){
    alert("El numero es menor a 10")
}
else if(numeron>50){
    alert("El numero es menor a 50")
}
else{
    alert("El numero es mayor a 50")
}

// Ejemplo de condicional con "or" / "||"
let numerazo= 10

if(numerazo==10 || numerazo>10){
    alert("El numero es mayor a 10 o es igual a 10")
}else{
    alert("El numero no es mayor a 10 ni es igual a 10")
}