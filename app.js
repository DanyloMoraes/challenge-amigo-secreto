// armazena o nome dos amigos
let amigos = [];

// função para adicionar um novo amigo para o sorteio
function adicionarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    // verifica se o input está vazio, e incrementa o array 'amigos' com o nome de um amigo
    if(amigo !== '') {
        amigos.push(amigo);
        // mostra lista de amigos
        mostrarListaDeAmigos();
    } else {
        // mostra mensagem de erro se o input estiver vazio ao pressionar o botão 'Adicionar'
        alert('Por favor, insira o nome do amigo.');
    }
    // limpa o input '#amigo'
    document.querySelector('#amigo').value = '';
}

// função para mostrar uma lista de amigos que foram adicionados
function mostrarListaDeAmigos() {
    const listaAmigos = document.querySelector('#listaAmigos');
    // limpa a lista antes de mostrar a lista de amigos
    listaAmigos.innerHTML = '';
    // loop para cada amigo no array 'amigo' e criação de um 'li' para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const li = document.createElement('li');
        li.textContent = amigo;
        // adiciona amigo na lista
        listaAmigos.appendChild(li);
    }
}

// função para sortear o nome do amigo no array 'amigos'
function sortearAmigo() {
    if(amigos.length !== 0) {
    const resultado = document.querySelector("#resultado");
    // sorteia o nome de um amigo aleatório
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    // escreve na tela o nome do amigo sorteado
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
    // desativa o botão de sortear para evitar ser pressionado mais de uma vez
    document.querySelector(".button-draw").disabled = true;
    // desativa o botão de adicionar amigo para evitar adicionar mais um amigo
    document.querySelector(".button-add").disabled = true;
    } else {
        alert('A lista de amigos não pode estar vazia.');
    }
}