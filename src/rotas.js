const { Router } = require('express')
const clienteControlador = require('./controladores/cliente')

const { validarCamposObrigatoriosCliente, validarCPFouEmailExistentes } = require('./intermediarios/validacoes')

const rotas = Router()

rotas.get('/cliente', clienteControlador.listar)
rotas.post('/cliente', validarCamposObrigatoriosCliente, validarCPFouEmailExistentes, clienteControlador.cadastrar)
rotas.put('/cliente/:id', validarCamposObrigatoriosCliente, validarCPFouEmailExistentes, clienteControlador.atualizar)
rotas.get('/cliente/:id', clienteControlador.listarPorId)
rotas.delete('/cliente/:id', clienteControlador.excluir)

module.exports = rotas