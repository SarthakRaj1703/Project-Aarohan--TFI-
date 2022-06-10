const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [40, "Character Limit Exceeded"],
  },
  subjectsTaken: {
    type: [String],
    required: [true, "Must Teach atleast one subject"],
  },
  studentList: {
    type: [String],
    required: [true, "Must Teach atleast one student"],
  },
  teacherID: {
    type: String,
    required: [true, "Must have an ID"],
    trim: true,
    index: true,
    unique: true,
  },
  photo: {},
});

// teacherSchema.path("id").validate(async (id) => {
//   const idCount = await mongoose.models.Teacher.countDocuments({ id });
//   return !idCount;
// }, "ID must be unique");

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
