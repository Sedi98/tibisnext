import React from "react";
import Image from "next/image";
import heroBg from "@/assets/images/cr623.webp";
import ButtonOne from "../Reusable/ButtonOne";
import ButtonTwo from "../Reusable/ButtonTwo";

const Hero = () => {
  return (
    <div className="h-[70vh] relative">
      <div className="overlay bg-transparent bg-gradient-to-r from-[#00347d] to-[#136fef45] bg-blend-darken bg-opacity-50 absolute top-0 left-0 w-full h-full z-10"></div>
      <Image
        src={heroBg}
        alt="Picture of the author"
        width={1900}
        height={1000}
        className="w-full h-full object-cover absolute z-0"
      />
      <div className={`absolute top-1/2 w-4/5 left-[10%] transform -translate-y-1/2 z-20 `}>
        <h1 className="text-6xl font-bold transform-gpu text-[#ffffff] w-1/2 leading-[1.3em]">
        Smart digital solutions for your business
        </h1>
        <p className=" text-[#ffffff] mt-4 w-1/2 leading-relaxed text-xl">
          Xəstəxana İdarəetmə Sistemlərinin qurulması istiqamətində
          ixtisaslaşmış komandamızla, işi keyfiyyətli, sürətli və professional
          şəkildə təşkil edərək fərq yaratmaga davam edirik.
        </p>
        <div className="mt-8 flex gap-4">
         <ButtonTwo link="#services" text="Xidmətlər" />
         <ButtonOne link="#contact" text="Əlaqə" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
