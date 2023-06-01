const fs = require("fs")

const leArquivoConverteParaArray = (caminhoArquivo) => {
    // obtendo os dados do arquivo
    let dados = fs.readFileSync(caminhoArquivo)

    // transformar o conteudo do arquivo para array
    let dadosArray = JSON.parse(dados)

    return dadosArray
}

//  Precisamos saber qual é o arquivo
//  Precisamo ter quais dados serão escritos
const converteArrayParaTextoEEscreveNoArquivo = (caminhoArquivo, array) => {
    // transformar em texto
    let dadosString = JSON.stringify(array)
    
    // escrever conteudo no arquivo
    fs.writeFileSync(caminhoArquivo, dadosString)
}


module.exports = {
    leArquivoConverteParaArray,
    converteArrayParaTextoEEscreveNoArquivo
}