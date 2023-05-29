const { Router } = require('express')
const usuarioControlador = require('./controladores/cliente')

const rotas = Router()

rotas.get('/', usuarioControlador.index)

module.exports = rotas