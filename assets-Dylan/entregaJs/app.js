function verificarSalud() {
    let haceEjercicio, comeSaludable;
    let intentos = 3;  // hasta tres  intentos

    // solo deja  hasta 3 intentos para responder correctamente
    for (let i = 0; i < intentos; i++) {
        // pregunta si hace es mayor y si quiere saber de nosotros
        haceEjercicio = prompt("¿Tenes +18? (sí o no)").toLowerCase();
        comeSaludable = prompt("¿Buscas informacion sobre nosotros? (sí o no)").toLowerCase();

        // Verifica si las respuestas son válidas
        // valide el tilde por las dudas, nose si es correcto 
        if ((haceEjercicio === "sí" || haceEjercicio === "si") && (comeSaludable === "sí" || comeSaludable === "si")) {
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