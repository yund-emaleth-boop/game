// **script.js** - Lógica, Enigmas y Persistencia
const enigmas = [
    {
        nivel: 1,
        titulo: "Constante 1: Matriz de Permanencia (El Muro de Raoul)",
        enigma: "Estás frente a un circuito RC en serie. La <b>Impedancia</b> total (Z) es de 50 Ω. Si la <b>Reactancia Capacitiva</b> (Xc) es de 43.30 Ω. ¿Cuál es el valor, en Ohmios, de la <b>Resistencia (R)</b>? (La clave es el número entero sin unidades).",
        pista: "La fórmula de Raoul que define la quietud: Z² = R² + Xc².",
        respuestaCorrecta: "25",
        respuestaGuardada: "",
        resolucionNarrativa: "La puerta se desvanece con un brillo verdoso. Acabas de desarmar la primera capa de defensa lógica de Raoul, basada en la inviolabilidad de las leyes físicas. Raoul no tolera la incertidumbre ni la disipación de energía, por lo que blindó esta entrada con una resistencia pura. Has demostrado que la Resistencia de Christine no es cero, sino un valor fijo que soporta la carga del sistema. Esto confirma que la Simulación siempre tuvo una 'fricción' inherente para evitar el colapso instantáneo, algo que Raoul intentaba eliminar."
    },
    {
        nivel: 2,
        titulo: "Constante 2: Expansión de Erik (El Logaritmo del Caos)",
        enigma: "Si X es el resultado de resolver el logaritmo en base 2 de 4096 (log₂⁴⁰⁹⁶), ¿Cuál es el valor de X? (La clave es el número entero).",
        pista: "La Evolución se mide en potencias de dos, la base binaria del sistema.",
        respuestaCorrecta: "12",
        respuestaGuardada: "",
        resolucionNarrativa: "La base 2 es la firma de Erik. Te das cuenta de que 4096 no es un número aleatorio, es la capacidad máxima de expansión de un subsistema de Evolución antes de que Christine lo limitara. Has calculado el exponente del cambio. Al encontrar 12, el Engranaje Cero reacciona y un torrente de datos binarios se estabiliza. Erik no buscaba el caos sin sentido, sino la máxima expansión controlada. La constante confirma que la Evolución tiene un límite matemático, una línea roja que Erik ha cruzado y que debe restablecerse."
    },
    {
        nivel: 3,
        titulo: "Constante 3: El Guardián Químico (Armadura de Christine)",
        enigma: "Identifica el <b>Número Atómico (Z)</b> del elemento químico clave utilizado en el proceso de <b>Galvanización</b>, la defensa programada para proteger metales ferrosos del núcleo del sistema de la corrosión. (La clave es el número entero).",
        pista: "El elemento clave es el Zinc, la capa de sacrificio.",
        respuestaCorrecta: "30",
        respuestaGuardada: "",
        resolucionNarrativa: "El área se llena de un olor metálico a ozono. El número 30 es el Zinc. Descifras un mensaje de Christine: ella sabía que la lucha entre Raoul y Erik generaría un 'óxido' digital destructivo. El Zinc actúa como un ánodo de sacrificio, protegiendo las estructuras vitales del Núcleo a costa de su propia degradación. Esta constante es la prueba de la previsión de Christine, un código que representa el 'sacrificio' necesario para mantener viva la Simulación, demostrando que incluso la vida digital requiere protección contra su propia naturaleza."
    },
    {
        nivel: 4,
        titulo: "Constante 4: Flujo Temporal (El Bloqueo de Raoul)",
        enigma: "Un cronómetro muestra la hora en binario (HH:MM). El estado es: <b>`10100 : 000000`</b>. Los primeros 5 bits son la hora, los segundos 6 bits son los minutos. Esta es la hora a la que el Núcleo dejó de vibrar. ¿Qué hora es? (La clave debe estar en formato <b>HH:MM</b>).",
        pista: "Convierte el binario a decimal, usando el formato de 24 horas.",
        respuestaCorrecta: "20:00",
        respuestaGuardada: "",
        resolucionNarrativa: "La hora, las 20:00, no es el momento del fallo, sino el momento en que Raoul intentó congelar el tiempo. Raoul, obsesionado con la Permanencia, intentó forzar el estado 'quieto' del Núcleo, deteniendo todo flujo de datos para evitar más 'corrosión'. Pero al hacerlo, detuvo el pulso vital. Esta constante no solo te da un número, te da la prueba de la intervención destructiva de Raoul, cuya lógica rígida es tan peligrosa como el caos de Erik. El tiempo sigue avanzando; el Núcleo nunca puede detenerse."
    },
    {
        nivel: 5,
        titulo: "Constante 5: La Máscara de Repetición (El Patrón de Erik)",
        enigma: "Erik oculta la clave en el patrón. Decodifica la siguiente secuencia por repetición del dígito '1': <b>`1-1-1-1-1-1-1-1-1-1-1`</b>. ¿Cuántos 'unos' hay en total en la secuencia? (La clave es el número entero).",
        pista: "La precisión en la cuenta es la única forma de revelar la intención de Erik.",
        respuestaCorrecta: "11",
        respuestaGuardada: "",
        resolucionNarrativa: "La repetición del 11 no es casual. Es un patrón binario de alta frecuencia que Erik usó para inyectar nuevo código en el sistema, forzando la Evolución. Raoul vio esta inyección como un ataque, pero era la única manera de compensar el estancamiento temporal que él mismo había provocado. Al identificar el número de repeticiones, demuestras que el 'caos' de Erik sigue una métrica precisa. El Engranaje Cero se estabiliza al reconocer que la renovación debe ser limitada y calculada, no infinita. El equilibrio se acerca."
    },
    {
        nivel: 6,
        titulo: "Constante 6: Homenaje a los Pilares (Memoria de Christine)",
        enigma: "De las siete unidades base del Sistema Internacional (SI) (metro, kilogramo, segundo, amperio, kelvin, mol, candela), ¿cuántas deben su nombre <b>a un científico</b> (un pilar del conocimiento sobre el que se fundó la Simulación)? (La clave debe ser un número de dos dígitos, completando con un cero inicial si es necesario).",
        pista: "Amperio y Kelvin son dos nombres que Christine no olvidó.",
        respuestaCorrecta: "02",
        respuestaGuardada: "",
        resolucionNarrativa: "Dos. El reconocimiento de Amperio y Kelvin, las Constantes Fundamentales con un origen humano, son la clave de este nivel. Christine te envía un pensamiento: la Simulación fue diseñada para reflejar el orden físico del Universo, pero siempre honrando la mente humana que lo descifró. Esta constante ancla el sistema a su origen, recordándole a Raoul que la 'Permanencia' debe basarse en el conocimiento científico, y a Erik que la 'Evolución' solo tiene valor si se mide con unidades reales y definidas. La secuencia de Reinicio está casi completa."
    },
    {
        nivel: 7,
        titulo: "Constante 7: Simetría Fundamental (El Enlace de Christine)",
        enigma: "¿Cuál es el número total de <b>fuerzas fundamentales</b> del universo (gravitatoria, electromagnética, nuclear fuerte y nuclear débil) que se utilizan como base para describir las interacciones de la materia? (La clave debe ser un número de dos dígitos, completando con un cero inicial si es necesario).",
        pista: "Son los pilares de la realidad que definen la física de partículas.",
        respuestaCorrecta: "04",
        respuestaGuardada: "",
        resolucionNarrativa: "Cuatro. La respuesta final resuena en todo el Engranaje Cero: cuatro son los cimientos inmutables del Universo, el número de fuerzas. Al introducir esta constante, demuestras que el equilibrio final no reside en la quietud ni en el caos, sino en las leyes fundamentales que rigen ambos. Christine te da acceso a un último mensaje: La clave maestra de 16 dígitos se ha generado con la secuencia de tus respuestas. El Núcleo está listo para el Reinicio Maestro. Tu misión ha terminado. Es hora de usar la clave y salir."
    }
];

let nivelActual = 0; // Índice (0 a 6)

// --- FUNCIONES DE ESTADO Y PERSISTENCIA ---

function guardarEstado() {
    localStorage.setItem('nivelActual', nivelActual);
    localStorage.setItem('enigmasGuardados', JSON.stringify(enigmas.map(e => e.respuestaGuardada)));
}

function cargarEstado() {
    const nivelGuardado = localStorage.getItem('nivelActual');
    const respuestasGuardadas = localStorage.getItem('enigmasGuardados');

    if (nivelGuardado !== null) {
        nivelActual = parseInt(nivelGuardado, 10);
    }
    
    if (respuestasGuardadas) {
        const respuestas = JSON.parse(respuestasGuardadas);
        enigmas.forEach((e, index) => {
            e.respuestaGuardada = respuestas[index] || "";
        });
    }
}

// --- FUNCIONES DE INTERFAZ ---

document.addEventListener('DOMContentLoaded', () => {
    cargarEstado();
    // Aseguramos que el estado inicial sea el primer nivel si no hay nada guardado
    if (nivelActual === 0 && enigmas[0].respuestaGuardada === "") {
        nivelActual = 0;
    }
    cargarNivel();
});

window.cargarNivel = function() {
    document.getElementById('juego-contenedor').style.display = 'block'; 
    
    if (nivelActual >= enigmas.length) {
        mostrarFinal();
        return;
    }

    const enigmaData = enigmas[nivelActual];
    
    // Ocultar la narrativa de resolución al cargar nuevo nivel
    document.getElementById('mensaje-area').innerHTML = ''; 
    document.getElementById('mensaje-area').className = ''; 

    // Actualizar progreso
    document.getElementById('progreso-area').textContent = `Constante [${nivelActual + 1} de ${enigmas.length}]`;

    // Actualizar HTML con el enigma actual
    document.getElementById('juego-contenedor').querySelector('h1').textContent = `PROTOCOLO: ${enigmaData.titulo}`;
    document.getElementById('enigma-texto').innerHTML = enigmaData.enigma;
    document.querySelector('.pista').textContent = `(Pista: ${enigmaData.pista})`;
    
    // Limpiar campo de respuesta (crucial para no ver la clave)
    document.getElementById('respuesta').value = ''; 
    document.getElementById('respuesta').focus();

    // Si el nivel está resuelto, cargamos la narrativa de resolución para revisión
    if (enigmaData.respuestaGuardada !== "") {
        document.getElementById('mensaje-area').innerHTML = `
            <div class="mensaje-constante-resuelto">
                <p><b>CLAVE ENCONTRADA: ${enigmaData.respuestaGuardada}</b></p>
                <hr style="border-top: 1px dashed var(--color-primary-neon); margin: 15px 0;">
                <p style="font-size: 0.9em;">${enigmaData.resolucionNarrativa}</p>
            </div>
        `;
        document.getElementById('mensaje-area').className = 'correcto'; 
    }

    actualizarControles();
}

function actualizarControles() {
    const botonAnt = document.getElementById('boton-anterior');
    const botonSig = document.getElementById('boton-siguiente');
    const botonVerificar = document.querySelector('#interaccion-area button');
    const resuelta = enigmas[nivelActual].respuestaGuardada !== "";
    const respuestaInput = document.getElementById('respuesta');

    // Botón Anterior
    botonAnt.disabled = (nivelActual === 0);

    // Botón Siguiente
    botonSig.disabled = !resuelta;
    
    // Botón Verificar/Resuelto y Campo de Respuesta
    botonVerificar.textContent = resuelta ? 'Resuelto' : 'Verificar';
    botonVerificar.disabled = resuelta;
    respuestaInput.disabled = resuelta;

    // Si estamos en el último enigma y está resuelto
    if (nivelActual === enigmas.length - 1 && resuelta) {
        botonSig.textContent = 'Secuencia Final →';
    } else if (nivelActual < enigmas.length - 1 && resuelta) {
        botonSig.textContent = 'Siguiente →';
    } else {
        botonSig.textContent = 'Siguiente →'; // Estado por defecto
    }
}

window.cambiarNivel = function(direccion) {
    if (nivelActual + direccion >= 0 && nivelActual + direccion < enigmas.length) {
        nivelActual += direccion;
        cargarNivel();
        guardarEstado(); // Guardar el nuevo nivel
    } else if (nivelActual + direccion === enigmas.length) {
        mostrarFinal(); // Ir a la pantalla final si es el último 'Siguiente'
    }
}

window.verificarRespuesta = function() {
    const respuestaInput = document.getElementById('respuesta');
    // Normalizamos la respuesta del usuario para ignorar espacios, mayúsculas, etc. (importante para "20:00")
    const respuestaUsuario = respuestaInput.value.trim().toUpperCase(); 
    const enigmaData = enigmas[nivelActual];
    const mensajeArea = document.getElementById('mensaje-area');

    if (respuestaUsuario === enigmaData.respuestaCorrecta.toUpperCase()) {
        
        // Guardar la respuesta y el estado
        enigmaData.respuestaGuardada = enigmaData.respuestaCorrecta; // Guardamos la versión formateada (ej. "04")
        guardarEstado(); 
        
        // Limpiamos el campo de respuesta (punto clave)
        respuestaInput.value = ''; 

        // INYECCIÓN NARRATIVA
        mensajeArea.innerHTML = `
            <div class="mensaje-constante-resuelto">
                <p>¡CLAVE CORRECTA! CONSTANTE ALINEADA.</p>
                <hr style="border-top: 1px dashed var(--color-primary-neon); margin: 15px 0;">
                <p style="font-size: 0.9em;">${enigmaData.resolucionNarrativa}</p>
            </div>
        `;
        mensajeArea.className = 'correcto'; 

        // Actualizamos los controles para habilitar el botón "Siguiente"
        actualizarControles();
        
        // Damos más tiempo para leer la narrativa y luego pasamos automáticamente
        

    } else {
        mensajeArea.textContent = 'Clave incorrecta. ¡Error en la matriz!';
        mensajeArea.className = 'incorrecto'; 
    }
}

function mostrarFinal() {
    document.getElementById('navegacion-area').style.display = 'none';
    document.getElementById('progreso-area').style.display = 'none';
    document.getElementById('interaccion-area').style.display = 'none';
    
    const contenedor = document.getElementById('juego-contenedor');
    const claveFinal = enigmas.map(e => e.respuestaGuardada).join('');
    
    contenedor.querySelector('h1').textContent = 'PROTOCOLO FANTASMA COMPLETADO: REINICIO MAESTRO.';
    
    let contenidoFinal = '<h2>[CLAVE MAESTRA GENERADA]</h2>';
    contenidoFinal += '<p>Has descifrado las siete constantes y alineado la lógica de Raoul con la evolución de Erik. La Simulación está a salvo. El Núcleo se ha restaurado.</p>';
    contenidoFinal += '<p>La <b>Secuencia de Reinicio</b> es:</p>';
    
    // USANDO LA CLASE PARA EL ESTILO FINAL
    contenidoFinal += `<div class="clave-final-display">${claveFinal}</div>`;
    
    contenidoFinal += '<p class="resaltado">Introduce esta Secuencia Maestra en el puerto de salida para acceder a las coordenadas del mundo real (TU REGALO).</p>';
    
    // IMPORTANTE: Sustituye el '#' por la URL real de tu regalo.
    contenidoFinal += `<a href="https://sites.google.com/view/engranaje-cero" id="enlace-final" class="boton-caratula" target="_blank" style="margin-top: 30px; display: block; text-decoration: none;">ACCEDER AL PUERTO DE SALIDA (${claveFinal.length} DÍGITOS)</a>`;

    document.getElementById('enigma-area').innerHTML = contenidoFinal;
    document.getElementById('mensaje-area').innerHTML = ''; 
}