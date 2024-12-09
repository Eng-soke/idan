const mongoose = require("mongoose")

const WorkerSchema = mongoose.Schema({
    name : {
        type: String,
        required: false //false means optional
    },
    id : {
        type: String,
        required: false //false means optional
    },
    title : {
        type: String,
        required: false //false means optional
    },
    email : {
        type: String,
        required: true
    },
    telephone : {
        type: Number,
        required: true
    },
    password : {
        type: String,
        required: true
    },
})
const Worker = mongoose.model("Worker", WorkerSchema)
module.exports = Worker
