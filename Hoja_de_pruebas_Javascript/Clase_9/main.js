// Acceder al html desde la consola
console.log(document)

// Acceder a algun elemento del documento con ruta de especificidad
console.log(document.body)

// Metodo getElementBy: busca el contenido de un tipo de elemento especifico
// Podemos guardar este contenido de nuestro html en una variable: este contenido puede ser de un id, una class u otros elementos
let contenido = document.getElementById("mi-body")

let tituloDescripcionCard = document.getElementsByClassName("titulo-descripcion-card")
console.log(tituloDescripcionCard)

// Metodo querySelector: Es otra forma de llamar este contenido, diferenciando class de id con un "." o un "#" (este los presenta prolijos con una sintaxis parecida a html)
// Si ponemos el de aca arriba solo va a devolver uno, si ponemos querySelectorAll en el caso de una clase va a devolver una lista, a esta se la puede manipular igual que a un array
let textito = document.querySelectorAll(".tarjetas") 
console.log(textito)

// Metodo classList: podemos solicitar una lista de todas las clases aplicadas a un id (devuelve un array)
// Metodo className: igual pero devuelve un string
console.log(textito.classList) // esto da error porque con textito, que es una class, no funciona, debe ser un id

let card1= document.querySelector("#id-card-1")
console.log(card1.classList)

// Metodo add: Ya solicitamos una lista de las clases aplicadas al id card1, ahora con .add vamos a agregar mas clases a esa lista
card1.classList.add("clase-de-prueba")
console.log(card1.classList) // Estas clases creadas con .add no se ven en el codigo html, solo se ven en la consola

// Cuando usamos className en vez de classList lo que pongamos en la variable.className va a reemplazar al contenido anterior, no se le va a sumar
let encabezadoSinClass = document.getElementById("el-encabezado")
encabezadoSinClass.className = "clase-vacia" // En el html este id aparece con la class "mis-encabezados" pero ahora con el .className sobreescribimos esas class y creamos esta nueva "clase-vacia"

// Metodo innerHTML: modifica el codigo con sintaxis de html, si lo consologueamos muestra esa linea de codigo
let card2 = document.querySelector("#id-card-2")

console.log(card2.innerHTML)
card2.innerHTML = "<a href= '' > Esto deberia ser un enlace </a>" // Acá reemplazamos la linea de codigo que estaba dentro de ese id por una linea de enlace
console.log(card2.innerHTML)

// Metodo innerText: modifica solo el contenido visible de la pagina, osea el contenido visible de la linea de codigo, si lo consologueamos muestra el contenido de esa linea de codigo
console.log(card1.innerText)
card1.innerText = "Creo que hice cagada" // esto deberia mostrarse en el texto de atras de la card
console.log(card1.innerText)

// Metodo remove: elimina el codigo de esa etiqueta/caja inclusive la caja
let card3 = document.querySelector("#id-card-3")
card3.remove()

// Metodo createElement: crea etiquetas de codigo (si las reconoce tienen funcion, sino inventa etiquetas sin funcionamiento)
// En este caso vamos a crear una lista y luego modificarla/ampliarla con classList e innerHTML. De momento este codigo solo puede verse en la consola con un console.log
let miNuevaLista = document.createElement("ul")
miNuevaLista.classList.add("clase-lista")
miNuevaLista.innerHTML = "<li> este item va a ser reemplazado </li>"
miNuevaLista.innerHTML = "<li> Item 1 </li>" // Al poner = con un innerHTML se sobreescriben los datos 
miNuevaLista.innerHTML += "<li> Item 2 </li>"
miNuevaLista.innerHTML += "<li> Item 3 </li>" // Para agregar mas elementos al elemento creado (la lista) debemos usar "+="
miNuevaLista.innerHTML += "<li> Item 4 </li>"

console.log(miNuevaLista)

// Metodo append: permite agregar nuestro elemento creado con el createElement a alguno de los elementos del DOM
let card4 = document.querySelector("#id-card-4")
card4.append(miNuevaLista) // Este metodo no reemplaza el contenido del elemento, solo agrega lo que le indicamos al final del contenido del elemento

// Ahora podemos complementar lo visto hasta ahora con otros elementos como arrays, objetos, etc
let productos = ["Rack - Jaula completa","Rack - Sentadilla","Banco Multiangular","Banco Plano","Discos Bumper","Barra Olimpica","Barra W"]
let card5 = document.querySelector("#id-card-5")
card5.innerHTML= "<p> Este producto es: "+ productos[4] +"</p>"

// Otra forma de combinar string con elementos es de la manera "Template strings" que utiliza unas comillas distintas para luego dentro invocar las ${variables}
let card6 = document.querySelector("#id-card-6")
card6.innerHTML= `<p> Este producto es: ${productos[5]} </p>`

// Ahora vamos a aplicar lo aprendido en un ciclo for que modifica nuestro html
let card7 = document.querySelector("#id-card-7")
let miNuevaLista2 = document.createElement("ul") // Creamos una lista que no aparece en el html
miNuevaLista2.classList.add("descripcion-card") // Le agregamos la class pre-existente de la card para que tenga los mismos estilos (igual estos estilos se aplican mal a la lista, pero bueno, es un ejemplo)

for (cada_item of productos) {
    miNuevaLista2.innerHTML += `<li> El producto ${cada_item} sera el correcto si esta en la septima posicion </li>` // Ahora hacemos el ciclo iterando el array de productos
}

card7.append(miNuevaLista2) // Por ultimo sumamos nuestro elemento creado al html, en la card7
