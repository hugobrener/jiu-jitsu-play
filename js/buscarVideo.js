import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild) { //enquanto a lista tiver filhos, ele vai removendo para esvaziar a tela
        lista.removeChild(lista.firstChild) //assim, só aparecerá os videos com os termos buscados
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if (busca.length == 0) { //se o tamanho da lista for zero, ou seja, não tiver nenhum vídeo com o termo buscado
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))