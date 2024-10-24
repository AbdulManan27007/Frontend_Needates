import React from 'react';

interface Propss {
  heading: string;
  Placeholder: string;
  svg: React.ReactNode; // Define svg as React.ReactNode
  svg2?: React.ReactNode; // Optional svg2 as React.ReactNode
  className?: string; // Optional className prop
  isSecondInput?: boolean; // Optional, defaults to false
  value: string; // Controlled input value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  type?: string; // Optional type prop, defaults to "text"
  name: string;
}

export const Inputs: React.FC<Propss> = ({
  heading,
  Placeholder,
  svg,
  className = '',
  value,
  name,
  onChange,
  type = "text", // Defaults to text input
}) => {
  return (
    <div className={` ${className}`}> {/* Apply className */}
      <div className="flex items-center gap-2">
        {svg}
        <h1 className='font-inter font-medium text-[15px] text-black leading-[26px]'>{heading}</h1>
      </div>
      <div className="relative">
        <input
          className='flex items-center outline-none w-full pl-6 bg-gray max-w-[444px] h-[64px] mt-[9.7px] rounded-[9.63px] font-sans font-normal italic text-[16px] leading-[27px]'
          type={type}
          name= {name}
          placeholder={Placeholder}
          value={value} // Bind the input value
          onChange={onChange} // Bind the onChange handler
        />
      </div>
    </div>
  );
};
