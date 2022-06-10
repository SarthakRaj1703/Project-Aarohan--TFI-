let Teacher = require("../models/Teacher");

const getTeachers = (req, res) => {
  Teacher.find()
    .then((teachers) => res.json(teachers))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addTeacher = (req, res) => {
  const teacherID = req.body.teacherID;
  const name = req.body.name;
  const subjectsTaken = req.body.subjectsTaken;

  const newTeacher = new Teacher({ name, teacherID, subjectsTaken });

  newTeacher
    .save()
    .then(() => res.json("Teacher added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getOneTeacher = (req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => res.json(teacher))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteTeacher = (req, res) => {
  Teacher.findByIdAndDelete(req.params.id)
    .then(() => res.json("Teacher info deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updateTeacher = (req, res) => {
  Teacher.findByIdAndUpdate(req.params.id)
    .then((teacher) => {
      teacherID = req.body.teacherID;
      teacher.name = req.body.name;

      teacher
        .save()
        .then(() => res.json("Teacher Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  getTeachers,
  addTeacher,
  getOneTeacher,
  deleteTeacher,
  updateTeacher,
};
