import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import Products from "@/Components/Products/Products";
import Services from "@/Components/Services/Services";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
