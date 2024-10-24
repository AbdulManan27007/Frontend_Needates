import React from 'react'

export const FormSideImg = () => {
  return (
    <>
      {/* form side img start */}
      <div className="w-full lg:max-w-[717px] bg-white h-full lg:h-[100%] xl:fixed hidden lg:flex">
        <div className=" bg-[url('/OBJECTS.png')] bg-contain bg-no-repeat bg-bottom w-[100%]  flex flex-col items-center justify-starth-full lg:h-[100%] ">
        <div className=" relative pb-[106px] pt-[106px] ">
            <div className=" absolute inset-0 z-0 pt-[190px]">
              <img src="\Rectangle 4.png" alt="" />
            </div>
            <div className=" relative z-10 pl-[106px] ">
              <img src="\Rectangle 27.png" alt=" " />
            </div>
          </div>
          <div className="pb-[120px]">
          <img src="\image 1.png" alt="" />
        </div>
         </div>
        </div>
        {/* form side img end */}
    </>
  )
}
