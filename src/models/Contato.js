import mongoose from "mongoose";

const contatoSchema = new mongoose.Schema(
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
        telefone: {
            type: String
        },
        endereco: {
            type: String
        },
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usuarios',
            required: true
        },
        dataNascimento: {
            type: Date
        }
    }
)

const contatos = mongoose.model('contatos', contatoSchema);

export default contatos;