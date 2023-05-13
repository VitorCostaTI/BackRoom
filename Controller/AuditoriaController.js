const express = require('express');
const app = express();

exports.get = (req, res, next) => {
    res.status(200).json({message: 'Get registros auditoria!'});
};

exports.getID = (req, res, next) => {
    const {id} = req.params;
    res.status(200).json({message: 'GetID registros auditoria!'});
};

exports.post = (req, res, next) => {
    res.status(201).json({message: 'Auditoria criada com sucesso'});
};