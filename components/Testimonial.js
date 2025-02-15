import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Image from 'next/image';

function Testimonial() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/9c21/988d/a88e39960cdb3d07194580d6345f6a58?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j0~uI8iJGjtVIpI8TCly-hLshWS00GsGrsmzj9w5BDXSyo1Q8-98KxSllpytXtjPWCfjClLvtG~3o4sD8ShFoXzqypQNTU2R89frl-eGfKOkEix1QsWsaWp0-WgWDEboXLKmcMUuVGoYWp94tA8On1MaFrMQSHOfrsN8XcLs-wDwlkebY-odTGpG6vGVe-69NDQmLOAWPDfloGehNoZV2LrHQHQ7GvKRSw2z3qPr1pe6LdhplTmz7ADFhdN-bBxVdbO21i4tx4btUNJLf22z7cfQ6wQ~JrF5djnR5yzptSeDIQ7-SAkVKmMD2y8OOWLnIYAlzlg6R6b0U54aICAYKA__')" }}>

    <div className="absolute inset-0 bg-[#12171D] bg-opacity-90"></div>
  
    
    <div className="relative z-10 text-white  h-full pt-10 px-32 text-center min-[320px]:px-5">
    <Image src="/gradient-bg.svg" alt="picture" width={1000} height={500} className=" blur-lg absolute left-16" />
      <h5 className="text-4xl font-caudex font-bold min-[320px]:text-2xl md:text-3xl xl:text-4xl">
      Team Members
      </h5>
      <p className='font-poppins text-sm w-2/3 mx-auto mt-5 mb-20 min-[320px]:text-xs min-[320px]:w-full md:w-3/4 xl:text-sm xl:w-2/3'>We provides a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses. Simplify your key handling with our reliable key duplication, storage, and tracking services.</p>
      <div className='border rounded-t-full h-full w-[85%] mx-auto border-dashed min-[320px]:w-full md:w-[85%] xl:w-[75%]'>
        <div className='flex w-full justify-between h-full relative'>
        <Image src="/polgyon-1.svg" width={100} height={100} className='min-[320px]:w-1/5 md:w-1/6 xl:w-[12%]'/>

        <Image src="/polgyon-2.svg" width={100} height={100} className='absolute top-8 left-36 min-[320px]:w-1/5 min-[320px]:left-7 md:w-1/6 xl:w-[12%] xl:left-24'/>

        <Image src="/polgyon-3.svg" width={100} height={100} className='absolute -top-10 left-1/2 -translate-x-1/2 min-[320px]:w-1/5 md:w-1/6 xl:w-[12%] '/>

        <Image src="/polgyon-4.svg" width={100} height={100} className='absolute top-8 right-36 min-[320px]:w-1/5 min-[320px]:right-7 md:w-1/6 xl:w-[12%] xl:right-24'/>

        <Image src="/polgyon-5.svg" width={100} height={100} className='min-[320px]:w-1/5 md:w-1/6 xl:w-[12%]'/>

        </div>
        <div className='flex flex-col justify-center items-center absolute top-[55%] left-10 min-[320px]:top-[75%]  min-[375px]:left-24 min-[425px]:left-32 sm:w-full min-[320px]:left-0 min-[320px]:w-full md:top-[60%] md:left-0'>
          <h6 className='text-[#24FF00] font-caudex text-xl min-[320px]:text-base'>Nikolaus Schauersberger</h6>
          <p className='text-[#f3e1e1] text-xs font-poppins'>Founder / CEO</p>
          <p className='text-[#FFFFFF] w-1/2 mt-5 mb-10 min-[320px]:hidden md:block md:text-xs xl:w-1/3'>We provides a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses. Simplify your key handling with our reliable key duplication, storage, and tracking services.</p>
          <div className='min-[320px]:mt-4 md:mt-0'>
            <button className='bg-white mx-2 text-black p-2 rounded-full text-2xl'><FiArrowLeft/></button>
            <button className='bg-white mx-2 text-black p-2 rounded-full text-2xl'><FiArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
        </div>
  )
}

export default Testimonial