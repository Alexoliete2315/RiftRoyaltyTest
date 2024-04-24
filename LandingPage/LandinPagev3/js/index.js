// Variable global para almacenar el último número de característica mostrado
var ultimaCaracteristicaMostrada = -1;

// Función para mostrar la característica
function mostrarCaracteristica(numero) {
    var imagen = document.getElementById("imagenCaracteristica");
    var parrafo1 = document.getElementById("textoCaracteristica1");
    var parrafo2 = document.getElementById("textoCaracteristica2");

    // Si el número de característica es igual al último mostrado, simplemente retornar
    if (ultimaCaracteristicaMostrada === numero) {
        // Si ya está visible, ocultarlo
        if (imagen.style.visibility === "visible") {
            imagen.style.visibility = "hidden";
            if (numero === 0) {
                parrafo1.style.visibility = "hidden";
            } else if (numero === 1) {
                parrafo2.style.visibility = "hidden";
            }
        } else { // Si está oculto, mostrarlo
            imagen.style.visibility = "visible";
            if (numero === 0) {
                parrafo1.style.visibility = "visible";
            } else if (numero === 1) {
                parrafo2.style.visibility = "visible";
            }
        }
    } else {
        ultimaCaracteristicaMostrada = numero;

        // Actualizar la imagen y el párrafo correspondientes al número de característica
        if (numero === 0) {
            console.log("Característica 1");
            imagen.src = "./img/fondo-download.jpg";
            parrafo1.textContent = "Texto de la Característica 1";
        } else if (numero === 1) {
            console.log("Característica 2");
            imagen.src = "./img/github.png";
            parrafo2.textContent = "Texto de la Característica 2";
        }

        // Mostrar la imagen y el párrafo
        imagen.style.visibility = "visible";
        if (numero === 0) {
            parrafo1.style.visibility = "visible";
            parrafo2.style.visibility = "hidden";
        } else if (numero === 1) {
            parrafo1.style.visibility = "hidden";
            parrafo2.style.visibility = "visible";
        }
    }
}

// Llamar a la función para mostrar la primera característica al cargar la página
mostrarCaracteristica(0);
