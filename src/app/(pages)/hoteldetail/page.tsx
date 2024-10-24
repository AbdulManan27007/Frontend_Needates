"use client";
import React, { useState } from "react";
import { FormSideImg } from "../../components/FornSideImg";
import { FormTopBar } from "@/app/components/FormTopBar";
import { Inputs } from "@/app/components/Inputs";
import { SubmitButtons } from "@/app/components/SubmitButtons";
import { useRouter } from "next/navigation";


const SignUp = () => {

  const router = useRouter();

  const handleLogout = () => {
    // Make sure you're removing the correct key
    localStorage.removeItem("authToken"); 
    router.push("/login");
  };

  return (
    <>
      <div className="w-full bg-gray m-auto  ">
        <div className="flex flex-col-reverse  lg:gap-0 w-full lg:flex-row ">
          <div className="w-full flex items-center justify-center bg-gray md:py-20">
            <div className="w-full max-w-[985px] px-10 md:px-0 bg-white rounded-[15px] flex flex-col items-center">
              {/* registration form start */}
              <div className=" flex flex-col ">
                <div className="w-full max-w-[833px] px-3 md:px-0">

                  {/* input button start top two */}
                  {/* form top bar start */}
                  <div className="pb-[79px] w-full flex justify-center items-center ">
                    <div className=" w-full max-w-[394px]">
                    <FormTopBar
                      heading="Hotel Details"
                      paragraph="Provide the following details for complete your profile"
                    />
                    </div>
                    
                  </div>
                  {/* form top bar end */}
                  <div className="w-full">
                  <div className="">
                    <h1 className="font-sans font-normal text-[16px] text-black leading-[26px]">
                    Hotel Details
                    </h1>
                  </div>
                  <div className="pt-[10px]">
                    <img src="/Line 37.png" alt="" />
                  </div>
                </div>
                  <div className="flex flex-col gap-[27px] items-center justify-between pt-5">
                    <Inputs
                      heading="Hotel Name"
                      Placeholder="Type here..."
                      svg={""}
                      className="w-full max-w-[833px]"
                      svg2
                    />
                    <Inputs
                      heading="Address 1"
                      Placeholder="Type here..."
                      svg={""}
                      className="w-full max-w-[833px]"
                      svg2={""}
                    />
                    <div className="flex flex-col md:flex-row justify-between w-full max-w-[833px]">
                      <Inputs
                        heading="City"
                        Placeholder="Type here..."
                        svg={""}
                        className="w-full md:max-w-[255px]"
                        svg2={<img src="/gridicons_dropdown.svg" alt="" />}
                      />{" "}
                      <Inputs
                        heading="State"
                        Placeholder="Type here..."
                        svg={""}
                        className="w-full md:max-w-[255px]"
                        svg2={<img src="/gridicons_dropdown.svg" alt="" />}
                      />{" "}
                      <Inputs
                        heading="Zip code"
                        Placeholder="Type here..."
                        svg={""}
                        className="w-full md:max-w-[255px]"
                        svg2={""}
                      />
                    </div>
                  </div>
                  {/* input button end top two */}

                  {/* button line create img */}
                  
                </div>
                <div className="">
                  
                  {/* input button start bottom two */}
                 
                  {/* input button end bottom two */}
                </div>
                {/* upload img tab start */}
                <div className="w-[193px] h-[120px] border-[1px] border-gray-dark rounded-[5px] mt-[22px] flex flex-col justify-center items-center gap-[23px] mx-[40px] lg:mx-0">
                  <div className="">
                    <img src="/Vector.svg" alt="" />
                  </div>
                  <div className="">
                    <button className="font-sans font-normal text-[12px] text-black leading-[14px] border-[1px] border-gray-dark rounded-[5px] px-[11px] py-2">
                      Upload Photo
                    </button>
                  </div>
                </div>
                {/* contect personal information */}
                <div className="w-full pt-[30px]">
                  <div className="">
                    <h1 className="font-sans font-normal text-[16px] text-black leading-[26px]">
                      Contact Person
                    </h1>
                  </div>
                  <div className="pt-[10px]">
                    <img src="/Line 37.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full max-w-[833px] pt-4">
                      <Inputs
                        heading="Name"
                        Placeholder="Type here..."
                        svg={""}
                        className="w-full md:max-w-[400px]"
                        svg2={""}
                      />{" "}
                      <Inputs
                        heading="Phone Number"
                        Placeholder="   +1 - Phone"
                        svg={""}
                        className="w-full md:max-w-[400px] "
                        svg2  ={<img src="/image 16.svg" alt="" />}
                        isSecondInput={true} // Pass the new prop to shift svg2 to the left
                      />{" "}
                    </div>


                {/* upload img tab end */}
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
