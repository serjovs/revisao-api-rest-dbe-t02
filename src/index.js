const express = require('express')
const rotas = require('./rotas')

const app = express()

app.use(rotas)

app.listen(3000, () => {
    console.log('Servidor rodadndo na porta http://localhost:3000')
})

// CRUD - Create, Read, Update, Delete 
// GET - /produto/:id -> retornar um único produto
// GET - /produto - retorna todos produtos
// POST - /produto - cadastrar produto
// PUT - /produto/:id -> atualiza um produto
// DEL - /produto/:id -> exclui um produto