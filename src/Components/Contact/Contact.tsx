import React from "react";
import SectionText from "../Reusable/SectionText";
import SectionTitle from "../Reusable/SectionTitle";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

import { FaRegEnvelopeOpen } from "react-icons/fa6";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section className="w-4/5 mx-auto py-24" id="contact">
      <div className="p-8">
        <SectionText text="Əlaqə" />
        <SectionTitle text="Sualınız var? Bizimlə əlaqə saxlayın" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ContactCard
          title="Telefon"
          text="+994 51 999 30 50"
          icon={<RiCustomerService2Line />}
        />

        <ContactCard
          title="Email"
          text="
            info@tibis.az"
          icon={<FaRegEnvelopeOpen />}
        />

        <ContactCard
          title="Address"
          text="
            Sumqayıt"
          icon={<HiOutlineOfficeBuilding />}
        />
      </div>
    </section>
  );
};

export default Contact;
