import express from "express";
import contatos from "../routes/contatoRoute.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Hello Word!')
    });

    app.use(
        express.json(),
        contatos
    );
}

export default routes;