import React from 'react'
interface Propss {
    heading: string;
    className?: string; // Optional className prop
}
export const SubmitButtons: React.FC<Propss> = ({ heading, className, })=> {
  return (
    <>
      <div className="flex justify-center mt-[51px]">
              <button className={`w-[258px] bg-red  rounded-[32px]  ${className}`}>
                <h1 className="font-serif font-semibold text-[15px] text-white leading-[20px] py-[17px]">
                 {heading}
                </h1>
              </button>
            </div>
    </>
  )
}
