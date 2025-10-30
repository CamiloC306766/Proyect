const clientServices = require('./client.services');

// Crear un nuevo cliente
const createCliente = async (req, res) => {
  try {
    const newCliente = await clientServices.createCliente(req.body);
    res.status(201).json(newCliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los clientes
const getAllClientes = async (req, res) => {
  try {
    const clientes = await clientServices.getAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un cliente por ID
const getClienteById = async (req, res) => {
  try {
    const cliente = await clientServices.getClienteById(req.params.id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un cliente
const updateCliente = async (req, res) => {
  try {
    const updatedCliente = await clientServices.updateCliente(req.params.id, req.body);
    if (updatedCliente) {
      res.status(200).json(updatedCliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un cliente
const deleteCliente = async (req, res) => {
  try {
    const deleted = await clientServices.deleteCliente(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Cliente eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  deleteCliente
};