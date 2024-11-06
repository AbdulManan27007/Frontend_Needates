"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FormSideImg } from "../../components/FornSideImg";
import { FormTopBar } from "@/app/components/FormTopBar";
import { Inputs } from "@/app/components/Inputs";
import { useRouter } from "next/navigation";
import axios from "axios";

const HotelDetails = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hotelName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    name: "",
    phoneNumber: "",
    picture: null
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

  //Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      hotelName: formData.hotelName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      picture: formData.picture, // Only if backend supports file upload
    };
    console.log("Form Data:", userData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/hoteldetails", 
        userData
      );
      console.log("Hotel Details Submitted Successfully, Response: ", response.status, response.data.token);
      alert("Hotel Details Submitted Successfully");

    } catch (error) {
      console.error("Error submitting Hotel Details:", error);

    }
  };


  ///Logout handle
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };
  return (
    <div className="w-full bg-gray m-auto">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="w-full flex items-center justify-center bg-gray md:py-20">
          <div className="w-full max-w-[985px] px-10 md:px-0 bg-white rounded-[15px] flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[833px] px-3 md:px-0"
            >
              <FormTopBar
                heading="Hotel Details"
                paragraph="Provide the following details to complete your profile"
              />
              <div className="flex flex-col gap-[27px] pt-5">
                <Inputs
                  heading="Hotel Name"
                  name="hotelName"
                  type="text"
                  Placeholder="Type here..."
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  className="w-full max-w-[833px]"
                  svg={""}
                />
                <Inputs
                  heading="Address 1"
                  name="address"
                  Placeholder="Type here..."
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full max-w-[833px]"
                  svg={""}
                />
                <div className="flex flex-col md:flex-row justify-between w-full max-w-[833px]">
                  <Inputs
                    heading="City"
                    name="city"
                    Placeholder="Type here..."
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full md:max-w-[255px]"
                    svg={""}
                  />
                  <Inputs
                    heading="State"
                    name="state"
                    Placeholder="Type here..."
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full md:max-w-[255px]"
                    svg={""}
                  />
                  <Inputs
                    heading="Zip code"
                    name="zipCode"
                    Placeholder="Type here..."
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full md:max-w-[255px]"
                    svg={""}
                  />
                </div>
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Choose File
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    // onChange={handleFileChange}
                  />
                </label>
                <h1 className="font-sans font-normal text-[16px] text-black leading-[26px] pt-[30px]">
                  Contact Person
                </h1>
                <Image src="/Line 37.png" alt="" width={833} height={2} />
                <div className="flex flex-col md:flex-row justify-between w-full max-w-[833px] pt-4">
                  <Inputs
                    heading="Name"
                    name="name"
                    Placeholder="Type here..."
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full md:max-w-[400px]"
                    svg={""}
                  />
                  <Inputs
                    heading="Phone Number"
                    name="phoneNumber"
                    Placeholder="   +1 - Phone"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full md:max-w-[400px]"
                    svg={""}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-[258px] bg-red-500 border  rounded-[32px] hover:bg-red-600 text-black font-serif font-semibold py-[17px] mt-5"
              >
                Submit
              </button>
            </form>
            <button
              onClick={handleLogout}
              className="w-[258px] bg-red rounded-[32px] hover:bg-dark-black mt-5"
            >
              <h1 className="font-serif font-semibold text-[15px] text-white py-[17px]">
                Logout
              </h1>
            </button>
          </div>
        </div>
        <div className="w-full lg:max-w-[717px] bg-gray">
          <FormSideImg />
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
