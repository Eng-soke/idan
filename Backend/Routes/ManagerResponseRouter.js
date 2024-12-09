const express = require("express")
const Response = express.Router()
const ManagerResponseSchema = require("../Model/managerResponseSchema")

Response.post("/manager/response/:_id", async (req, res) => {
    const newResponse = ManagerResponseSchema(req.body)
    const saveResponse = await newResponse.save()
    if (saveResponse){
        res.send("Response has been sent successfully")
    }
})

module.exports = Response