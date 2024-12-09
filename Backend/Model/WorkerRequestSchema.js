const mongoose = require("mongoose")

const WorkerRequest = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true
    }
})

WorkerRequest.set('toJSON', {
    transform: function (doc, ret) {
        ret.startDate = new Date(ret.startDate).toLocaleDateString('en-GB'); // Format as DD-MM-YYYY
        ret.endDate = new Date(ret.endDate).toLocaleDateString('en-GB');     // Format as DD-MM-YYYY
        return ret;
    }
});
const RequestSchema = mongoose.model("WorkerRequestSchema", WorkerRequest)
module.exports = RequestSchema