const authJwt = require('../middleware/authJwt')
const express = require('express');
const userController = require('../controller/users.js')
const router = express.Router();

router.get("/",[authJwt.verifyToken], userController.getAllUsers)
router.patch("/:id", userController.updateUser)
router.post("/",  userController.createNewUser)
router.delete("/:id", userController.deleteUser)

module.exports = router;