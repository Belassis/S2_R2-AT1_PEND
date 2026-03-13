let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", () => {

    if (inputTarefa.value == "") {
        mensagem.innerHTML = '<button type="button" class="btn btn-outline-danger">A lista está vazia!</button>';
    } else {

        let novoItem = document.createElement("li");
        novoItem.innerText = inputTarefa.value;
        novoItem.className = "list-group-item";

        listaTarefas.appendChild(novoItem);

        mensagem.innerHTML = '<button type="button" class="btn btn-outline-success">Item adicionado com sucesso</button>';

        inputTarefa.value = "";
    }

});