const fs = require("fs")

const leArquivoConverteParaArray = (caminhoArquivo) => {
    // obtendo os dados do arquivo
    let dados = fs.readFileSync(caminhoArquivo)

    // transformar o conteudo do arquivo para array
    let dadosArray = JSON.parse(dados)

    return dadosArray
}

//  Precisamos saber qual é o arquivo ?
//  Precisamo ter quais dados serão escritos
// Quando for adicionar item através do `push`
// pós push, escrever o conteúdo novo no arquivo
const converteArrayParaTextoEEscreveNoArquivo = (caminhoArquivo, array) => {
    let dadosString = JSON.stringify(array)
    console.log(dadosString)
    fs.writeFileSync(caminhoArquivo, dadosString)
}


module.exports = {
    leArquivoConverteParaArray,
    converteArrayParaTextoEEscreveNoArquivo
}