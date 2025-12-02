// **script.js** - Lógica, Enigmas y Persistencia
const enigmas = [
    {
        nivel: 1,
        titulo: "ENIGMA 1 — El Muro de Permanencia de Raoul",
        enigma: "El muro revela la matriz $A=\\begin{pmatrix}7 & 3\\\\ -4 & 1\\end{pmatrix}$ y te exige el determinante de $A^T A$.",
        pista: "Recuerda que $A^T A$ es una matriz cuadrada y simétrica. La clave es el número entero resultante.",
        respuestaCorrecta: "25",
        respuestaGuardada: "",
        resolucionNarrativa: "Cuando introduces 25, el muro exhala un impulso estático. Raoul reconoce tu dominio de la simetría: la única estructura que él considera digna de persistir. Las piezas del muro se retraen como placas tectónicas autocontenidas. La Permanencia, aunque hostil, te permite avanzar un paso más hacia el Núcleo."
    },
    {
        nivel: 2,
        titulo: "ENIGMA 2 — El Resonador del Caos de Erik",
        enigma: "Un modo resonante en la cavidad cúbica satisface la condición: $n_x^2+n_y^2+n_z^2 = 12$. Introduce el valor de la suma para continuar.",
        pista: "La clave es el número entero resultante de la suma de los cuadrados.",
        respuestaCorrecta: "12",
        respuestaGuardada: "",
        resolucionNarrativa: "Tu entrada 12 hace vibrar el aire digital. Erik se manifiesta en destellos geométricos, complacido: has comprendido la danza del caos, la geometría oculta en el ruido. Su frecuencia deja de golpear el Núcleo y, por un instante, la Evolución respira contigo y no contra ti."
    },
    {
        nivel: 3,
        titulo: "ENIGMA 3 — El Arsenal Galvánico de Christine",
        enigma: "Identifica el <b>Número Atómico (Z)</b> del elemento con configuración electrónica externa $\\text{[Ar]}\,3d^{10}4s^2$.",
        pista: "La clave es el número entero resultante de la suma de electrones: 18 (Argón) + 10 + 2.",
        respuestaCorrecta: "30",
        respuestaGuardada: "",
        resolucionNarrativa: "El 30 aparece en la consola y los espectros se ordenan como si recordaran tu nombre. El metal sacrificial que Christine empleó —símbolo de protección y desgaste voluntario— renace en el sistema. Una capa invisible rodea el pasillo: la defensa de Christine despierta, retrasando por un momento la corrosión digital que Raoul y Erik alimentan sin querer."
    },
    {
        nivel: 4,
        titulo: "ENIGMA 4 — El Compresor del Núcleo Languideciente",
        enigma: "El compresor del Núcleo exige un trabajo de expansión isoterma para estabilizar la energía. Debes introducir el valor numérico (sin unidades) que corresponde al trabajo realizado por el sistema: <b>2000</b>. (La clave es el número exacto, sin ceros iniciales).",
        pista: "La clave es el valor exacto de la magnitud del trabajo termodinámico necesario para restaurar el equilibrio. $W = 2000$.",
        respuestaCorrecta: "2000", 
        respuestaGuardada: "",
        resolucionNarrativa: "Cuando ingresas 2000, el compresor libera un chorro de aire tibio. El equilibrio térmico del Núcleo se recompone, como si el sistema recordara qué significa realmente “trabajo”. Las tensiones internas se estabilizan y parte del pulso errático del Núcleo se suaviza. Has restaurado un fragmento de la arquitectura energética que Christine dejó tras su huida."
    },
    {
        nivel: 5,
        titulo: "ENIGMA 5 — El Autómata de la Evolución Contenida",
        enigma: "Un autómata finito que reconoce longitudes de cadena congruentes con $\\mathbf{0 \\pmod{m}}$ necesita $m$ estados. Introduce el número de estados requerido si $\\mathbf{m = 11}$.",
        pista: "La clave es el número entero que define la congruencia: $m$.",
        respuestaCorrecta: "11",
        respuestaGuardada: "",
        resolucionNarrativa: "Tu respuesta —11— resuena como un chasquido en el engranaje binario. Erik gruñe, casi divertido: le has arrebatado una de sus rutas de expansión infinita. El autómata repliega estados, su estructura se vuelve finita, manejable. Has impuesto límites a la Evolución sin sofocarla, un equilibrio que ni Raoul ni Erik habían logrado."
    },
    {
        nivel: 6,
        titulo: "ENIGMA 6 — La Vitrina de los Pilares Universales",
        enigma: "¿Cuántas unidades base del Sistema Internacional (SI) dependen directamente de una de las constantes fundamentales de la física redefinidas ($\mathbf{h}$ o $\mathbf{k}$)? Formato obligatorio: dos dígitos.",
        pista: "Solo dos unidades del SI se definen por la constante de Planck ($h$) o la constante de Boltzmann ($k$). (Kilogramo y Kelvin).",
        respuestaCorrecta: "02",
        respuestaGuardada: "",
        resolucionNarrativa: "El 02 ilumina dos unidades en la vitrina: Kelvin y kilogramo. Las demás se apagan, como si aceptaran su inferior simplicidad. La metrología del Núcleo se reajusta con precisión quirúrgica. Este fue uno de los sistemas más personales de Christine, un recordatorio de que incluso la realidad simulada necesitaba anclajes absolutos."
    },
    {
        nivel: 7,
        titulo: "ENIGMA 7 — El Altar de las Fuerzas Primordiales",
        enigma: "Introduce el número total de fuerzas fundamentales necesarias para una Teoría de la Gran Unificación (TGU) mínima, incluyendo la gravedad. Formato obligatorio: dos dígitos.",
        pista: "La clave es el número total de fuerzas: Electromagnetismo, Fuerte, Débil, y Gravitatoria.",
        respuestaCorrecta: "04",
        respuestaGuardada: "",
        resolucionNarrativa: "Al escribir 04, los cuatro símbolos del altar se alinean: electromagnetismo, fuerte, débil... y el eco solitario de la gravedad. Una luz cristalina envuelve la sala —el último diseño de Christine, la prueba de que el universo, incluso en su versión digital, se sostiene sobre un equilibrio de fuerzas, no sobre el dominio de una sobre las otras. La cámara vibra suavemente: has completado las siete constantes."
    },
    {
        nivel: 8,
        titulo: "Constante 8 — Reinicio Maestro",
        enigma: "El Núcleo requiere la **Clave de 16 dígitos** para el Reinicio Maestro. Introduce la secuencia completa de las siete constantes (sin espacios, sin dos puntos) que acabas de desbloquear.",
        pista: "La clave es la concatenación de todas las constantes que has resuelto hasta ahora: C1C2C3C4C5C6C7.",
        respuestaCorrecta: "2512302000110204",
        respuestaGuardada: "",
        resolucionNarrativa: "¡Acceso concedido! La clave maestra de 16 dígitos ha sido aceptada. La simulación se estabiliza. Has unificado las tres arquitecturas: la Permanencia, la Evolución y la Simetría de Christine. El sistema inicia la secuencia de Reinicio, y la puerta hacia la realidad se abre ante ti. ¡Tu misión ha terminado!"
    } 
// El corchete de cierre del array ']' debe ir después de este bloque.
];
// ... El resto del código JS sigue aquí ...


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