//routes
const express = require('express');
const router = express.Router();
const mailerController = require('./nodeMailer.controller');

// Rutas para el envio de correos
router.post('/send-Email', mailerController.sendTestEmail);

module.exports = router;