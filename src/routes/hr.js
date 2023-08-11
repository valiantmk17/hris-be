const authJwt = require('../middleware/authJwt')
const express = require('express');
const hrController = require('../controller/hr.js')
const router = express.Router();



router.get("/",[authJwt.verifyToken], hrController.getAllhr)

router.patch("/:id",[authJwt.verifyToken], hrController.updatehr)

router.post("/",[authJwt.verifyToken], hrController.createNewhr)

router.delete("/:id",[authJwt.verifyToken], hrController.deletehr)

module.exports = router;