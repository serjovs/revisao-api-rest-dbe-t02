const { leArquivoConverteParaArray } = require("../utils/manipularArquivo")
let caminhoArquivoCliente = 'src/dados/clientes.json'
let clientes = leArquivoConverteParaArray(caminhoArquivoCliente)

const validarCamposObrigatoriosCliente = (req, res, next) => {
    let { nome, email, cpf } = req.body

    if (!nome) {
        return res.status(404).json({
            "mensagem": "Informe o nome do cliente"
        })
    }

    if (!email) {
        return res.status(400).json({
            "mensagem": "Informe o e-mail do cliente"
        })
    }

    if (!cpf) {
        return res.status(400).json({
            "mensagem": "Informe o cpf do cliente"
        })
    }

    next()
}

const validarCPFouEmailExistentes = (req, res, next) => {
    let { email, cpf } = req.body

    let cpfJaExistente = clientes.find((cliente) => {
        return Number(cliente.cpf) === Number(cpf)
    })

    if (cpfJaExistente) {
        return res.status(400).json({
            "mensagem": "Já existe cliente cadastrado com o CPF informado"
        })
    }

    let emailJaExistente = clientes.find((cliente) => {
        return cliente.email === email
    })

    if (emailJaExistente) {
        return res.status(400).json({
            "mensagem": "Já existe cliente cadastrado com o e-mail informado"
        })
    }

    next()
}
module.exports = {
    validarCamposObrigatoriosCliente,
    validarCPFouEmailExistentes
}