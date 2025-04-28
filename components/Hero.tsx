 "use client";
  import Image from 'next/image'
import React from 'react'



 
 const Hero = () => {
  return (
    <div className="  flex flex-col justify-center md:flex-row text-center lg:text-start gap-5 my-15 mx-3 ">
      <div className="  flex justify-center lg:w-1/2  ">
        <Image
          src="/hero2.JPG"
          alt="Hero"
          width={600}
          height={600}
          className="object-cover rounded-2xl h-[500px]  w-[500px] md:h-[600px]  md:w-[600px] lg:h-[650px] lg:w-[700px] "
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-6 lg:items-start lg:w-[30%]">
        <h1 className="text-3xl font-roboto  mb-2 md:mb-6 ">
          Welcome to my portfolio
        </h1>
        <h3 className="font-oswald bg-gradient-to-b from-slate-900 via-orange-700 to-orange-300 bg-clip-text text-transparent text-4xl  lg:text-8xl ">
          Reda Baskiki
        </h3>
        <h6 className="font-roboto ">Front-End Web Developper</h6>
      </div>
    </div>
  );
}

export default Hero
