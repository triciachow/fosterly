const express = require("express");
const accountController = require("../controllers/accountController");
const router = express.Router();

router.post("/signup", accountController.signup);
router.post("/login", accountController.login);
router.put("/onboarding/:id", accountController.onboarding);
router.get("/matches/:id", accountController.matches);
router.get("/animal-profile/:id", accountController.profile);

module.exports = router;
