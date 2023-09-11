const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.post("/add-new", adminController.addNew);
router.get("/fetch-all", adminController.fetchAll);

module.exports = router;
