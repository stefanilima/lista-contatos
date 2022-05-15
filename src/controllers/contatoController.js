import contatos from "../models/Contato.js";

class ContatoController {

    static getContatos = (req, res) => {
        contatos.find()
            .exec((erro, contatos) => {
                res.status(200).json(contatos);
            });
    }

    static getContatosById = (req, res) => {
        const id = req.params.id;

        contatos.findById(id)
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

    static createContatos = (req, res) => {
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