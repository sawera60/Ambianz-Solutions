import { User } from "../models/user.model.js";
import generateToken from "../config/token.js";
import bcrypt from "bcrypt";

// Auth Controller for normal signup
export const signUp = async (req, res) => {
  console.log("signUp controller called with body:", req.body);
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    // 1st step -> Validation
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long",
        success: false,
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    // 2nd step -> Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in DB
    const createUser = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    // 3rd step -> Generate token and save in cookies
    const token = generateToken(createUser._id);
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // milliseconds
      httpOnly: true, // prevents XSS attacks
      sameSite: "strict", // prevents CSRF attacks
      secure: process.env.NODE_ENV === "production",
    });

    // Don't send back password
    const userResponse = createUser.toObject();
    delete userResponse.password;

    return res.status(201).json({
      message: "User created successfully",
      success: true,
      user: userResponse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//Auth Controller for google signin

export const googleSignUp = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      avatar,
      googleId,
      provider,
      phoneNumber,
    } = req.body;

    // Check if the user is already registered in DB
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      // 1st step: Create new user document
      const newuser = await User.create({
        email,
        firstName,
        lastName,
        avatar,
        googleId,
        provider,
        phoneNumber,
      });

      // 2nd step: Generate JWT token and save it in cookies
      const token = generateToken(newuser._id);
      res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true, // prevents XSS attacks
        sameSite: "strict", // prevents CSRF attacks
        secure: process.env.NODE_ENV === "production",
      });

      // Don't send back password (even if empty)
      const userResponse = newuser.toObject();
      delete userResponse.password;

      return res.status(201).json({
        message: "User created successfully",
        success: true,
        user: userResponse,
      });
    } else {
      // User exists, login them in
      const token = generateToken(existingUser._id);
      res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true, // prevents XSS attacks
        sameSite: "strict", // prevents CSRF attacks
        secure: process.env.NODE_ENV === "production",
      });

      // Update their google credentials and provider if they were not linked before
      if (!existingUser.googleId) {
        existingUser.googleId = googleId;
        existingUser.provider = provider;
        if (avatar) existingUser.avatar = avatar;
        await existingUser.save();
      }

      const userResponse = existingUser.toObject();
      delete userResponse.password;

      return res.status(200).json({
        message: "User logged in successfully",
        success: true,
        user: userResponse,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Signin Controller
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Generate token and save in cookies
    const token = generateToken(user._id);
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(200).json({
      message: "Logged in successfully",
      success: true,
      user: userResponse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Logout Controller
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
