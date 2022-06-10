const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
      trim: true,
      maxLength: [40, "Character Limit Exceeded"],
    },
    schoolName: {
      type: String,
      required: [true, "must provide school name"],
      trim: true,
      maxLength: [40, "Character Limit Exceeded"],
    },
    studentID: {
      type: String,
      required: [true, "Must have an ID"],
      trim: true,
      index: true,
      unique: true,
    },
    grade: {},
    classroomID: {},

    gender: {},
    interventionYear: {},
    teacherList: {},
    subjectsBeingTaught: {},
    isReachable: {},
    deviceAccess: {},
    potentialDropOut: {},
    vaccinationStatus: {},
    countPTM: {},
    parentInvestment: {},
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
