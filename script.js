let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", () => {

    if (inputTarefa.value.trim() === "") {
        mensagem.innerText = 'A lista está vazia!';
        mensagem.className = 'text-danger fw-bold';
    } else {

        let novoItem = document.createElement("li");
        novoItem.innerText = inputTarefa.value;
        novoItem.className = "list-group-item";

        listaTarefas.appendChild(novoItem);

        mensagem.innerText = 'Item adicionado com sucesso!';
        mensagem.className = 'text-success fw-bold';

        inputTarefa.value = "";
    }

});