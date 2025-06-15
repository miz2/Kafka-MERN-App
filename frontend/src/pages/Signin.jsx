import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      if (!email || !password) {
        toast.error("Please enter both email and password.", { position: "top-center" });
        return;
      }

      const response = await axios.post("http://localhost:5000/api/users/signin", {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", response.data.token);

      toast.success("Successfully signed in!", { position: "top-center" });

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Sign-in error:", error.response?.data);

      toast.error(error.response?.data?.message || "Sign-in failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center p-8 w-full max-w-md bg-white rounded-2xl shadow-2xl space-y-8">
        <Heading
          label={"Welcome Back!"}
          className="text-4xl font-bold text-gray-900 text-center"
        />
        <SubHeading
          label={"Sign in to continue to your account"}
          className="text-gray-600 text-base text-center"
        />

        <InputBox
          placeholder="Enter your email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-gray-300 focus:ring-2 focus:ring-purple-400"
        />

        <InputBox
          placeholder="Enter your password"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-gray-300 focus:ring-2 focus:ring-purple-400"
        />

        <div className="pt-2">
          <Button
            label="Sign In"
            onClick={handleSignin}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:bg-gradient-to-l transition duration-300"
          />
        </div>

        <div className="text-center">
          <a href="/forgot-password" className="text-sm text-purple-500 hover:underline">
            Forgot your password?
          </a>
        </div>

        <BottomWarning
          label="Don't have an account?"
          buttonText="Sign up"
          to="/signup"
          className="text-gray-600 text-sm text-center"
        />
      </div>
      <ToastContainer />
    </div>
  );
};
