var inputEntrada = document.querySelector('.numeroFuncionarios');

var valorVale2 = document.querySelector('.valorVale');

var mostrarResultado = document.querySelector('p');




function calcular (){
  var resultado;

  if (inputEntrada.value>100) {

   resultado = (inputEntrada.value * valorVale2.value)*0.95;

  }else if (inputEntrada.value>200) {

    resultado = (inputEntrada.value * valorVale2.value)*0.9;

  }else{
    resultado = inputEntrada.value * valorVale2.value
  }

  mostrarResultado.innerHTML = resultado;
}
