# revisao-api-rest-dbe-t02
<summary><b>Cadastrar Cliente</b></summary>

#### `POST` `/cliente`

Essa é a rota que permite cadastrar um novo cliente no sistema.

```javascript
// Corpo da requisição para cadastro de cliente (request body)
{
    "nome": "Victor",
    "email": "victor.torres@cubos.academy",
    "cpf": "03208575068"
}
```

Critérios de aceite:

    -   Validar os campos obrigatórios:
        -   nome
        -   email
        -   cpf
    -   O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo e-mail.
    -   O campo cpf no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo cpf.
    -   Retornar os dados cadastrados.

```javascript
// Corpo da resposta para cadastro de cliente (response body)
{
    "nome": "Victor",
    "email": "victor.torres@cubos.academy",
    "cpf": "03208575068"
}
```

<hr>

<summary><b>Editar dados do cliente</b></summary>

#### `PUT` `/cliente/:id`

Essa é a rota que permite atualizar os dados de um cliente cadastrado.

```javascript
// Corpo da requisição para atualização de cliente (request body)
{
    "nome": "Victor Torres",
    "email": "victor.moreno@cubos.academy",
    "cpf": "42977114009"
}
```

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota.
    -   Validar os campos obrigatórios:
        -   nome
        -   email
        -   cpf
    -   O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo e-mail.
    -   O campo cpf no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo cpf.
    -   Retornar os dados atualizados.

```javascript
// Corpo da resposta para atualização de cliente (response body)
{
    "nome": "Victor Torres",
    "email": "victor.moreno@cubos.academy",
    "cpf": "42977114009"
}
```

<hr>


<summary><b>Listar Clientes</b></summary>

#### `GET` `/cliente`

Essa é a rota que será chamada para listar todos os clientes cadastrados.

Critérios de aceite:

    -   Validar se existem clientes para retornar, caso contrário, retornar resposta informando que não existem clientes para serem exibidos.

```javascript
// Corpo da resposta para listagem de clientes caso exista cliente (response body)
[

    {
        "nome": "Victor",
        "email": "victor.torres@cubos.academy",
        "cpf": "42977114009"
    },
    {
        "nome": "Rhannah",
        "email": "rhannah.brasil@cubos.academy",
        "cpf": "31724801007"
    }
]
```

```javascript
// Corpo da resposta para listagem de cliente caso nao exista cliente (response body)
{
    "mensagem": "Não existe cliente para o ID informado"
}
```

<hr>


<summary><b>Detalhar Cliente</b></summary>

#### `GET` `/cliente/:id`

Essa é a rota que será chamada para obter um dos clientes cadastrados através do ID informado na rota.

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota, caso contrário, retornar resposta informando que não existe cliente para o ID informado.

```javascript
// Corpo da resposta para listagem de cliente por ID (response body)
{
    "nome": "Victor",
    "email": "victor.torres@cubos.academy",
    "cpf": "42977114009"
}
```

```javascript
// Resposta da requisição para listagem de cliente por ID, caso nao encontre cliente com ID informado (response body)
{
    "mensagem": "Não existe cliente para o ID informado"
}
```

<hr>


<summary><b>Excluir Cliente por ID</b></summary>

#### `DELETE` `/cliente/:id`

Essa é a rota que será chamada para excluir um dos clientes cadastrados.  

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota.
    -   Retornar mensagem, em ambos cenários, sucesso ou erro.

```javascript
// Corpo da resposta para excluir cliente por ID caso ocorra exclusao (response body)
{
    "mensagem": "Cliente excluído com sucesso"
}
```

```javascript
// Corpo da resposta para excluir cliente por ID caso nao encontre cliente com IF informado (response body)
{
    "mensagem": "Não foi"
}
```