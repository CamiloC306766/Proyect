const clientModel = require('../models/Cliente.model');

// Crear un nuevo cliente
const createCliente = async (clienteData) => {
    const newCliente = await clientModel.create(clienteData);
    return newCliente;
};

// Obtener todos los clientes
const getAllClientes = async () => {
    const clientes = await clientModel.findAll(); //  método Sequelize
    return clientes;
};

// Obtener un cliente por ID
const getClienteById = async (id) => {
    const cliente = await clientModel.findByPk(id);
    return cliente;
};

// Actualizar un cliente
const updateCliente = async (id, clienteData) => {
    const cliente = await clientModel.findByPk(id);
    if (cliente) {
        await cliente.update(clienteData);
        return cliente;
    }
    return null;
};

// Eliminar un cliente
const deleteCliente = async (id) => {
    const cliente = await clientModel.findByPk(id);
    if (cliente) {
        await cliente.destroy();
        return true;
    }
    return false;
};

module.exports = {
    createCliente,
    getAllClientes,
    getClienteById,
    updateCliente,
    deleteCliente
};