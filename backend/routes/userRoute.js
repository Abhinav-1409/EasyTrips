const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  handleGetProfile,
  handleUpdateProfile,
  handleAddDestination,
  handleGetDestinations,
  handleGetDestinationById
} = require("../controllers/authController");
const verifyUser = require("../middlewares/auth");
const {
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.route("/profile").get(handleGetProfile).post(handleUpdateProfile);
router.post("/add-destination", handleAddDestination);
router.get("/destinations", handleGetDestinations);
router.get("/destination/:id", handleGetDestinationById); 

module.exports = router;
