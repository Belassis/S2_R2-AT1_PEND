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

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";


        let texto = document.createTextNode(inputTarefa.value);

        let btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.className = "btn btn-danger btn-sm";
        btnRemover.style.marginLeft = "10px";

        btnRemover.addEventListener("click", () => {
            novaTarefa.remove();
        });

        // risca a tarefa quando marcar
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                novaTarefa.style.textDecoration = "line-through";
            } else {
                novaTarefa.style.textDecoration = "none";
            }
        });

        // adiciona tudo no li
        novaTarefa.appendChild(checkbox);
        novaTarefa.appendChild(texto);
        novaTarefa.appendChild(btnRemover);

        listaTarefas.appendChild(novaTarefa);

        mensagem.innerHTML = '<button type="button" class="btn btn-outline-success">Item adicionado com sucesso</button>';

        inputTarefa.value = "";
    }

});