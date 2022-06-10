const router = require("express").Router();

const {
  getTeachers,
  addTeacher,
  getOneTeacher,
  deleteTeacher,
  updateTeacher,
} = require("../controller/teacher");

router.route("/").get(getTeachers);

router.route("/add").post(addTeacher);

router
  .route("/:id")
  .get(getOneTeacher)
  .delete(deleteTeacher)
  .patch(updateTeacher);

module.exports = router;
