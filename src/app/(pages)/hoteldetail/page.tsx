"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { FormSideImg } from "../../components/FornSideImg";
import { FormTopBar } from "@/app/components/FormTopBar";
import { Inputs } from "@/app/components/Inputs";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hotelName: "",
    address1: "",
    city: "",
    state: "",
    zipCode: "",
    contactPerson: {
      name: "",
      phoneNumber: "",
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="w-full bg-gray m-auto">
        <div className="flex flex-col-reverse lg:gap-0 w-full lg:flex-row">
          <div className="w-full flex items-center justify-center bg-gray md:py-20">
            <div className="w-full max-w-[985px] px-10 md:px-0 bg-white rounded-[15px] flex flex-col items-center">
              {/* registration form start */}
              <div className="flex flex-col">
                <div className="w-full max-w-[833px] px-3 md:px-0">
                  {/* form top bar */}
                  <div className="pb-[79px] w-full flex justify-center items-center">
                    <div className="w-full max-w-[394px]">
                      <FormTopBar
                        heading="Hotel Details"
                        paragraph="Provide the following details to complete your profile"
                      />
                    </div>
                  </div>
                  {/* form inputs */}
                  <div className="w-full">
                    <h1 className="font-sans font-normal text-[16px] text-black leading-[26px]">
                      Hotel Details
                    </h1>
                    <div className="flex flex-col gap-[27px] items-center justify-between pt-5">
                      <Inputs
                        heading="Hotel Name"
                        name="hotelName"
                        type="text"
                        Placeholder="Type here..."
                        svg={""}
                        value={formData.hotelName}
                        onChange={handleInputChange}
                        className="w-full max-w-[833px]"
                      />
                      <Inputs
                        heading="Address 1"
                        name="address1"
                        Placeholder="Type here..."
                        svg={""}
                        value={formData.address1}
                        onChange={handleInputChange}
                        className="w-full max-w-[833px]"
                      />
                      <div className="flex flex-col md:flex-row justify-between w-full max-w-[833px]">
                        <Inputs
                          heading="City"
                          name="city"
                          Placeholder="Type here..."
                          svg={""}
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full md:max-w-[255px]"
                          svg2={<Image src="/gridicons_dropdown.svg" alt="" width={20} height={10} />}
                        />
                        <Inputs
                          heading="State"
                          name="state"
                          Placeholder="Type here..."
                          svg={""}
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full md:max-w-[255px]"
                          svg2={<Image src="/gridicons_dropdown.svg" alt="" width={20} height={10} />}
                        />
                        <Inputs
                          heading="Zip code"
                          name="zipCode"
                          Placeholder="Type here..."
                          svg={""}
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full md:max-w-[255px]"
                        />
                      </div>
                    </div>
                    {/* upload image tab */}
                    <div className="w-[193px] h-[120px] border-[1px] border-gray-dark rounded-[5px] mt-[22px] flex flex-col justify-center items-center gap-[23px] mx-[40px] lg:mx-0">
                      <div>
                        <Image src="/Vector.svg" alt="" width={31} height={24} />
                      </div>
                      <div>
                        <button className="font-sans font-normal text-[12px] text-black leading-[14px] border-[1px] border-gray-dark rounded-[5px] px-[11px] py-2">
                          Upload Photo
                        </button>
                      </div>
                    </div>
                    {/* contact person information */}
                    <div className="w-full pt-[30px]">
                      <h1 className="font-sans font-normal text-[16px] text-black leading-[26px]">
                        Contact Person
                      </h1>
                      <div className="pt-[10px]">
                        <Image src="/Line 37.png" alt="" width={833} height={2} />
                      </div>
                      <div className="flex flex-col md:flex-row justify-between w-full max-w-[833px] pt-4">
                        <Inputs
                          heading="Name"
                          name="contactPerson.name"
                          Placeholder="Type here..."
                          svg={""}
                          value={formData.contactPerson.name}
                          onChange={handleInputChange}
                          className="w-full md:max-w-[400px]"
                        />
                        <Inputs
                          heading="Phone Number"
                          name="contactPerson.phoneNumber"
                          Placeholder="   +1 - Phone"
                          svg={""}
                          value={formData.contactPerson.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full md:max-w-[400px]"
                          isSecondInput={true}
                        />
                      </div>
                    </div>
                    {/* logout button */}
                    <div className="flex justify-center pt-5">
                      <button
                        className="w-[258px] bg-red rounded-[32px] hover:bg-dark-black"
                        onClick={handleLogout}
                      >
                        <h1 className="font-serif font-semibold text-[15px] text-white leading-[20px] py-[17px]">
                          Logout
                        </h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* registration form end */}
            </div>
          </div>
          <div className="w-full lg:max-w-[717px] bg-gray">
            <FormSideImg />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
