const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    id : {
        type: Number,
        required: true,
        validate(id) {
            if(id <= 0 ) throw console.error("entered incorrect ID");
        }
    },
    Name : {
        type: String,
        required: true
    },
    Email : {
        type: String
    },
    City : {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        default: 0
    }
})

const StudentModel = mongoose.model("StudentModel", StudentSchema);

module.exports = StudentModel;