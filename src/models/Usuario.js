import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String, 
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date
        },
        dataCriacao: {
            type: Date,
            default: Date.now()
        }
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;