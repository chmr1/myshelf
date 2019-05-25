[![Heroku App Status](http://heroku-shields.herokuapp.com/myshelf-chmr1)](https://myshelf-chmr1.herokuapp.com)

# My Shelf API Application

API criada para a disciplina de ***Desenvolvimento de App's Híbridos I***, na especialização de ***Dispositivos Móveis***. Utilizada como ferramenta base para o gerenciamento de livros pessoais, onde o usuário após autenticado, poderá organizar seus livros vinculando-os em sua estante, futuramente serão adicionadas novas funcionalidades.

### Configuração

AdonisJs

Através do Adonisjs CLI serão executados os comandos para instalação das dependências do AdonisJs, para instalá-lo, execute o comando:

```js
npm i -g @adonisjs/cli
```

### Projeto

Clone o projeto para uma pasta local, acesse a pasta e execute o comando:

```js
npm install
```

### Banco de Dados

Para a persistência dos dados, será necessário criar o banco de dados e editar o arquivo de configuração. Neste projeto já foram instalados as dependências para os bancos ***Postgres*** e ***MySql***.

Criando o arquivo .env, para informar os dados de acesso ao banco:
```js
adonis key:generate
```

DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=dbmyshelf
HASH_DRIVER=bcrypt

Executando o migration para a criação das tabelas:
```js
adonis migration:run
```

### Servindo a Aplicação

Uma vez completado o processo de instalação e configuração, a aplicação pode ser servida executando o comando abaixo:

```js
adonis serve --dev
```

Em breve documentação da API
