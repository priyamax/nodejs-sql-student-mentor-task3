var express = require("express");
var router = express.Router();
var studentModule = require('../modules/Student_module');

router.post("/create-student", studentModule.createStudent);
router.post("/create-mentor", studentModule.createMentor);
router.post("/Assign-student", studentModule.assignStudent);
router.post("/change-mentor", studentModule.changeMentor);
router.get("/show",studentModule.list);

module.exports = router;