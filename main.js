//Constantes 
const tasaCambioArgentinos = 6.53;
const tasaCambioDolares = 0.026;

// Función para convertir y manejar el historial de conversiones
function convertir() {
  let cantidad = parseFloat(document.getElementById("cantidad").value);
  let conversion = document.getElementById("conversion").value;

  let resultado;
  let tipoConversion;
  if (isNaN(cantidad) || cantidad <= 0) {
    resultado = 0;
    tipoConversion = "Inválido";
  } else if (conversion === "argentinos") {
    resultado = cantidad * tasaCambioArgentinos;
    tipoConversion = "Pesos Argentinos";
  } else if (conversion === "dolares") {
    resultado = cantidad * tasaCambioDolares;
    tipoConversion = "Dólares";
  }

  //Objeto
  let conversionObjeto = {
    cantidad: cantidad,
    tipo: tipoConversion,
    resultado: resultado,
    fecha: new Date().toLocaleString() // Agregamos la fecha de la conversión
  };

  // Obtenemos el historial de conversiones almacenado en localStorage (si existe)
  let historialGuardado = JSON.parse(localStorage.getItem("historial") || "[]");

  // Agregamos la nueva conversión al historial
  historialGuardado.push(conversionObjeto);

  // Guardar el historial actualizado en localStorage
  localStorage.setItem("historial", JSON.stringify(historialGuardado));
  mostrarHistorial(historialGuardado);
  document.getElementById("resultado").innerHTML = resultado + " " + tipoConversion;
}

// Función mostrar el historial de conversiones
function mostrarHistorial(historial) {
  let historialConver = document.getElementById("historial");
  historialConver.innerHTML = "<h3>Historial de Conversiones</h3>";

  let listaConversiones = document.createElement("ul");
  historial.forEach(function (conversion) {
    let nuevaConversion = document.createElement("li");
    nuevaConversion.textContent = conversion.cantidad + " Pesos Uruguayos => " + conversion.resultado + " " + conversion.tipo + " (" + conversion.fecha + ")";
    listaConversiones.appendChild(nuevaConversion);
  });

  historialConver.appendChild(listaConversiones);
}

// Función para activar el modo oscuro y guardar la selección en localStorage
function activarModoOscuro() {
  var body = document.body;
  body.classList.toggle("modo-oscuro");

  // Guardar la selección del modo oscuro en el almacenamiento local
  let modoOscuroSeleccionado = body.classList.contains("modo-oscuro");
  localStorage.setItem("modoOscuro", modoOscuroSeleccionado);
}

// Cargar el historial y la selección del modo oscuro al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  let historialGuardado = JSON.parse(localStorage.getItem("historial") || "[]");
  mostrarHistorial(historialGuardado);

  // Obtener la selección del modo oscuro desde el almacenamiento local
  let modoOscuroSeleccionado = JSON.parse(localStorage.getItem("modoOscuro")) || false;
  var body = document.body;

  if (modoOscuroSeleccionado) {
    body.classList.add("modo-oscuro");
  } else {
    body.classList.remove("modo-oscuro");
  }
});