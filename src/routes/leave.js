const authJwt = require('../middleware/authJwt')
const express = require('express');
const leaveController = require('../controller/leave.js')
const router = express.Router();

router.get("/",[authJwt.verifyToken], leaveController.getAllLeave)

router.patch("/:id",[authJwt.verifyToken], leaveController.updateLeave)

router.post("/",[authJwt.verifyToken], leaveController.createNewLeave)

router.delete("/:id",[authJwt.verifyToken], leaveController.deleteLeave)

module.exports = router;