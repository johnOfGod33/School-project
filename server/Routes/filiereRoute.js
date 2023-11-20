const express = require("express");
const filiereCtrl = require("../Controller/filiereController");
const router = express.Router();

router.get("/select", filiereCtrl.select);

module.exports = router;
