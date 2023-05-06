const mongoose = require("mongoose");
const Student = require("./models/students");

// Add Student
const addStudent = (student) => {
    Student.create(student).then((student) => {
        console.info("New Student Added");
        mongoose.connection.close();
    });
};

// Find Student
const findStudent = (name) => {
    // Make case insensitive
    const search = new RegExp(name, "i");
    Student.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
        (student) => {
            console.info(student);
            console.info(`${student.length} matches`);
            mongoose.connection.close();
        }
    );
};

// Update Student
const updateStudent = (_id, student) => {
    Student.update({ _id }, student).then((student) => {
        console.info("Student Updated");
        mongoose.connection.close();
    });
};

// Remove Student
const removeStudent = (_id) => {
    Student.remove({ _id }).then((student) => {
        console.info("Student Removed");
        mongoose.connection.close();
    });
};

// List Students
const listStudents = () => {
    Student.find().then((students) => {
        console.info(students);
        console.info(`${students.length} students`);
        mongoose.connection.close();
    });
};

// Export All Methods
module.exports = {
    addStudent,
    findStudent,
    updateStudent,
    removeStudent,
    listStudents,
};
