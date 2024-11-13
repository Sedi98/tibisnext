import React from "react";
import Link from "next/link";

type Props = {
    text: string
    link:string
};

const LinkItem: React.FC<Props> = ({text,link}) => {
  return (
    <li>
      <Link
        href={link}
       
        className="text-[#2c3338] font-semibold hover:text-blue-500 transition-colors relative after:w-0 after:h-0.5 after:bg-blue-500 after:absolute after:-bottom-2 after:left-1/2 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ease-in-out"
      >
        {text}
      </Link>
    </li>
  );
};

export default LinkItem;
