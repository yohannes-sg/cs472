const Student = require("../model/student");

let controller = {
    getStudents: function (req, res, next) {
        res.status(200).json(Student.getAll());
    },
    getStudentById: function (req, res, next) {
        let id = parseInt(req.params.id);
        let student = Student.getById(id);
        if (student) {
            res.status(200).json(student);
        }
        else {
            res.status(404).json({ message: "student not found." });
        }
    },
    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(parseInt(id), name, program);
            newStudent.create();
            res.status(201).json(newStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },
    deleteStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        console.log(id, typeof id);
        let deletedStudent = Student.removebyId(id);
        if (!deletedStudent) {
            res.status(404).json({ message: "student not found" });
        }
        else {
            res.status(200).json(deletedStudent);
        }
    },
    updateStudent: function (req, res, next) { 
        let { id, name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(parseInt(id), name, program);
            newStudent.update();
            res.status(201).json(newStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },
    filterByProgram: function (req, res, next) {
        let program = req.params.program;
        let students = Student.filterByProgram(program);
        if (students) {
            res.status(200).json(students);
        }
        else {
            res.status(404).json({ message: "student not found." });
        }
     },
};

module.exports = controller;