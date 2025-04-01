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


//comecar agora a requisicao http vou usar o form data e ai enviar via post ou pra um xhtml ou um fetch

let form_data = new FormData();
var inputfile;
var button_count = 0;
var request;

function envio_form(event) {

    button_count = 1;

    if (button_count === 1)
        inputfile = document.getElementById("button-principal");


    if (inputfile.files.length > 0) {
        form_data.append("arquivo", inputfile.files[0]);
        form_data.append("formato", formato_final)

        fetch('https://postb.in/1743548109621-3164947689510', { // aonde que vai ser o servidor

            method: 'POST', // forma que vai enviar ou receber
            body: form_data // conteudo da requisição
            
        })
    }
}

//hj fazer pelo menos a parte do form data e ai se der envia o e decide se é melhor xhtml ou fetch
//  e ai amanha a gente foca em receber e garantir esse envio e o codigo de converter e dps de amanha
//  a gente faz o final de js e coloca o drag and drop e ai ta bront