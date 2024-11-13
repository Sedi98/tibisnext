import React from "react";

type Props = {
  text: string;
};

const SectionText: React.FC<Props> = ({ text }) => {
  return (
    <h4 className=" text-[#0159d3] text-[17px] text-center font-[700] uppercase py-3 antialiased">
      {text}
    </h4>
  );
};

export default SectionText;
