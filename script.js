let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", () => {

    if (inputTarefa.value== "") {

        mensagem.innerText = 'A tarefa está vazia!';
        mensagem.className = 'text-danger fw-bold';

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

        mensagem.innerText = 'Item adicionado com sucesso!';
        mensagem.className = 'text-success fw-bold';

        inputTarefa.value = "";
    }

});
