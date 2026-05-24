import { User } from "../models/user.model.js";
import generateToken from "../config/token.js";
import bcrypt from "bcrypt";
import { verifyFirebaseIdToken } from "../config/firebaseAdmin.js";

const setAuthCookie = (res, token) => {
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
  });
};

// Auth Controller for normal signup
export const signUp = async (req, res) => {
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
    setAuthCookie(res, token);

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
      success: false,
    });
  }
};

//Auth Controller for google signin

export const googleSignUp = async (req, res) => {
  try {
    const { idToken, phoneNumber } = req.body;
    const decodedToken = await verifyFirebaseIdToken(idToken);
    const email = decodedToken.email;
    const googleId = decodedToken.uid;
    const avatar = decodedToken.picture || "";
    const provider = "google";
    const displayName = decodedToken.name || "Google User";
    const [firstName = "Google", ...lastNameParts] = displayName.split(" ");
    const lastName = lastNameParts.join(" ") || "User";

    if (!email) {
      return res.status(400).json({
        message: "Google account email is required",
        success: false,
      });
    }

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
      setAuthCookie(res, token);

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
      setAuthCookie(res, token);

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
    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Internal Server Error",
      success: false,
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
    if (!user.password) {
      return res.status(400).json({
        message: "Please sign in with Google for this account",
        success: false,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Generate token and save in cookies
    const token = generateToken(user._id);
    setAuthCookie(res, token);

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
      success: false,
    });
  }
};

// Logout Controller
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    });
    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// Sync Cart Controllers
export const getUserCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.status(200).json({
      cart: user.cart || [],
      success: true,
    });
  } catch (error) {
    console.error("getUserCart error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const updateUserCart = async (req, res) => {
  try {
    const { cart } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { cart },
      { new: true }
    );
    return res.status(200).json({
      message: "Cart updated successfully",
      success: true,
      cart: user.cart,
    });
  } catch (error) {
    console.error("updateUserCart error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

// Sync Favorites Controllers
export const getUserFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.status(200).json({
      favorites: user.favorites || [],
      success: true,
    });
  } catch (error) {
    console.error("getUserFavorites error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const updateUserFavorites = async (req, res) => {
  try {
    const { favorites } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { favorites },
      { new: true }
    );
    return res.status(200).json({
      message: "Favorites updated successfully",
      success: true,
      favorites: user.favorites,
    });
  } catch (error) {
    console.error("updateUserFavorites error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};
