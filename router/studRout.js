const express = require("express");
const router = express.Router();
const c = require("../controller/studentController");

router.post("/", c.createStudent);
router.get("/", c.getAllStudents);
router.get("/:id", c.getStudent);
router.put("/:id", c.updateStudent);
router.delete("/:id", c.deleteStudent);

module.exports = router;
