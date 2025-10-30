const axios = require ("axios")

const Personaje = require ("../models/personajeValorant")

const importValorantAgents = async() => {

    const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
    const response = await axios.get(url)
    const agentes = response.data.data

    // Limpiamos la base de datos antes de importar (opcional)
    await Personaje.destroy({ where: {} });

    //transformacion y almacenamiento de los datos
    const personajes = agentes.map(agent => ({
        nombre: agent.displayName,
        Ability1: agent.abilities[0]?.displayName || "N/A",
        Ability2: agent.abilities[1]?.displayName || "N/A",
        Description: agent.description || "Sin descripción"

    }));

    //guardar 
    await Personaje.bulkCreate(personajes);

    return personajes;
}

const findAll = async () => {
    return await Personaje.findAll();
}

module.exports = {
    importValorantAgents,
    findAll,
}