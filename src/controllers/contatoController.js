import contatos from "../models/Contato.js";

class ContatoController {

    static getContatos = (req, res) => {
        // #swagger.tags = ['Contatos']

        contatos.find()
            .populate('usuario')
            .exec((erro, contatos) => {
                res.status(200).json(contatos);
            });
    }

    static getContatosById = (req, res) => {
        // #swagger.tags = ['Contatos']

        const id = req.params.id;

        contatos.findById(id)
            .populate('usuario', 'nome')
            .exec((err, contatos) => {
            if(err) {
                res.status(400).send(
                    {
                        message: `${err.message} - Id de usuario não encontrado`
                    })
            } else {
                res.status(200).send(contatos);
            }
        })
    }

    static getContatosByUsuario = (req, res) => {
        // #swagger.tags = ['Contatos']

        const usuario = req.query.usuario

        contatos.find({'usuario': usuario})
            .populate('usuario', 'nome')
            .exec((err, contatos) => {
                res.status(200).send(contatos);
            });
    }

    static createContatos = (req, res) => {
        // #swagger.tags = ['Contatos']

        let contato = new contatos(req.body);
        contato.save((err) => {
            if(err) {
                res.status(500).send({
                    message: `${err.message}: Falha ao cadastrar contato`
                });
            } else {
                res.status(201).send(contato.toJSON());
            }
        });
    }

    static updateContatos = (req, res) => {
        // #swagger.tags = ['Contatos']

        const id = req.params.id;

        contatos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send(
                    {
                        message: 'Contato atualizado com sucesso'
                    })
            } else {
                res.status(500).send(
                    {
                        message: err.message
                    });
            }
        });
    }

    static deleteContatos = (req, res) => {
        // #swagger.tags = ['Contatos']

        const id = req.params.id;

        contatos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send(
                    {
                        message: 'Contato excluido com sucesso'
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

export default ContatoController;