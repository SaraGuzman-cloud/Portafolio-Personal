// PASO 1: Atrapar el elemento de HTML.
// "Document" es la página entera. "getElementById" busca el botón por su cédula (#id).
const botonContratar = document.getElementById("btn-contratar");
// PASO 2: Crear la receta (Función) que dirá qué pasa al hacer clic.
function darGracias() {
    // Vamos a cambiar el texto de ese mismo botón
    botonContratar.innerText = "¡Gracias por la oportunidad!";
    // Y vamos a lanzar una alerta de éxito
    alert("¡Me pondré en contacto muy pronto! 🚀");
}
// PASO 3: El Evento. Ponerle un "Escuchador" al botón.
// Le decimos: "Oye Botón, cuando escuches el evento 'click', llama a la receta darGracias".
botonContratar.addEventListener("click", darGracias);