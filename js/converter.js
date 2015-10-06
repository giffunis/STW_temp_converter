"use strict"; // Vuelve más estricto el lenguaje

function converter(){
  var entrada = input_temp.value;

  var salida;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var aux = entrada.match(regexp);

  if(aux){  //  si existe aux
    var valor = parseFloat(aux[1]);
    var unidad_medida = aux[2];

    if(unidad_medida == 'C' || unidad_medida == 'c'){
        salida = valor * (9/5) + 32;
        salida = salida.toFixed(1) + "Farenheit";
    }
    else{
      salida = (valor - 32) * (5/9);
      salida = salida.toFixed(1) + "Centígrados";
    }
    output_temp.innerHTML = salida;
  } //  si existe aux
  else{ //  Si no existe aux
    output_temp.innerHTML = "Error, escríbelo correctamente: -5.2C";
  } //  Si no existe aux

} //  function converter()
