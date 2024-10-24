"use client";
import React from "react";
import Link from 'next/link';
import { FormSideImg } from "@/app/components/FornSideImg";
import { SubmitButtons } from "@/app/components/SubmitButtons";


const confermmail = () => {
  return (
    <>
      <div className="w-full bg-gray m-auto">
        <div className="flex flex-col-reverse gap-4 lg:gap-0 w-full lg:flex-row">
          <div className="w-full flex items-center justify-center bg-gray h-[100vh]">
            <div className="w-full max-w-[741px] h-[587px] bg-white rounded-[15px] flex items-center justify-center">
              <div className="w-full max-w-[542px] py-3 md:py-0">
                <div className="text-center font-sans font-bold text-[16px] md:text-[24px] text-dark-black leading-[42px] pb-[27px]">
                  <h1>
                    Thanks! <br />
                    If arslan.anjum951@gmail.com matches an email we have on
                    file, then we have sent you an email containing further
                    instructions for resetting your password.
                  </h1>
                </div>
                <div className="text-center font-sans font-normal text-[18px] text-dark-black leading-[32.4px]">
                  <p>
                    If you have not received an email in 5 minutes, check your spam.
                  </p>
                </div>
                <div className="">
                  <SubmitButtons heading="Resend" />
                </div>
                <Link href="/forgetpasswordmail">
                  <div className="text-center font-sans font-semibold text-[18px] leading-[32.4px] underline text-orange pt-[21px] cursor-pointer">
                    <p>Use a different email</p>
                  </div>
                </Link>
              </div>
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
export default confermmail;
