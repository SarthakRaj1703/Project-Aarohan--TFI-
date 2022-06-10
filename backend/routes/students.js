const router = require("express").Router();
const {
  getStudents,
  postStudent,
  getOneStudent,
  deleteStudent,
  updateStudent,
} = require("../controller/student");

router.route("/").get(getStudents);

router.route("/add").post(postStudent);

router
  .route("/:id")
  .get(getOneStudent)
  .delete(deleteStudent)
  .patch(updateStudent);

module.exports = router;
