const serviceClient = require('../Client/client.services')
const controllerCliente = require('../Client/client.controller')
const modelc = require('../models/Cliente.model')
const sinon = require('sinon')
const assert = require('assert')
const mockemon = require("./mocks/mockemon")
const request = require("supertest")
const app = require("../index")
process.env.NODE_ENV = "test";

const clientUpdt = {
   id: 1,
   nombre: "Pablo"
}

const updateMock = {
   id: 1,
   nombre: "Lauren",
   correo: "Lren@gmail.com",
}

const badResponseMock = {
   id: 1,
   nombre: "Lauren",
   correo: "Lren@gmail.com",
   save: sinon.stub().resolves(updateMock),
}

describe("Pruebas CRUD Cliente", () => {
   beforeEach(() => {
      sinon.restore()
      //allClients = sinon.stub(modelc, 'findAll')
   })
   afterEach(() => {
      sinon.restore();
   })

   it("Crear un cliente en la base de datos", async () => {
      sinon.stub(modelc, 'findOne').resolves(null);
      sinon.stub(modelc, 'create').resolves(mockemon.clientResponse)
      const result = await serviceClient.createCliente(mockemon.clientMock)
      assert.deepEqual(result, mockemon.clientResponse)
   })
   it('Crear un cliente mas', async () => {
      const client = { id: 2, nombre: "Camilo", correo: "camilo@gmail.com" }
      sinon.stub(modelc, 'findOne').resolves(null)
      sinon.stub(modelc, 'create').resolves(client)
      const result = await serviceClient.createCliente(client)
      assert.deepEqual(result, client)
   })
   it("Actualiza un cliente", async () => {
      const fakeClient = {
         id: 1,
         nombre: "Lauren",
         update: sinon.stub().callsFake(async (data) => {
            Object.assign(fakeClient, data); // <-- actualiza el fake
            return fakeClient; // <-- retorna el cliente actualizado
         })
      };

      sinon.stub(modelc, "findByPk").resolves(fakeClient);

      const result = await serviceClient.updateCliente(1, { nombre: "Pablo" });

      delete result.update
      assert.deepEqual(result, { id: 1, nombre: "Pablo" });
   });


   // it("Actualiza un cliente", async () => {
   //    sinon.stub(modelc, 'findOne').resolves(badResponseMock)
   //    const result = await serviceClient.updateCliente(clientUpdt)
   //    assert.deepEqual(result, mockemon.updateMock)
   // })
   it("Encontrar todos los clientes", async () => {
      // allClients = sinon.stub(modelc, 'findAll').resolves([])
      // const result = await request(app).get('/api/clients/')
      // assert.deepEqual(result.body.data, [])

      sinon.stub(modelc, "findAll").resolves([])

      const result = await request(app).get('/api/clients/')
      assert.deepEqual(result.body, [])
   })
   it("Eliminar un cliente", async () => {
      sinon.stub(modelc, "findByPk").resolves({
         destroy: sinon.stub().resolves()
      });
      // sinon.stub(modelc, 'destroy').resolves(1)
      const result = await serviceClient.deleteCliente(1)
      assert.deepEqual(result, true)

   })

   describe("Catch error", () => {
      it("Crear una falla ", async () => {
         const req = { body: null }; // esto causa error
         const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
         };

         await controllerCliente.createCliente(req, res)

         sinon.assert.calledWith(res.status(500).json)

      })
   })
})
