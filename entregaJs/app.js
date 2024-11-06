function verificarSalud() {
    let haceEjercicio, comeSaludable;
    let intentos = 3;  // hasta tres  intentos

    // solo deja  hasta 3 intentos para responder correctamente
    for (let i = 0; i < intentos; i++) {
        // pregunta si hace ejercicio y si come saludable
        haceEjercicio = prompt("¿Haces ejercicio regularmente? (sí o no)").toLowerCase();
        comeSaludable = prompt("¿Comes de forma saludable? (sí o no)").toLowerCase();

        // Verifica si las respuestas son válidas
        // valide el tilde por las dudas, nose si es correcto 
        if ((haceEjercicio === "sí" || haceEjercicio === "si") && (comeSaludable === "sí" || comeSaludable === "si")) {
            alert("¡Genial! Estás llevando un estilo de vida saludable.");
            break 
        } else {
            if (i < intentos - 1) {
                alert("Tus respuestas no son válidas. Por favor, intenta de nuevo.");
            } else {
                alert("¡Apúrate! Necesitas enfocarte en tu salud.");
            }
        }
    }
}

//función llamada   
verificarSalud();