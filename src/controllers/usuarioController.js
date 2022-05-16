import usuarios from "../models/Usuario.js";

class UsuarioController {

    static getUsuarios = (req, res) => {
        // #swagger.tags = ['Usuários']

        usuarios.find()
            .exec((erro, usuarios) => {
                res.status(200).json(usuarios);
            });
    }

    static getUsuariosById = (req, res) => {
        // #swagger.tags = ['Usuários']

        const id = req.params.id;

        usuarios.findById(id)
            .exec((err, usuarios) => {
            if(err) {
                res.status(400).send(
                    {
                        message: `${err.message} - Id de usuario não encontrado`
                    })
            } else {
                res.status(200).send(usuarios);
            }
        })
    }

    static createUsuarios = (req, res) => {
        // #swagger.tags = ['Usuários']

        let usuario = new usuarios(req.body);
        usuario.save((err) => {
            if(err) {
                res.status(500).send({
                    message: `${err.message}: Falha ao cadastrar usuario`
                });
            } else {
                res.status(201).send(usuario.toJSON());
            }
        });
    }

    static updateUsuarios = (req, res) => {
        // #swagger.tags = ['Usuários']

        const id = req.params.id;

        usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send(
                    {
                        message: 'Usuario atualizado com sucesso'
                    })
            } else {
                res.status(500).send(
                    {
                        message: err.message
                    });
            }
        });
    }

    static deleteUsuarios = (req, res) => {
        // #swagger.tags = ['Usuários']

        const id = req.params.id;

        usuarios.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send(
                    {
                        message: 'Usuario excluido com sucesso'
                    })
            } else {
                res.status(500).send(
                    {
                        message: err.message
                    })
            }
        })
    }
}

export default UsuarioController;