const express = require('express');
const router = express.Router();
const multer = require("multer")
const { uploadCSV } = require('./csvToJson.controller');

//config temporal
const upload = multer({ dest: "uploads/" })

router.post('/', upload.single("file"), uploadCSV);

module.exports = router;