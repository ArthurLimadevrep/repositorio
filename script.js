function verificaIMC() {
  let inputI = document.querySelector("#i");
  let inputA = document.querySelector("#a");
  let inputP = document.querySelector("#p");
  let spanImc = document.querySelector("#output");
  let i = parseInt(inputI.value);
  let a = parseFloat(inputA.value);
  let p = parseFloat(inputP.value);
  let saida;
  let imc;
  let cor;
  imc = p/(a*a)
  if (i <= 20 || i >= 60) {
    imc = 0
    saida = ", a classificação do IMC não se aplica a essa faixa etária!"   
  } else if (imc < 18.5) {
    saida = ", você está com baixo peso!";
    cor = "blue";
  } else if (imc <= 24.99) {
    saida = ", você está com o peso normal!"
    cor = "lime"
  } else if (imc <= 29.99) {
    saida = ", você está com sobrepeso!"
    cor = "orange"
  } else if (imc > 30) {
    saida = ", você está obeso!"
    cor = "red"
  } else {
    saida = "Informe um valor válido!";
    cor = "black";
  }
  spanImc.innerHTML = `<b><u>Seu IMC é igual a ${imc.toFixed(2)}${saida}`;
  spanImc.style.color = cor;
}