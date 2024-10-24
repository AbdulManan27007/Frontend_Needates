import React from 'react';

// Define the type for the props
interface FormTopBarProps {
  heading: string;
  paragraph: string;
}

export const FormTopBar: React.FC<FormTopBarProps> = ({ heading, paragraph }) => {
  return (
    <div className='text-center '>
      <h1 className='font-bold font-sans text-[23px] text-black leading-8 '>{heading}</h1>
      <p className='font-sans font-medium  text-[18px] leading-6 text-oliveGreen pt-3' style={{ }}>{paragraph}</p>
    </div>
  );
}
