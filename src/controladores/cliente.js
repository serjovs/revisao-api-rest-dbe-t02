let { leArquivoConverteParaArray, converteArrayParaTextoEEscreveNoArquivo } = require('../utils/manipularArquivo')
let caminhoArquivoCliente = 'src/dados/clientes.json'
let clientes = leArquivoConverteParaArray(caminhoArquivoCliente)

const listar = (req, res) => {
    if (clientes.length == 0) {
        return res.status(400).json({
            "mensagem": "Não existem clientes cadastrados"
        })
    }

    return res.status(200).json(clientes)
}

const cadastrar = (req, res) => {
    let ultimoId = 1
    
    if (clientes.length > 0) {
        let ultimoIndice = clientes.length - 1
        ultimoId = clientes[ultimoIndice].id + 1
    }
    
    let usuario = {
        id: ultimoId,
        ...req.body
    }

    clientes.push(usuario)
    converteArrayParaTextoEEscreveNoArquivo(caminhoArquivoCliente, clientes)

    return res.status(201).json(usuario)
}

module.exports = {
    listar,
    cadastrar
}