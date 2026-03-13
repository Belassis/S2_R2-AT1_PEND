let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", () => {

    if (inputTarefa.value == "") {

         mensagem.innerHTML = '<button type="button" class="btn btn-outline-danger">A lista está vazia!</button>';

    } else {

        let novaTarefa = document.createElement("li");
        novaTarefa.className = "list-group-item";
        novaTarefa.innerText = inputTarefa.value;

        let btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.className = "btn btn-danger btn-sm";

        btnRemover.addEventListener("click", () => {
            novaTarefa.remove();
        });
        novaTarefa.appendChild(btnRemover);
        listaTarefas.appendChild(novaTarefa);

              mensagem.innerHTML = '<button type="button" class="btn btn-outline-success">Item adicionado com sucesso</button>';

        inputTarefa.value = "";
    }

});
