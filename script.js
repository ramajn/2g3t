let lista = [];
const atualizar_tela = () =>{
    if(lista.length > 0){
        let nomes = "";
        for(let i = 0; i < lista.length; i++){
            nomes += lista[i] + "<br>";
        }
        document.getElementById("lista").innerHTML = nomes;
        return;
    }
    document.getElementById("lista").innerHTML = "<h1>Lista Vazia</h1>";
}
function inserir_ultimo(){
    let nomes= document.getElementById("nome").value;
    if ("" != nomes){
        lista.push(nome);
        atualizar_tela();
    }


}
function inserir_primeiro(){
    let nomes= document.getElementById("nome").value;
    if ("" !=nome){
        lista.unshift(nome);
        atualizar_tela();
    }
}
function deletar_primeiro(){
    if (lista.length > 0){
        lista.shift();
        atualizar_tela();
    }
}
function deletar_ultimo(){
    if (lista.length > 0){
        lista.pop();
        atualizar_tela();
    }
}
function limpar_lista(){
    lista = [];
    atualizar_tela;
}

function ordenar_az(){
    if (lista.length > 0){
        lista.sort();
        atualizar_tela();
    }
}

function ordenar_za(){
    if (lista.length > 0){
        lista.sort();
        lista.reverse();
        atualizar_tela();
    }
}