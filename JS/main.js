let btnCalcular = document.getElementById("botao-calcular");


function calculandoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");

    let imc = (peso / (altura * altura)).toFixed(2);
    if(peso !== '' && altura !== ''){
       resultado.textContent = `Seu IMC é ${imc}`;
    } else {
       resultado.textContent = "Por favor, preencha todos os campos acima!"
    }
}
