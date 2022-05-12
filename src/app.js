import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on('erro', console.log.bind(console, 'Erro ao conectar com o banco de dados'));
db.once('open', () => {
    console.log('Conexão do banco de dados concluida com sucesso');
});

const app = express();

app.use(express.json());

routes(app);

export default app;