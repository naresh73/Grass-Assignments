const StudentModel = require('../models/students/students.model');

async function studentGet(request, result) {
    const collectionOfStudent = await StudentModel.find({});
    try {
        result.send(collectionOfStudent);
    } catch (error) {
        result.send({message: error.message});
    }
}

async function studentPost(request, result) {
    let NewStudent = new StudentModel(request.body);
    try {
        await NewStudent.save();
        result.send({
            message: "student details added successfully",
            student_description: NewStudent
        })
    } catch (error) {
        result.send({message: error.message});
    }
}

async function studentPut(request, result) {
    try {
        await StudentModel.findByIdAndUpdate(request.params.id, request.body);
        result.send("student data updated successfully->>>>>>>>>>>>>>>");
    } catch (error) {
        result.send({message: error.message});
    }
}

async function studentDelete(request, result) {
    try {
        await StudentModel.findByIdAndDelete(request.params.id);
        result.send("student data deleted successfully->>>>>>>>>>>>>>>");
    } catch (error) {
        result.send({message: error.message});
    }
}

module.exports = { studentGet, studentPost, studentPut, studentDelete } ;