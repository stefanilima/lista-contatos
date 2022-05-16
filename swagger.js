import swaggerAutogen from "swagger-autogen";

const outputFile = './doc/swagger.json';
const endpointsFiles = [
  './src/routes/usuarioRoute.js', 
  './src/routes/contatoRoute.js'
];

const doc = {
    info: {
      version: '1.0',
      title: 'Lista Contatos',
      description: 'Uma API que contém uma lista de contatos',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

swaggerAutogen()(outputFile, endpointsFiles, doc);