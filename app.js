let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
    }
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para o sorteio.");
        return;
    }
    
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="color: green; font-weight: bold;">O amigo secreto sorteado é: ${amigoSorteado}</li>`;
    
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}
