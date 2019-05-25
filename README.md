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

Para a persistência dos dados, será necessário criar o banco de dados. Neste projeto já foram instalados as dependências para os bancos ***Postgres*** e ***MySql***, logo em seguida deverá ser executado o migration, para criação das tabelas.

```js
adonis migration:run
```

### Servindo a Aplicação

Uma vez completado o processo de instalação e configuração, a aplicação pode ser servida executando o comando abaixo:

```js
adonis serve --dev
```

Em breve documentação da API
