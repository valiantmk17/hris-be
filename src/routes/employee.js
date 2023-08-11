const authJwt = require('../middleware/authJwt')
const express = require('express');
const employeeController = require('../controller/employee.js')
const router = express.Router();



router.get("/",[authJwt.verifyToken], employeeController.getAllEmployee)

router.patch("/:id",[authJwt.verifyToken], employeeController.updateEmployee)

router.post("/",[authJwt.verifyToken], employeeController.createNewEmployee)

router.delete("/:id",[authJwt.verifyToken], employeeController.deleteEmployee)

module.exports = router;