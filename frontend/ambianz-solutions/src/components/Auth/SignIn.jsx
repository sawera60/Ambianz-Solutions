import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { authDataContext } from "../../context/AuthContext";
import { auth, googleProvider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";

export default function SignIn() {
  const navigate = useNavigate();
  const { serverUrl, setUserData } = useContext(authDataContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/signin",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true },
      );
      if (result.status === 200) {
        setUserData(result.data.user);
        toast.success("Logged In Successfully", { position: "top-right" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "An error occurred during signin",
        { position: "top-right" },
      );
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);

      // The result object contains the logged-in Google user information
      const user = result.user;
      const idToken = await user.getIdToken();
      const phoneNumber = user.phoneNumber || "";

      const response = await axios.post(
        serverUrl + "/api/auth/google",
        {
          idToken,
          phoneNumber,
        },
        { withCredentials: true },
      );

      if (response.status === 201 || response.status === 200) {
        setUserData(response.data.user);
        toast.success(response.data.message || "Logged In Successfully", {
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "An error occurred during Google signin",
        { position: "top-right" },
      );
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F8F6F1] py-20 px-4">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-10 shadow-2xl border border-[#e0ddd5] transform hover:scale-[1.01] transition-all duration-500">
        <div className="text-center mb-10">
          <h2 className="font-cinzel text-2xl font-bold text-[#1A1C19] tracking-[4px] uppercase mb-3">
            Welcome Back
          </h2>
          <div className="w-12 h-[1px] bg-[#adb940] mx-auto mb-4" />
          <p className="font-raleway text-xs text-gray-500 tracking-wider">
            Sign in to your Ambianz account
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSignIn}>
          <div className="relative">
            <FiMail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL ADDRESS"
              className="w-full pl-8 pb-3 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[11px] tracking-widest transition-colors duration-300 bg-transparent"
              required
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="PASSWORD"
              className="w-full pl-8 pb-3 border-b border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-[11px] tracking-widest transition-colors duration-300 bg-transparent"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="#"
              className="font-raleway text-[10px] text-[#3c5a25] hover:text-[#adb940] transition-colors duration-200 tracking-wider font-semibold no-underline"
            >
              FORGOT PASSWORD?
            </Link>
          </div>

          <button className="w-full bg-[#3c5a25] text-white py-4 font-raleway text-[10px] tracking-[3px] font-bold hover:bg-[#2a3f1a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg uppercase">
            Sign In
          </button>
        </form>

        <div className="mt-10">
          <div className="relative flex items-center justify-center mb-8">
            <div className="w-full border-t border-[#e0ddd5]"></div>
            <span className="absolute bg-white px-4 font-raleway text-[9px] text-gray-400 tracking-[3px] uppercase">
              Or
            </span>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full border border-[#e0ddd5] py-3.5 flex items-center justify-center gap-3 hover:bg-[#F8F6F1] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <FcGoogle className="text-xl" />
            <span className="font-raleway text-[10px] tracking-[2px] text-gray-600 font-bold group-hover:text-[#1A1C19]">
              SIGN IN WITH GOOGLE
            </span>
          </button>
        </div>

        <p className="mt-10 text-center font-raleway text-[11px] text-gray-500 tracking-wider">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#3c5a25] font-bold hover:text-[#adb940] transition-colors duration-200 no-underline"
          >
            CREATE ACCOUNT
          </Link>
        </p>
      </div>
    </div>
  );
}
