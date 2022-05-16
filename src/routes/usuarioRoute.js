import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router
    .get('/usuarios', UsuarioController.getUsuarios)
    .get('/usuarios/:id', UsuarioController.getUsuariosById)
    .post('/usuarios', UsuarioController.createUsuarios)
    .put('/usuarios/:id', UsuarioController.updateUsuarios)
    .delete('/usuarios/:id', UsuarioController.deleteUsuarios)

export default router;