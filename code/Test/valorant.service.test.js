const assert = require("assert");
const sinon = require("sinon");
const axios = require("axios");
const fakeApiResponse = require ("./mocks/mockemon")

const Personaje = require("../models/personajeValorant");
const { importValorantAgents, findAll } = require("../Valorant/valorant.services");

describe("Valorant Service Tests", () => {
    
    beforeEach(() => {
        sinon.stub(axios, "get");
        sinon.stub(Personaje, "destroy");
        sinon.stub(Personaje, "bulkCreate");
        sinon.stub(Personaje, "findAll");
    });

    afterEach(() => {
        sinon.restore();
    });

    it("Debe importar agentes y guardarlos en la BD", async () => {
        

        axios.get.resolves(fakeApiResponse.fakeApiResponse);
        Personaje.destroy.resolves();
        Personaje.bulkCreate.resolves();

        const result = await importValorantAgents();

        assert.ok(Array.isArray(result));
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].nombre, "Jett");
        assert.strictEqual(result[0].Ability1, "Dash");
        assert.strictEqual(result[0].Ability2, "Smoke");

        assert.ok(axios.get.calledOnce, "axios.get debe ser llamado");
        assert.ok(Personaje.bulkCreate.calledOnce, "bulkCreate debe ser llamado");
    });

    it("Debe obtener todos los personajes", async () => {
        const fakeData = [{ nombre: "Jett" }];
        Personaje.findAll.resolves(fakeData);

        const result = await findAll();

        assert.ok(Array.isArray(result));
        assert.strictEqual(result[0].nombre, "Jett");
        assert.ok(Personaje.findAll.calledOnce);
    });
});