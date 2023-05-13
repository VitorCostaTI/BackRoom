const express = require('express');
const router = express.Router();

const controller = require('../../Controller/AuditoriaController');

router.get('/', controller.get);

router.get('/:id', controller.getID);

router.post('/', controller.post);

module.exports = router;