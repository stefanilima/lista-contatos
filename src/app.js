import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";

db.on('erro', console.log.bind(console, 'Erro ao conectar com o banco de dados'));
db.once('open', () => {
    console.log('Conexão do banco de dados concluida com sucesso');
});

const app = express();
const swaggerFile = JSON.parse(await readFile("./swagger/swagger.json"));

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

routes(app);

export default app;