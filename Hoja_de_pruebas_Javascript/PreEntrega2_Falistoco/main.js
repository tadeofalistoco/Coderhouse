let precioMaquina1 = 40000;
let precioMaquina2 = 35000;
let precioMaquina3 = 30000;
let precioMaquina4 = 27000;
let precioMaquina5 = 45000;
let precioMaquina6 = 30000;
let precioMaquina7 = 28000;

let total = 0;

function calcularTotal() {
    while (true) {
        let respuesta = prompt("¿Qué máquina desea comprar? (1-7) Ingrese 'LISTO' para terminar.");

        if (respuesta === 'LISTO') {
            break;
        }

        let maquinaElegida = parseInt(respuesta);

        if (maquinaElegida >= 1 && maquinaElegida <= 7) {
            switch (maquinaElegida) {
                case 1:
                    total += precioMaquina1;
                    break;
                case 2:
                    total += precioMaquina2;
                    break;
                case 3:
                    total += precioMaquina3;
                    break;
                case 4:
                    total += precioMaquina4;
                    break;
                case 5:
                    total += precioMaquina5;
                    break;
                case 6:
                    total += precioMaquina6;
                    break;
                case 7:
                    total += precioMaquina7;
                    break;
            }
        } else {
            alert("Opción inválida. Por favor ingrese un número entre 1 y 7.");
        }
    }

    alert("El total a pagar es: " + total);
}

calcularTotal();
