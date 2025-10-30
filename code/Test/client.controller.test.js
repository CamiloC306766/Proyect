const express = require ("express")
const request = require('supertest')

const routes = require("../Client/routes")

describe("/api/clients", () => {

   let app
   beforeEach(() => {
    app = express()
    app.use(express.json())
    app.use()
   })

})