let Additem = document.getElementById("Additem");
let btnAdicionar = document.getElementById("btnAdicionar");
let itemEscirto

let item = document.querySelector(".Lista");
let novoItem

btnAdicionar.addEventListener("click", () => {
        itemEscirto = Additem.value

        if (itemEscirto) {
         novoItem = document.createElement("li");
         novoItem.innerText = itemEscirto;
         item.appendChild(novoItem)
        }

});