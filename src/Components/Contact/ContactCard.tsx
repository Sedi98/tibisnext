import React from "react";

type Props = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const ContactCard: React.FC<Props> = ({ title, text, icon }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="left">
        <div className="square text-5xl p-2 mx-auto  text-[#0159d3] rounded-3xl">
          {icon}
        </div>
      </div>
      <div className="right text-center">
        <p className="text-2xl font-semibold text-[#2c3338]">{title}</p>
        <p className="text-[#5b5b5b] text-lg my-4">{text}</p>
      </div>
    </div>
  );
};

export default ContactCard;
