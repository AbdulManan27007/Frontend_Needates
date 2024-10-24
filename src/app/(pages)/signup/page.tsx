"use client";
import React, { useState } from "react";
import { FormSideImg } from "@/app/components/FornSideImg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Inputs } from "@/app/components/Inputs";
import Image from "next/image";
import axios from "axios"; 

const SignUp = () => {
  //password visibility h
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //confirm password
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //checkbox state
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  //align with backend
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    } else {
      setError("");
    }

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    console.log("Form Data:", userData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup", // Update to appropriate signup URL
        userData
      );
      console.log("Form Submitted Successfully, Response: ", response.status, response.data.token);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full bg-gray">
      <div className="flex flex-col-reverse gap-16 lg:gap-5 w-full lg:flex-row">
        <div className="w-full flex items-center justify-center bg-gray min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[741px] bg-white rounded-[15px] flex flex-col items-center"
          >
            {/* Registration form start */}
            <div className="w-full max-w-[444px] px-3 md:px-0">
              <div className="pb-[60px]">
                <div className="text-center">
                  <h1 className="font-bold font-sans text-[23px] text-black leading-8 pt-[53px]">
                    Create An Account!
                  </h1>
                  <p className="font-sans font-medium text-[18px] leading-6 text-oliveGreen pt-3">
                    Provide the following details for creating account!
                  </p>
                </div>
              </div>
              {/* Form inputs */}
              <div className="flex flex-col gap-[27px] items-center">
                <Inputs
                  type="email"
                  name="email"
                  heading="Email"
                  Placeholder="Type here..."
                  svg={
                    <Image
                      src="/mail.svg"
                      alt="email icon"
                      height={15}
                      width={15}
                    />
                  }
                  className="mt-[28px] w-full max-w-[444px]"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                {/* Password Input */}
                <div className="relative w-full">
                  <Inputs
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    heading="Enter Password"
                    Placeholder="Type here..."
                    svg={
                      <Image
                        src="/lock.svg"
                        alt="lock icon"
                        height={15}
                        width={15}
                      />
                    }
                    className="w-full"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-8 top-1/2 transform translate-y-1/2"
                  >
                    {isPasswordVisible ? <IoMdEye /> : <IoMdEyeOff />}
                  </button>
                </div>

                {/* Confirm Password Input */}
                <div className="relative w-full">
                  <Inputs
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    heading="Confirm Password"
                    Placeholder="Type here..."
                    svg={
                      <Image
                        src="/lock.svg"
                        alt="lock icon"
                        height={15}
                        width={15}
                      />
                    }
                    className="w-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-8 top-1/2 transform translate-y-1/2"
                  >
                    {isConfirmPasswordVisible ? <IoMdEye /> : <IoMdEyeOff />}
                  </button>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </div>

            {/* Privacy Agreement */}
            <div className="flex pt-[51px] w-full max-w-[454px]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="size-5 rounded-[4px] border border-gray-300 cursor-pointer"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <h1 className="font-serif font-normal text-[15px] text-black leading-[26px]">
                  I agree to Needates{" "}
                  <a
                    href="/terms"
                    className="font-serif font-semibold text-[15px] text-red leading-[26px] underline"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="font-serif font-semibold text-[15px] text-red leading-[26px] underline"
                  >
                    Privacy Statement
                  </a>
                </h1>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-[51px]">
              <button type="submit" className="w-[258px] bg-red rounded-[32px]">
                <h1 className="font-serif font-semibold text-[15px] text-white leading-[20px] py-[17px]">
                  Signup
                </h1>
              </button>
            </div>

            {/* Login Link */}
            <div className="pb-[53px]">
              <h1 className="text-center mt-[22px] font-sans font-normal text-[16px] text-black leading-[20px]">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-sans font-semibold text-[16px] text-red underline leading-[20px]"
                >
                  Login
                </a>
              </h1>
            </div>
          </form>
        </div>
        <div className="w-full lg:max-w-[717px] bg-gray">
          <FormSideImg />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
