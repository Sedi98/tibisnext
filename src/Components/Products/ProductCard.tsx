import React from "react";


type Props = {
  title: string;
  text: string;
  icon: React.ReactNode;
  
};

const ProductCard: React.FC<Props> = ({ title, text, icon }) => {
  return (
    <div className="flex gap-4">
      <div className="left">
        <div className="square text-5xl p-2 text-[#0159d3] rounded-3xl">
          {icon}
        </div>
      </div>
      <div className="right">
        <p className="text-2xl font-semibold text-[#2c3338]">{title}</p>
        <p className="text-[#5b5b5b] text-lg my-4">{text}</p>
        
      </div>
    </div>
  );
};

export default ProductCard;
