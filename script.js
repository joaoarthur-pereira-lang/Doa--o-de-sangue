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
    