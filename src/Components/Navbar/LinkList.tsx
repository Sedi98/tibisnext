import React from "react";

import LinkItem from "./LinkItem";

const LinkList: React.FC = () => {
  return (
    <ul className="flex gap-6 text-lg font-medium ">
      <LinkItem link="#" text="Əsas" />
      <LinkItem link="#about" text="Haqqında" />
      <LinkItem link="#services" text="Xidmətlər" />
      <LinkItem link="#products" text="Məhsullar" />
      <LinkItem link="#contact" text="Əlaqə" />
    </ul>
  );
};

export default LinkList;
