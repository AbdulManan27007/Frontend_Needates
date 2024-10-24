"use client";
import {useState} from "react";
import Image from 'next/image'
import axios from 'axios'
import { FormTopBar } from "@/app/components/FormTopBar";
import { FormSideImg } from "@/app/components/FornSideImg";
import { SubmitButtons } from "@/app/components/SubmitButtons";
import { Inputs } from "@/app/components/Inputs";
import { useRouter } from "next/navigation"; 

 const ForgetPasswordMail = () => {
  const router = useRouter();

  // Align with Backend
  const [formData, setFormData] = useState({
    email: "",
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
    };

    console.log("Form Data:", userData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        userData
      );

      console.log("Response:", response.status, response.data.token);

      if (response.status === 200) {

        router.push("/confermmail");
      }

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div className="w-full bg-gray m-auto  ">
        <div className="flex flex-col-reverse gap-4 lg:gap-0 w-full lg:flex-row">
          <div className="w-full flex items-center justify-center bg-gray h-[100vh]">
            <div className="w-full max-w-[741px] h-[587px] bg-white rounded-[15px] flex items-center justify-center">
              <form onSubmit={handleSubmit} className="w-full max-w-[542px] py-3 md:py-0 flex justify-center flex-col items-center">
                <div className="text-center font-sans font-bold text-[16px] md:text-[24px] text-dark-black leading-[42px]">
                <FormTopBar
                  heading="Forget your passwords"
                  paragraph="Provide Email & Password to login"
                />
                
                </div>
                <div className="w-full max-w-[444px] pt-[85px] pb-[71px] px-3 md:px-0">
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
                </div>
                <div className="">
                  <SubmitButtons heading="Verify email" />
                </div>
            
              </form>
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
export default ForgetPasswordMail;
