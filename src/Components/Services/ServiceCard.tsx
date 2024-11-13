import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  title: string;
  text: string;
  icon: React.ReactNode;
  link: string;
};

const ServiceCard: React.FC<Props> = ({ title, text, icon, link }) => {
  return (
    <div className="flex gap-4">
      <div className="left">
        <div className="square text-5xl p-6 bg-[#0159d314] text-[#0159d3] rounded-3xl">
          {icon}
        </div>
      </div>
      <div className="right">
        <p className="text-2xl font-semibold text-[#2c3338]">{title}</p>
        <p className="text-[#5b5b5b] text-lg my-4">{text}</p>
        <div className="flex gap-4  items-center text-[#0159d3] text-base">
          {link} <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
