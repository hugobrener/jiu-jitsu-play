// aqui é feita a requisição dos videos previamente salvos no 
//arquivo db.json , que seria como um banco de dados
async function listaVideos() {
    const conexao = await fetch(' http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {   //toda essa const faz a requisição para a postagem (POST) do arquivo a ser upado
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({   // aqui é feito a estrutura (body) para o objeto que estamos criando, 
            //que em seguida será requisitado para exibição na pagina de vídeos
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if (!conexao.ok) {
       throw new Error("Não foi possivel enviar o vídeo") 
    }

    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()  // converte a requisição em json

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
