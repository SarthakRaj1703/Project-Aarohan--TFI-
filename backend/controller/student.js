let Student = require("../models/Student");

const getStudents = (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
};

const postStudent = (req, res) => {
  const studentID = req.body.studentID;
  const name = req.body.name;
  const schoolName = req.body.schoolName;

  const newStudent = new Student({ name, schoolName, studentID });

  newStudent
    .save()
    .then(() => res.json("Student added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getOneStudent = (req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteStudent = (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student info deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updateStudent = (req, res) => {
  Student.findByIdAndUpdate(req.params.id)
    .then((student) => {
      student.studentID = req.body.studentID;
      student.name = req.body.name;
      student.schoolName = req.body.schoolName;

      student
        .save()
        .then(() => res.json("Student Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  getStudents,
  postStudent,
  getOneStudent,
  deleteStudent,
  updateStudent,
};
