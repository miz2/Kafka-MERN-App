import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // ✅ added for redirect

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ for navigation

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", {
        name: `${firstName} ${lastName}`,
        email,
        password,
      });

      toast.success("Account created successfully!", {
        position: "top-center",
        autoClose: 2000,
      });

      // ✅ Redirect to Signin page after short delay
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      console.error("Signup failed:", error);

      toast.error(
        error.response?.data?.message || "Signup failed. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-2xl bg-white w-96 text-center p-6 shadow-2xl space-y-6">
          <Heading label="Create Account" className="text-3xl font-bold text-gray-800" />
          <SubHeading
            label="Enter your details to get started"
            className="text-gray-500 text-sm"
          />

          <div className="space-y-4">
            <InputBox
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              label="First Name"
              className="border-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <InputBox
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              label="Last Name"
              className="border-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <InputBox
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              label="Email"
              className="border-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              label="Password"
              type="password"
              className="border-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="pt-4">
            <Button
              onClick={handleSignup}
              label="Sign Up"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:bg-gradient-to-l transition duration-300"
            />
          </div>

          <BottomWarning
            label="Already have an account?"
            buttonText="Sign In"
            to="/signin"
            className="text-gray-700 text-sm"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
