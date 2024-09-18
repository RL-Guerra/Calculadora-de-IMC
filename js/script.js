// Função para validar os dados do formulário
function validarFormulario(peso, altura) {
    if (peso === "" || altura === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    if (isNaN(peso) || isNaN(altura)) {
        alert("Os campos devem conter apenas números.");
        return false;
    }
    if (peso <= 0 || altura <= 0) {
        alert("Peso e altura devem ser valores positivos.");
        return false;
    }
    return true;
}

// Função para calcular o IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!validarFormulario(peso, altura)) {
        return;
    }

    const imc = peso / (altura * altura);
    let status = "";

    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        status = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        status = "Sobrepeso";
    } else {
        status = "Obesidade";
    }

    document.querySelector("#resultado_imc span:nth-of-type(1)").innerText = imc.toFixed(2);
    document.querySelector("#resultado_imc span:nth-of-type(2)").innerText = status;
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.querySelector("#resultado_imc span:nth-of-type(1)").innerText = "0";
    document.querySelector("#resultado_imc span:nth-of-type(2)").innerText = "0";
}

// Event listeners para os botões
document.getElementById("calcular").addEventListener("click", calcularIMC);
document.getElementById("limpar").addEventListener("click", limparFormulario);
