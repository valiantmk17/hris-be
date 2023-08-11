const authJwt = require('../middleware/authJwt')
const express = require('express');
const hdController = require('../controller/hd.js')
const router = express.Router();

router.get("/",[authJwt.verifyToken], hdController.getAllhd)
router.patch("/:id", [authJwt.verifyToken], hdController.updatehd)
router.post("/", [authJwt.verifyToken], hdController.createNewhd)
router.delete("/:id", [authJwt.verifyToken], hdController.deletehd)

module.exports = router;