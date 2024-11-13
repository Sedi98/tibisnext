import React from "react";
import SectionText from "../Reusable/SectionText";
import SectionTitle from "../Reusable/SectionTitle";
import { FaNotesMedical } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import {
  FaHospitalUser,
  FaUserShield,
  FaUserPlus,
  FaHeartCirclePlus,
  FaBusinessTime,
  FaUserDoctor,
  FaCashRegister,
  FaWallet,
  FaCommentSms,
  FaDesktop,
  FaXRay,
  FaWarehouse,
  FaBed,
  FaBedPulse,
  FaUserNurse,
  FaTabletButton,
  FaBoxArchive,
} from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import {
  TbTransferVertical,
  TbReport,
  TbDeviceHeartMonitor,
} from "react-icons/tb";
import { GiHospitalCross, GiBackwardTime } from "react-icons/gi";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="w-4/5 mx-auto py-24" id="products">
      <div className="p-8">
        <SectionText text="Məhsullarımız" />
        <SectionTitle text="Keyfiyyətli Məhsullar ilə tanış olun" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ProductCard
          title="Medical Information System (MIS)"
          text="
            Pasientin poliklinikada yol xəritəsini təşkil edir. Ambulator şəraitdə ola biləcək bütün sahələrdə avtomatlaşdırılmış həllər təmin edir. Pasientin Xəstəlik Tarixçəsi hərbir həkim üçün asanlıqla əlçatan olur. Öz özlüyündə Xəstə Qəbul, Sığorta, Kassa, Borc Təqib Modulu, Hesabat, Statistika kimi modulları ehtiva edir. İstifadəçilər mərkəzi səlahiyyətləndirmə prinsipi əsasında aidiyyatı bölmələrlə işləyə bilirlər."
          icon={<FaHospitalUser />}
        />

        <ProductCard
          title="Laboratory Information System(LIS)"
          text="
            Pasientlərin testlərinin alınıb barkodlanması, işlənilməsi(cihaz inteqrasiyası daxil), nəticələrin qeydiyyatı, nəticələrin çapı və arxivlənməsi proçesini əvvəldən sona qədər icra edə biləcək tam avtomat sistemdir. Laboratoriya şöbəsində həkim təqsdiqindən sonra, müvafiq şöbələr nəticələri çap edə bilərlər."
          icon={<ImLab />}
        />

        <ProductCard
          title="Hospital Information System (HIS)"
          text="
            Pasientlər Stasionar Qeydiyyatda işlənililib sistemə daxil edilir. Palata təhvil , Reanimasya qəbul etaplarının qeydiyyatı olunur. Pasient sərfiyyatlar, sərfiyyat xərclərin avtomatik hesablanmasını təmin edir. Epiqrizi rahat və tez əldə etmə imkanı verir. Həkim təyinatı, təyinatın icrası , icra olunan dərman və sərfiyyatların anbardan silinib xərclərinin hesablanmasına şərait yaradır."
          icon={<GiHospitalCross />}
        />

        <ProductCard
          title="Səlahiyyət Modulu"
          text="
            Təyin olunmuş şəxs tərəfindən , hər bir istifatəçiyə, icra edəcəyi işə muvafiq səlahiyyətin verilməsini təmin edir. Səlahiyyətlər, istənilən zamanda verilə vəya alına bilər."
          icon={<FaUserShield />}
        />

        <ProductCard
          title="Xəstə Qəbul Modulu"
          text="
            Pasientlərin sürətli qeydiyyatını təmin edir. Qeydiyyatçıya pasientin daha öncə klinikada olub olmaması ilə bağlı rahat axtarış imkanı verir. Əgər pasientdə, hərhansı bir qeydiyyatçı tərəfindən, daha əvvəllər, xüsusi qeyd olunubsa, onu hal hazırda görmək və riskləri azaltmaq kimi imkan verir."
          icon={<FaUserPlus />}
        />

        <ProductCard
          title="Sığorta Modulu"
          text="
            
Sığorta Modulu
Sığortalı pasientlərin sürətli qeydiyyatını təmin edir. Bu moduld, Xəstə Qəbul Modulunda olan funksiyaları ehtiva edir. Eyni zamanda sığortalının sığorta bilgilərinin qeydiyyatını təşkil edir. Sığorta şirkələri ilə reestrlərin mübadiləsini təmin edir."
          icon={<FaHeartCirclePlus />}
        />

        <ProductCard
          title="Randevu"
          text="
           Pasientin daha öncədən müvafiq həkim üzrə randevusun təmin edir. Randevunun həkim tərəfindən görünməsinə, həkim tərəfindən imtinasına vəya dəyişdirilməsinə imkan verir"
          icon={<FaBusinessTime />}
        />

        <ProductCard
          title="Xəstəlik Tarixçəsi Modulu"
          text="
           Pasientin klinikada olduğu bütün tarixlərdə aldığı xidmətlərin nəticələri. O cümlədən Laboratoriya nəticələri və diaqnostiq müayinə nəticələri."
          icon={<GiBackwardTime />}
        />

        <ProductCard
          title="Müalicə Həkimi Modulu"
          text="
            Müvafiq həkimin pasientə verdiyi cavabları sistemə daxil edilməsini təmin edir. Əgər varsa anbardan pasientə olunan sərfiyyatın qeydiyyatı və uçotunu edir."
          icon={<FaUserDoctor />}
        />

        <ProductCard
          title="Kassa Modulu"
          text="
            Sığorta bölməsinin qeydiyyata aldığı franşizalı pasientlərin və Xəstə Qəbulun qeydiyyata aldığı pasientlərin ödəniş etmələrinin təşkili. Kassa aparatlarının İnteqrasiyası mümkündür."
          icon={<FaCashRegister />}
        />

        <ProductCard
          title="Borc Təqib Modulu"
          text="
            Kassa modulunda qismən ödəniş etmiş pasientlərin nəzarətini təmin edir."
          icon={<FaWallet />}
        />

        <ProductCard
          title="Laboratoriya"
          text="
            Alınmış testlərin analizi edəndə sonra, nəticələri mərkəzləşmiş elektron sistemə yarı avtomat vəya tam avtomat daxil etmə imkanı verir. Nəticələri sistemə daxil edərkən, əvvəlki nəticələr ilə Əvvəlki Testlər bölməsində qarşılaşdırmaq mümkündür."
          icon={<FaNotesMedical />}
        />

        <ProductCard
          title="CihazLab"
          text="
            Alınmış testlərin avtomatlaşdırılmış cihazlarda analizinin nəticələrini, analizi edəndə sonra, nəticələri mərkəzləşmiş elektron sistemə tam avtomat vəya yarı avtomat daxil etmə imkanı verir. Nəticələrin sistemə tam avtomat daxil olunması cihazlarla , sistem arasında qurulmuş sistem tərəfindən icra olunur."
          icon={<TbDeviceHeartMonitor />}
        />

        <ProductCard
          title="SmsLab"
          text="
           Laboratoriyada testin həkim tərəfindən imzalanması barədə bildirişin, müvafiq pasientə SMS vasitəsi ilə göndərilməsi"
          icon={<FaCommentSms />}
        />

        <ProductCard
          title="EmailLab"
          text="
            Laboratoriyada test həkim tərəfindən imzalandıqdan sonra, nəticələrin müvafiq pasientə Email vasitəsi ilə göndərilməsi"
          icon={<FaAt />}
        />
        <ProductCard
          title="MonitorLab"
          text="
            Laboratoriyada pasient ardıcıllığının monitorda əks olunması"
          icon={<FaDesktop />}
        />
        <ProductCard
          title="Radiologiya"
          text="
            Şüa diaqnostikaya yönləndirilmiş pasientlərin cavablarının yazılması və çap olunması"
          icon={<FaXRay />}
        />
        <ProductCard
          title="PACS"
          text="
            Şüa diaqnostikada olan görüntülərin arxivləşməsi və müvafiq həkimlər tərəfindən görüntülənməsinin təşkili"
          icon={<FaXRay />}
        />

        <ProductCard
          title="Anbar Modulu"
          text="
            Klinikaya mal materialın qəbulu təmin edir. Eyni zamanda müvafiq mal materialın klinika daxili dövriyyəsi üçün istifadə olunur."
          icon={<FaWarehouse />}
        />
        <ProductCard
          title="Anbar Sifariş Modulu"
          text="
            Klinika daxili mal materialın dövriyyəsi zamanı, müvafiq personallar tərəfindən Anbardara sifrişlərin verilməsi modulu."
          icon={<TbTransferVertical />}
        />
        <ProductCard
          title="Stasionar Modulu"
          text="
            Pasientin stasionarda hərəkətinin tibb personal tərəfindən qeydiyyatı, nəzarətini təmin edir. Əməliyyatxanada olan sərfiyyatların qeydiyyatı. Sistem tərəfindən sərfiyyat xərclərinin dinamik hesablanması."
          icon={<FaBed />}
        />
        <ProductCard
          title="Stasionar Epiqriz"
          text="
            Stasionardan çıxan xəstənin epiqriz məlumatlarının rahat və təz bir zamanda təmin edib çap olunması modulu"
          icon={<FaBedPulse />}
        />
        <ProductCard
          title="Reanimatoloq Təyinatı"
          text="
            Reanimatoloq təyinatlarını sistemə daxil edir. Müvafiq tibb işçiləri təyinatları öz sistemlərində görə və icra edə bilərlər."
          icon={<FaUserNurse />}
        />
        <ProductCard
          title="Təyinat İcra Modulu (Planşetlə)"
          text="
            Reanimatoloqun təyinatının icrasının avtomatlaşmasını təmin edir. Planşetlərlə idarə olunan sistem, insan faktorunu aradan qaldırır və səhv etmə risklərini minimuma salır."
          icon={<FaTabletButton />}
        />
        <ProductCard
          title="Hesabat"
          text="
            Klinikada bütün işlər üzrə hesabatları təmin edir. Rəhbərlik hesabatları, Həkimlər üzrə hesabatlar , Anbar hesabatları, Stasionar Hesabatlar, Sığorta hesabatları və.s"
          icon={<TbReport />}
        />
        <ProductCard
          title="Arxiv Modulu"
          text="
            Pasient məlumatlarının mütamadi arxivləşməsini təmin edir. Lazım olduqda isə əvvəlki məlumatları sistem avtomatik arxivdən oxuyub istifadəçiyə təmin edir."
          icon={<FaBoxArchive />}
        />
      </div>
    </section>
  );
};

export default Products;
