"use client";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { FormSideImg } from "@/app/components/FornSideImg";
import { SubmitButtons } from "@/app/components/SubmitButtons";
import { Inputs } from "@/app/components/Inputs";
import { FormTopBar } from "@/app/components/FormTopBar";
import { IoMdEye, IoMdEyeOff } from "react-icons/io"; // Importing icons for password visibility

const ResetNewPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    password: "",
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
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
      password: formData.password,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/reset-password?token=${resetToken}`, // Provide the correct URL here
        userData
      );
      console.log(
        "Form Submitted Successfully, Response: ",
        response.status,
        response.data.token
      );
      alert("Password reset successful!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="w-full bg-gray m-auto">
      <div className="flex flex-col-reverse gap-4 lg:gap-0 w-full lg:flex-row">
        <div className="w-full flex items-center justify-center bg-gray h-[100vh]">
          <div className="w-full max-w-[741px] bg-white rounded-[15px] flex items-center justify-center">
            <div className="w-full max-w-[542px] flex flex-col justify-center items-center py-3 md:py-0">
              <div className="text-center font-sans font-bold pt-[55px] text-[16px] md:text-[24px] text-dark-black leading-[42px]">
               
                  <h1 className="font-bold font-sans text-[23px] text-black leading-8 ">
                    Set new password
                  </h1>
              
              </div>

              <form
                className="w-full max-w-[444px] pt-[56px] pb-[55px] px-3 md:px-0"
                onSubmit={handleSubmit}
              >
                <div className="relative w-full mb-6">
                  <Inputs
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    heading="Create New Password"
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

                <div className="relative w-full mb-6">
                  <Inputs
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    heading="Confirm New Password"
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

                <SubmitButtons heading="Reset Password" />
              </form>

              <div className="text-center font-sans font-semibold text-[18px] leading-[32.4px] underline text-orange pt-[21px] pb-[100px]">
                <p>Use a different email</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-[717px] bg-gray">
          <FormSideImg />
        </div>
      </div>
    </div>
  );
};

export default ResetNewPassword;
