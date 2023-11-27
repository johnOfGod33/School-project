const express = require("express");
const commentCtrl = require("../Controller/commentaireController");
const verifyJwt = require("../middleware/verifyJwt");
const router = express.Router();

router.post("/insert", verifyJwt, commentCtrl.insert);

module.exports = router;
