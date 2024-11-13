import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo and Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-2 uppercase">
            Tibis<span className="text-white">.</span>
          </h2>
          <p>Bazar ertəsi – Şənbə</p>
          <p>9:00 – 18:00</p>
          <p className="mt-4 font-semibold">Zəng: 994 51 999 30 50 </p>
          <button className="mt-4 px-4 py-2 border border-teal-400 rounded-full text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition">
            Email yaz
          </button>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-teal-400 transition" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-teal-400 transition" href="/team">
                Team
              </Link>
            </li>
            <li>
              <Link className="hover:text-teal-400 transition" href="/showcase">
                Showcase
              </Link>
            </li>
            <li>
              <Link className="hover:text-teal-400 transition" href="/news">
                News
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                className="hover:text-teal-400 transition"
                href="/services/websites"
              >
                Websites & Ecommerce
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-teal-400 transition"
                href="/services/mobile-apps"
              >
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-teal-400 transition"
                href="/services/creative"
              >
                Creative Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-teal-400 transition"
                href="/services/marketing"
              >
                Marketing Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <Link
              className="hover:text-teal-400 transition"
              href="https://facebook.com"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              className="hover:text-teal-400 transition"
              href="https://youtube.com"
            >
              <FaYoutube size={24} />
            </Link>
            <Link
              className="hover:text-teal-400 transition"
              href="https://instagram.com"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              className="hover:text-teal-400 transition"
              href="https://whatsapp.com"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
