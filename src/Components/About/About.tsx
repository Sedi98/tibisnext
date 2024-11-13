
import React from "react";
import Image from "next/image";
import SectionText from "../Reusable/SectionText";
import SectionTitle from "../Reusable/SectionTitle";
import aboutPht from "@/assets/images/about.webp";

const About:React.FC = () => {
  return (
    <section className="w-4/5 mx-auto py-24" id="about">
      {/* will be separeted */}
      <div className="p-8">
        <SectionText text="Biz kimik" />
        <SectionTitle text="Haqqımızda" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="left">
          <Image
            src={aboutPht}
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-3xl "
          />
        </div>
        <div className="right flex items-center">
          <p className="text-[#5b5b5b] text-lg ">
            {" "}
            Proqramlaşdırma sahəsində illərin təcrübəsinə sahib komandamız,
            xəstəxana idarəetmə sistemləri üzrə tam ixtisaslaşıb. İstəyimiz -
            ölkəmizdə olduğumuz sahədə dəyər yaratmaq, muştəri məmnunluğu
            başlıca amalımız olmaqla, millətimizə faydalı işlər görüb inkişaf
            etməkdir. Buna görə də işimizi maksimum dəqiq , dürüst ,
            professional və güvənli görməyə davam edirik.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
