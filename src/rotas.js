const { Router } = require('express')
const clienteControlador = require('./controladores/cliente')

const { validarCamposObrigatoriosCliente, validarCPFouEmailExistentes } = require('./intermediarios/validacoes')

const rotas = Router()

rotas.get('/cliente', clienteControlador.listar)
rotas.post('/cliente', validarCamposObrigatoriosCliente, validarCPFouEmailExistentes, clienteControlador.cadastrar)

module.exports = rotas