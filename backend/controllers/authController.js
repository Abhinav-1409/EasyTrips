const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Profile = require("../models/profile");

const dotenv = require("dotenv");
// const { handleCreateProfile } = require("./profileController");
dotenv.config();

const sendEmail = require("../utils/sendEmail");

exports.signup = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all fields or kindly try different username",
      });
    }
    if (!email.includes("@")) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: fullName,
      email: email,
      password: hashedPassword,
    });
    // Create a profile for the user
    const userProfile = await  Profile.create({
      user: user._id,
    });
    //  handleCreateProfile(user._id);
    // console.log(user);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide either email or username, and a password.",
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found, Kindly signup first",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const payload = user.toObject();
    // console.log(payload);
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const userObj = user.toObject();
    userObj.token = token;
    userObj.password = undefined;
    // console.log("User logged in successfully", userObj);

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    };

    res.cookie("token", token, options).status(200).json({
      success: true,
      user: userObj,
      message: "User Logged in successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = req.cookies.token;

    let username = "Unknown";
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      username = decoded.userName || decoded.username || "Unknown";
    }

    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: `${username} logged out successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please provide an email" });
    }
    const user = await User.findOne({ email }).select(
      "+passwordResetToken +passwordResetExpires"
    );
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    user.passwordResetToken = token;
    user.passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();
    // const resetUrl = `${req.protocol}://${req.get("host")}/reset-password/${token}`;
    const resetUrl = `${req.headers.origin}/reset-password/${token}`;
    // Send email with resetUrl
    await sendEmail(
      email,
      "Reset Your Password",
      `<p>You requested to reset your password. Click the link below:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>This link will expire in 1 hour.</p>`
    );

    res.status(200).json({
      success: true,
      message: `Password reset link sent to ${email}`,
      resetUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token || !password) {
      return res
        .status(400)
        .json({ message: "Please provide a token and a new password" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded.id,
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    user.password = await bcrypt.hash(password, 10);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.handleGetProfile = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(token);
  // console.log(user);
  try {
    const userProfile = await Profile.findOne({user: user._id});
    await userProfile.populate("user");
    await userProfile.save();
    console.log("userProfile", userProfile);
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};