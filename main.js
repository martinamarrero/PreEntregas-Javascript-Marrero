// Definimos un array para almacenar las conversiones y luego mostrarlas en el historial
let conversiones = [];

// Armamos la función para convertir de pesos uy a pesos arg o dólares
function convertir() {
  let cantidad = parseFloat(document.getElementById("cantidad").value);
  let conversion = document.getElementById("conversion").value;
  let tasaCambioArgentinos = 6.53; // Tasa de cambio aproximada a pesos argentinos
  let tasaCambioDolares = 0.026; // Tasa de cambio aproximada a dólares

  let resultado;
  let tipoConversion;
  if (conversion === "argentinos" && cantidad > 0) {
    resultado = cantidad * tasaCambioArgentinos;
    tipoConversion = "Pesos Argentinos";
  } else if (conversion === "dolares" && cantidad > 0) {
    resultado = cantidad * tasaCambioDolares;
    tipoConversion = "Dólares";
  } else {
    resultado = 0;
    tipoConversion = "Invalido";
  }

  //Objeto
  let conversionObjeto = {
    cantidad: cantidad,
    tipo: tipoConversion,
    resultado: resultado,
  };

  // Agregamos el objeto de conversión al array de conversiones
  conversiones.push(conversionObjeto);

  // Mostramos el historial de conversiones
  let historialConver = document.getElementById("historial");
  historialConver.innerHTML = "<h3>Historial de Conversiones</h3>";
  let listaConversiones = document.createElement("ul");
  conversiones.forEach(function (conversion) {
    let nuevaConversion = document.createElement("li");
    nuevaConversion.textContent = conversion.cantidad + " Pesos Uruguayos => " + conversion.resultado + " " + conversion.tipo;
    listaConversiones.appendChild(nuevaConversion);
  });
  historialConver.appendChild(listaConversiones);
  document.getElementById("resultado").innerHTML = resultado + " " + tipoConversion;


  // Buscar una conversión específica utilizando el método find()
  let conversionEncontrada = conversiones.find(function (conversion) {
    return conversion.tipo === "Pesos Argentinos";
  });
  if (conversionEncontrada) {
    console.log("Conversión encontrada:", conversionEncontrada);
  }
  document.getElementById("resultado").innerHTML = resultado + " " + tipoConversion;
}

function activarModoOscuro() {
  var body = document.body;
  body.classList.toggle("modo-oscuro");
}