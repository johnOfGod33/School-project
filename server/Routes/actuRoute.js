const express = require("express");
const actuCtrl = require("../Controller/actuController");
const router = express.Router();

router.get("/select", actuCtrl.select);
router.get("/actuDetail/:id_actu", actuCtrl.selectdetails);
module.exports = router;
