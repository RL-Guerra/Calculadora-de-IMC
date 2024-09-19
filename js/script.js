// Função para validar os dados do formulário e exibir mensagens de erro na página
function validarFormulario(peso, altura) {
    let mensagemErro = document.getElementById("mensagem_erro");

    // Verifica se o elemento da mensagem de erro já existe, se não, cria um
    if (!mensagemErro) {
        mensagemErro = document.createElement("p");
        mensagemErro.id = "mensagem_erro";
        mensagemErro.style.color = "DarkRed";
        document.querySelector("#imc form").appendChild(mensagemErro);
    }

    // Verifica se os campos estão vazios ANTES de qualquer conversão
    if (peso === "" || altura === "") {
        mensagemErro.innerText = "Preencha todos os dados";
        return false;
    }

    // Verifica se os campos contêm apenas números
    if (isNaN(peso) || isNaN(altura)) {
        mensagemErro.innerText = "Por favor, insira somente números";
        return false;
    }

    // Verifica se os valores são positivos
    if (peso <= 0 || altura <= 0) {
        mensagemErro.innerText = "Insira somente súmeros positivos, para a realização do calculo de IMC";
        return false;
    }

    // Se todas as validações forem aprovadas, limpa a mensagem de erro
    mensagemErro.innerText = "";
    return true;
}

// Função para calcular o IMC
function calcularIMC() {
    let peso = document.getElementById("peso").value.replace(",", ".");
    let altura = document.getElementById("altura").value.replace(",", ".");

    // Validação do formulário ANTES de conversão para números
    if (!validarFormulario(peso, altura)) {
        return;
    }

    // Converte as strings para número somente após validação
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Se a altura foi inserida em centímetros, converte para metros
    if (altura > 3) {
        altura = altura / 100;
    }

    const imc = peso / (altura * altura);
    let status = "";

    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        status = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        status = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9){
        status = "Obesidade I";
    } else if (imc >= 35 && imc < 39.9){
        status = "Obesidade II";
    } else {
        status = "Obesidade III";
    }

    // Exibe o resultado no HTML
    document.getElementById("valor_imc").innerText = imc.toFixed(2);
    document.getElementById("status_imc").innerText = status;
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("valor_imc").innerText = "0";
    document.getElementById("status_imc").innerText = "0";

    // Remove mensagem de erro se houver
    let mensagemErro = document.getElementById("mensagem_erro");
    if (mensagemErro) {
        mensagemErro.innerText = "";
    }
}

// Event listeners para os botões
document.getElementById("calcular").addEventListener("click", calcularIMC);
document.getElementById("limpar").addEventListener("click", limparFormulario);
