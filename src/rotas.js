const { Router } = require('express')
const usuarioControlador = require('./controladores/usuario')

const rotas = Router()

rotas.get('/', usuarioControlador.index)

module.exports = rotas