let amigos = [];
let sorteados = [];
let listaAmigos = document.querySelector("#listaAmigos")

function adicionarAmigo() {
const nome = document.querySelector('#amigo');
if (nome.value === ""){
    alert ('Por favor, insira um nome');
} else {
    amigos.push(nome.value);
    limparCampo(nome);
    listarAmigos();
}
}


function listarAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo =>{
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
    });
}

function limparCampo(nome) {
    nome.value=null;
} 

function sortearAmigo() {
    let resultado = document.querySelector('#resultado');

    if (sorteados.length === amigos.length){
        resultado.innerHTML = 'Todos os amigos sorteados!';
        return;
    }
    let nomeSorteado;
do {
   nomeSorteado = Math.floor(Math.random()*amigos.length);
    resultado.innerHTML = 'Nome sorteado:'+amigos[nomeSorteado];
} while(sorteados.includes(nomeSorteado)); {

    sorteados.push(nomeSorteado)
}
} 

