"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FormSideImg } from "../../components/FornSideImg"; // Correct path
import { FormTopBar } from "@/app/components/FormTopBar";
import { Inputs } from "@/app/components/Inputs";
import { useRouter } from "next/navigation"; // Import useRouter

const Login = () => {
  const router = useRouter(); // Initialize useRouter

  //password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Checkbox state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  // Align with Backend
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    console.log("Form Data:", userData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userData
      );

      console.log("Response:", response.status, response.data.token);

      if (response.status === 200) {
        // Redirect to the dashboard upon successful login
        router.push("/hoteldetail");
      }
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
            className="w-full max-w-[741px] bg-white h-[745px] rounded-[15px] flex justify-center flex-col items-center "
          >
            <div className="">
              <FormTopBar
                heading="Welcome back!"
                paragraph="Provide Email & Password to login"
              />
              <div className="pt-[45px]">
                <Inputs
                  type="email"
                  name="email"
                  heading="Email"
                  Placeholder="Type here..."
                  svg={<Image src="/mail.svg" alt="" height={15} width={15} />}
                  className="mt-[28px] w-full max-w-[444px]"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <div className="mt-[28px] w-full max-w-[444px]  relative flex items-center">
                  <Inputs
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    heading="Enter Password"
                    Placeholder="Type here..."
                    svg={
                      <Image src="/lock.svg" alt="" height={15} width={15} />
                    }
                    className="w-full"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-5  transform translate-y-4"
                  >
                    {isPasswordVisible ? <IoMdEye /> : <IoMdEyeOff />}
                  </button>
                </div>
              </div>

              {/* Forgot password and remember me */}
              <div className="flex justify-between pt-[51px]">
                <div className="flex gap-[14px] justify-center content-center">
                  <input
                    type="checkbox"
                    className="size-5 rounded-[4px] border border-gray-300  cursor-pointer"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <h1 className="font-serif font-medium text-[15px] text-black leading-[20px]">
                    Remember Me
                  </h1>
                </div>
                <div className="font-serif font-semibold text-[15px] text-red leading-[20px] underline">
                  <a href="/forgetpasswordmail">
                    <h1>Forget Password</h1>
                  </a>
                </div>
              </div>

              {/* Login button */}
              <div className="flex justify-center mt-[51px]">
                <button className="w-[258px] bg-red rounded-[32px]">
                  <h1 className="font-serif font-semibold text-[15px] text-white leading-[20px] py-[17px]">
                    Login
                  </h1>
                </button>
              </div>

              {/* Sign up link */}
              <div className="text-center pt-[75px] font-sans font-normal text-[16px] text-black leading-[20px]">
                Don’t have an account?{" "}
                <span className="font-sans font-semibold text-[16px] text-red underline leading-[20px]">
                  <Link href="/signup">Create an Account</Link>
                </span>
              </div>
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

export default Login;
