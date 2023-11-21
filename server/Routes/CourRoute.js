const express = require("express");
const courCtrl = require("../Controller/courController");
const router = express.Router();

router.get("/select/:id_filiere", courCtrl.select);

module.exports = router;
