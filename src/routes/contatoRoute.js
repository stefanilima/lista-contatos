import express from "express";
import ContatoController from "../controllers/contatoController.js";

const router = express.Router();

router
    .get('/contatos', ContatoController.getContatos)
    .get('/contatos/busca', ContatoController.getContatosByUsuario)
    .get('/contatos/:id', ContatoController.getContatosById)
    .post('/contatos', ContatoController.createContatos)
    .put('/contatos/:id', ContatoController.updateContatos)
    .delete('/contatos/:id', ContatoController.deleteContatos)

export default router;