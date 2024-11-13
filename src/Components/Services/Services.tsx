import React from "react";
import SectionText from "../Reusable/SectionText";
import SectionTitle from "../Reusable/SectionTitle";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoCode } from "react-icons/go";
import { FaQuestion } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="w-4/5 mx-auto py-24" id="services">
      <div className="p-8">
        <SectionText text="Xidmətlərimiz" />
        <SectionTitle text="Sizə professional şəkildə xidmət göstəririk" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ServiceCard
          title="Servis"
          text="
            Fasiləsiz xidmətimizi ən böyük üstünlüklərimizdən saya bilərik.
            Bütün iş vaxtlarında peşəkar proqramlaşdırma komandamızla
            göstərdiyimiz xidmət, müştəri məmnunluğunun əsas
            göstəricilərindəndir. Olunan müraciətlərin hamısı qeydə alınır və
            problemin həlli istiqamətində atılan bütün addımlar rəhbərlik
            tərəfindən daim diqqət mərkəzində olur."
          icon={<RiCustomerService2Line />}
          link="Ətraflı"
        />

        <ServiceCard
          title="Optimizasiya"
          text="
            Ozü ozünü təkminləşdirən sistemimizi daim inkişaf etdiririk. Qazanılmış hər bir təcrübə sistemdə əksini tapır ki, bu da öz növbəsində müəsisələrin işinin daha təkmil, daha sürətli təşkilində əvəzsiz rol oynayır. Sistemdə mütamadi aparılan texniki və proflaktik tədbirlər iş saatlarından sonra tətbiq olunduğu üçün istifadəçilər gündəlik iş rejiminə rahat davam edə bilirlər."
          icon={<GoCode />}
          link="Ətraflı"
        />

        <ServiceCard
          title="Əlçatanlılıq"
          text="
            Peşəkar komandamız tam tərkibdə yerli mütəxəssislərdən ibarət olduğu üçün bizə olan müraciətləriniz sizin iş qrafikinizə tam uyğun olur ki, gün ərzində etdiyiniz müraciətlər zamanında həllini tapır. Mütamadi təşkil olunan canlı ğörüşlərdə də olunan müraciətlər barədə bilgilər verilir."
          icon={<FaQuestion />}
          link="Ətraflı"
        />

        <ServiceCard
          title="Servis"
          text="
            Fasiləsiz xidmətimizi ən böyük üstünlüklərimizdən saya bilərik.
            Bütün iş vaxtlarında peşəkar proqramlaşdırma komandamızla
            göstərdiyimiz xidmət, müştəri məmnunluğunun əsas
            göstəricilərindəndir. Olunan müraciətlərin hamısı qeydə alınır və
            problemin həlli istiqamətində atılan bütün addımlar rəhbərlik
            tərəfindən daim diqqət mərkəzində olur."
          icon={<RiCustomerService2Line />}
          link="Ətraflı"
        />
      </div>
    </section>
  );
};

export default Services;
