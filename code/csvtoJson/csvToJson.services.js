const csv = require("csvtojson");
const fs = require("fs");

const convertCSVFile = async (filePath) => {
  try {
    const jsonArray = await csv().fromFile(filePath);

    fs.unlinkSync(filePath);

    return jsonArray;
  } catch (error) {
    throw new Error("Error al convertir CSV");
  }
};

module.exports = { convertCSVFile };