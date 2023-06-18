//Armamos la funcion para convertir de pesos uy a pesos arg
function convertir() {
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let conversion = document.getElementById("conversion").value;
    let tasaCambioArgentinos = 6.53; // Tasa de cambio aproximada a pesos argentinos
    let tasaCambioDolares = 0.026; // Tasa de cambio aproximada a dólares

    let resultado;
    if (conversion === "argentinos" && cantidad > 0) {
      resultado = cantidad * tasaCambioArgentinos + " Pesos Argentinos";
    } else if (conversion === "dolares" && cantidad > 0) {
      resultado = cantidad * tasaCambioDolares + " Dólares";
    } else {
      resultado = "Ingrese un numero mayor a 0";
    }

    document.getElementById("resultado").innerHTML = resultado;
  }