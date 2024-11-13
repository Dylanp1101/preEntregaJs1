function verificarSalud() {
    let mayor, info;
    let intentos = 3;  // hasta tres  intentos

    // solo deja  hasta 3 intentos para responder correctamente
    for (let i = 0; i < intentos; i++) {
        // pregunta si hace es mayor y si quiere saber de nosotros
        mayor = prompt("¿Tenes +18? (sí o no)").toLowerCase();
        info = prompt("¿Buscas informacion sobre nosotros? (sí o no)").toLowerCase();

        // Verifica si las respuestas son válidas
        // valide el tilde por las dudas, nose si es correcto 
        if ((mayor === "sí" || mayor === "si") && (info === "sí" || info === "si")) {
            alert("¡Genial! Estás en el lugar indicado.");
            break 
        } else {
            if (i < intentos - 1) {
                alert("Tus respuestas no son válidas. Por favor, intenta de nuevo.");
            } else {
                alert("Lamentamos que sea asi, gracias.");
            }
        }
    }
}

//función llamada   
verificarSalud();