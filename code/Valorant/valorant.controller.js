const valorantServices = require('./valorant.services')

const postPjs = async (req, res) => {
  try {
    const newPjs = await valorantServices.importValorantAgents()
    res.status(201).json({
      message: "Importe exitoso",
      cantidad: newPjs.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPjs = async (req, res) => {
  try {
    const pjs = await valorantServices.findAll();
    res.status(200).json(pjs)
  } catch {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  postPjs,
  getAllPjs
}