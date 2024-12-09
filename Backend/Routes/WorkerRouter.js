const express = require("express")
const Worker = express.Router();
const WorkerSchema = require("../Model/WorkerSchema")


Worker.post("/worker/create", async (req, res) => {
    const newWorker = WorkerSchema(req.body)
    const saveWorker = await newWorker.save()
    if (saveWorker){
        res.send("Worker has Added successfully")
    }
});


Worker.get("/worker/read", async (req, res) => {
    const Allworkers = await WorkerSchema.find()
    res.send(Allworkers)
})

//Get Single Workers AutoData 
Worker.get("/worker/AutoData/:id", async (req, res) => {
    // const WorkerID = req.user.id;
    const SingleWorker = await WorkerSchema.findOne({_id: req.params.id}).select("-password -email -telephone ")
    if (SingleWorker){
        res.send(SingleWorker)
    }

})

Worker.put("/worker/update/:id", async (req, res) => {
    const updateWorker = await WorkerSchema.updateOne({_id: req.params.id},
        {
            $set:{
                name: req.body.name,
                id: req.body.id,
                title: req.body.title,
                email: req.body.email,
                telephone: req.body.telephone,
                password: req.body.password
            }
        }
    )
    if (updateWorker){
        res.send("Worker Has been updated successfully")
    }
})

Worker.delete("/worker/delete/:id", async (req, res) => {
    const deleteWorker = await WorkerSchema.deleteOne({_id: req.params.id})
    if (deleteWorker){
        res.send("Worker has been deleted successfully ")
    }
})

Worker.post("/worker/login", async (req, res) => {
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

Worker.get("/SingleWorker/:id", async (req, res) => {
    const GetSingleWorker = await WorkerSchema.findOne({_id: req.params.id})
    if (GetSingleWorker){
        res.send(GetSingleWorker)
    }
})


// Worker.get("/getData/singleWorker/:id", async (req, res) => {
//     const {id} = req.params.id;
//     const singleRequsts= 

// })
module.exports = Worker