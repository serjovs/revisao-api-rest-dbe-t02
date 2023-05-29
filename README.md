# revisao-api-rest-dbe-t02
<summary><b>Cadastrar Cliente</b></summary>

#### `POST` `/cliente`

Essa é a rota que permite cadastrar um novo cliente no sistema.

Critérios de aceite:

    -   Validar os campos obrigatórios:
        -   nome
        -   email
        -   cpf
    -   O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo e-mail.
    -   O campo cpf no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo cpf.

<summary><b>Editar dados do cliente</b></summary>

#### `PUT` `/cliente/:id`

Essa é a rota que permite atualizar os dados de um cliente cadastrado.

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota.
    -   Validar os campos obrigatórios:
        -   nome
        -   email
        -   cpf
    -   O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo e-mail.
    -   O campo cpf no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo cpf.

<summary><b>Listar Clientes</b></summary>

#### `GET` `/cliente`

Essa é a rota que será chamada para listar todos os clientes cadastrados.

<summary><b>Detalhar Cliente</b></summary>

#### `GET` `/cliente/:id`

Essa é a rota que será chamada para obter um dos clientes cadastrados.

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota.

    <summary><b>Excluir Produto por ID</b></summary>

<summary><b>Excluir Cliente</b></summary>

#### `DELETE` `/cliente/:id`

Essa é a rota que será chamada para excluir um dos clientes cadastrados.  

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota.