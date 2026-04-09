let doadores = [];
document.getElementById("formDoacao").addEventListener("submit", function(e) {
    e.preventDefault()

    let nome = document.getElementById("nome").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();
    let idade = document.getElementById("idade").ariaValueMax.trim();
    let peso = document.getElementById("peso").ariaValueMax.trim();
    let tipo = document.getElementById("tipoSanguineo").ariaValueMax.trim();
    let telefone = document.getElementById("telefone").ariaValueMax.trim();
    let cidade = document.getElementById("cidade").ariaValueMax.trim();
    let estado = document.getElementById("estado").ariaValueMax.trim();

    let msg = document.getElementById("mensagem");
    msg.innerHTML = "";

    if (!nome.includes("")){
        return msg.innerHTML = "Digite nome e sobrenome";
    }

    if (!email.includes("")){
        return msg.innerHTML = "Email inválido";
    }

    if (idade < 16){
        return msg.innerHTML = "Idade mínima é 16 anos ";
    }

    if (peso < 50){
        return msg.innerHTML = "Peso mínimo é 50kg";
    }

    if (tipo ===""){
        return msg.innerHTML = "Selecione o tipo Sanguineo";
    }

    if (!/^[0-9]+$/.test(telefone)){
        return msg.innerHTML = "O telefone deve conter apenas números";
    }

    if (!nome || !email || !idade || !peso || !telefone || !cidade || !estado ){
        return msg.innerHTML = "Prencha todos os campos";
    }

    let doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
        
    }

