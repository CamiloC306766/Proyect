const { convertCSVFile } = require("./csvToJson.services");

const uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Archivo CSV requerido" });
    }

    const data = await convertCSVFile(req.file.path);

    res.json({
      success: true,
      message: "CSV procesado correctamente",
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { uploadCSV };