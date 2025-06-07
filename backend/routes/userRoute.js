const express = require("express");
const router = express.Router();
const { signup, signin, logout, handleGetProfile, handleUpdateProfile } = require("../controllers/authController");
const verifyUser = require("../middlewares/auth");
const {forgotPassword, resetPassword} = require("../controllers/authController");   

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.route("/profile").get(handleGetProfile).post(handleUpdateProfile);


module.exports = router;
