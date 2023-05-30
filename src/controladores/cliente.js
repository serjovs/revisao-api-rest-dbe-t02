let { leArquivoConverteParaArray, converteArrayParaTextoEEscreveNoArquivo } = require('../utils/manipularArquivo')
let caminhoArquivoCliente = 'src/dados/clientes.json'
let clientes = leArquivoConverteParaArray(caminhoArquivoCliente)

const buscarClientePorId = (id) => {
    return clientes.find(cliente => {
        return Number(cliente.id) == Number(id)
    })
}

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

const atualizar = (req, res) => {
    const { id } = req.params
    const { nome, email, cpf } = req.body

    let clienteEncontrado = buscarClientePorId(id)

    if (!clienteEncontrado) {
        return res.status(400).json({
            "mensagem": "Cliente não encontrado"
        })
    }

    clienteEncontrado.nome = nome 
    clienteEncontrado.email = email 
    clienteEncontrado.cpf = cpf

    converteArrayParaTextoEEscreveNoArquivo(caminhoArquivoCliente, clientes)

    return res.status(200).json(clienteEncontrado)
}

const listarPorId = (req, res) => {
    const { id } = req.params
    
    let clienteEncontrado = buscarClientePorId(id)

    if (!clienteEncontrado) {
        return res.status(400).json({
            "mensagem": "Cliente não encontrado"
        })
    }

    return res.status(200).json(clienteEncontrado)
}

const excluir = (req, res) => {
    const { id } = req.params

    let clienteEncontrado = buscarClientePorId(id)

    if (!clienteEncontrado) {
        return res.status(400).json({
            "mensagem": "Cliente não encontrado"
        })
    }

    // filtrando os clientes que nao possuam o ID informado na rota
    // para assim conseguirmos remover o registro que deve ser excluido
    let clientesFiltrados = clientes.filter(cliente => {
        return Number(cliente.id) != Number(id)
    })

    converteArrayParaTextoEEscreveNoArquivo(caminhoArquivoCliente, clientesFiltrados)

    return res.status(200).json({
        "mensagem": "Cliente excluído com sucesso"
    })
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    listarPorId,
    excluir
}