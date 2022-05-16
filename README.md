# LISTA CONTATOS
Este projeto é uma lista de contatos com NodeJS utilizando MongoDb.

# Tecnologias utilizadas
- NodeJS
- NodeMon
- Express
- Mongoose

# Requisitos
- [NodeJS](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/atlas/database)

# Como executar este projeto
- Clone o repositório
```
git clone git@github.com:stefanilima/lista-contatos.git
```

- Crie um arquivo .env na raiz do projeto com os dados do banco de dados MongoDB
```
DB_HOST=EXEMPLO
```

- Instale as dependências
```
npm install
```

- Suba a aplicação:
```
npm run dev
```

- Acesse pela URL:
```
http://localhost:3000/
```

### Documentação API

Esta API foi documentada utilizando o swagger.

Para atualizar a documentação execute o comando abaixo e acesse através do link: http://localhost:3000/api-doc

```
npm run swagger-autogen
```

***

### Licença

[MIT](https://github.com/stefanilima/lista-contatos/blob/main/LICENSE)

#### Criado por [Stefani Lima](https://www.linkedin.com/in/stefanilima/)