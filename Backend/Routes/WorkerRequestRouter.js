const express = require("express")
const Request = express.Router()
const WorkerRequestSchema = require("../Model/WorkerRequestSchema")


Request.post("/request/create", async (req, res) => {
    try {
        const { startDate, endDate } = req.body;

        // Ensure both startDate and endDate are provided
        if (!startDate || !endDate) {
            return res.send("Start date and end date are required.");
        }

        // Calculate duration by subtracting the two dates and converting to days
        const duration = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
        
        // Ensure the duration is non-negative
        if (duration < 0) {
            return res.send("End date must be later than start date.");
        }

        // Create a new worker request
        const newRequest = new WorkerRequestSchema({
            ...req.body,
            duration // Pass the calculated duration into the schema
        });

        const saveRequest = await newRequest.save();
        
        if (saveRequest) {
            res.send("Request has been sent successfully");
        } else {
            res.send("Failed to save the request");
        }
    } catch (error) {
        res.send("Error processing request: " + error.message);
    }
});

//API soo aqrinayo user kasta xogtiisa 

Request.post("/worker/login", async (req, res) => {
    if (req.body.id && req.body.password){
        const worker  = await WorkerSchema.findOne(req.body).select("-password -email -telephone ")
        if (worker){
            res.send({success: "Worker has been logged in successfully", worker})
        }
        // if (worker){
        //     const workerRequests = await WorkerSchema.find({id: worker.id})
        //     res.send({
        //         worker:{
        //             id:worker.id
        //         }, 
        //         requests: workerRequests
        //     })
        // }
        else {
            res.send({error: " Incorrect ID or Password", worker})
        }
    }
    else {
        res.send({empty: "Worker ID and Password are required "})
    }
})

Request.get("/request/read", async (req, res) => {
    const AllRequests = await WorkerRequestSchema.find()
    res.send(AllRequests)
})
Request.get("/request/SingleRead/:id", async (req, res) => {
    const SingleViewMore = await WorkerRequestSchema.findOne({_id: req.params.id})
    if (SingleViewMore){
        res.send(SingleViewMore)
    }
})

Request.delete("/request/delete/:id", async (req, res) => {
    const DeleteRequest = await WorkerRequestSchema.deleteOne({_id: req.params.id})
    if (DeleteRequest){
        res.send("Request has been deleted successfully")
    }
})

module.exports = Request
