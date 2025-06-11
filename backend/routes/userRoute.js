const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer(); 
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
router.post("/add-destination",upload.array("images", 10), handleAddDestination);
router.get("/destinations", handleGetDestinations);
router.get("/destination/:id", handleGetDestinationById); 

const Package = require("../models/destination");

// DELETE /api/packages/:id
router.delete("/package/:id", async (req, res) => {
  try {
    const deleted = await Package.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.json({ message: "Package deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
