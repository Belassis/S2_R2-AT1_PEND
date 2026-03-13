let nomeCliente = document.getElementById("nomeCliente");
let btnCadastrar = document.querySelector("#btnCadastrar");


btnCadastrar.addEventListener("click", ()=>{
        nomeCliente=nomeCliente.value 

            if(nomeCliente){
                mensagem.innerText = `Olá ${nomeCliente}!`
            }

    });
