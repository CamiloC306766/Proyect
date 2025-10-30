// routes.js
const express = require('express');
const router = express.Router();
const clienteController = require('./client.controller');

// Rutas para el modelo Cliente
router.post('/', clienteController.createCliente);
router.get('/', clienteController.getAllClientes);
router.get('/:id', clienteController.getClienteById);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);
module.exports = router;