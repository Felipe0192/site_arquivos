var arquivo_original;// path completo do arquivo original
// caminho encurtado do path do arquivo original para ficar melhor de ver
var formato_final


function valor_teste(event) {
    arquivo_original = event.target.files[0].name // isso teoricamente vai puxar so o nome do arquivo nao o path q nao vai importar para o back pq ele vai mandar o arquivo real
    console.log(arquivo_original);

    if (arquivo_original !== null) {    //tem que ficar ai pra continuar dps chama outra funçao para resolver isso do display
        display_converter();
        coloca_arquivo_original();


    }
}

function display_converter() {

    document.getElementById("div-button").style.display = "none";
    document.getElementById("conversor").style.display = "block"; //esse block ele tipo coloca
    //  n sei pq acho que adiciona o bloco do display

}


//agora vou colocar o path do arquivo original
//  mudando o nome da dive usando o classname e usa o query selector para selecionar uma div
// , mas isso parece que troca o nome da div sei la


function coloca_arquivo_original() {
    document.getElementById("arquivo-original").innerHTML = arquivo_original;

}
//o inner ele escreve ou edita um texto dentro do html


function pegar_variavel(event) { // esse vai receber a variavel que vai enviar e dps vejo a de enviar o arquivo
    formato_final = event.target.value;
    console.log(formato_final);
    formato_selecionado();
}




function formato_selecionado() {

    document.getElementById("label-arquivo").innerHTML = formato_final;
    document.getElementById("label-arquivo").style.color = "black"

}




//posso atribuar uma variavel quando clicar e adicionar um valor e quando for diferente de zero faz a funcao para mandar para o back e trocar o display com essa funcao abaixo


function tela_download() { // esse vai abrir a tela de download e fechara de converter

    document.getElementById("tela_download").style.display = "block";
    document.getElementById("conversor").style.display = "none";

}







// no js o if tem que estar entre parenteses



// agora esta printando no console o caminho do arquivo
//  mt facil ter feito esse place holder e dps passado pro original

//puxou o codigo sem o valuekkkkk
//acho que nao tava indo pq o js tava careegando mt cedo
// pq ele ta la em cima no body, o ocrreto é deixar o link do scrpt la no final do body



//preciso fazer que a pagina faca um efeito e apareca o arquivo visualizado
// e mude um pouco o layout tipo
//fizemos a parte facil agora precisa ir para media dps a dificl que vai ser o back
