const express = require("express")
const router = express.Router();
const valorantController = require('./valorant.controller');

// Rutas para el modelo
router.post('/importar', valorantController.postPjs);
router.get('/', valorantController.getAllPjs);

module.exports = router;