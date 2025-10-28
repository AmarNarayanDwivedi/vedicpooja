import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext.jsx';

export default function Footer() {
  const { t } = useTranslation();
  
  const specialPoojas = ['Griha Pravesh', 'Shubh Vivah', 'Naamkaran Sanskar'];
  const poojaServices = ['Vastu Shanti', 'Pitru Dosh Nivaran', 'Rudrabhishek'];

  return (
    <footer
      className="bg-[#800000] text-orange-100 py-12"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.footerSpecialPoojas}
          </h3>
          <ul>
            {specialPoojas.map((pooja) => (
              <li key={pooja} className="mb-2">
                <Link to="/pooja" className="group hover:text-white transition-colors relative inline-block">
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-orange-200/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  {pooja}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.footerPoojaServices}
          </h3>
          <ul>
            {poojaServices.map((pooja) => (
              <li key={pooja} className="mb-2">
                <Link to="/pooja" className="group hover:text-white transition-colors relative inline-block">
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-orange-200/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  {pooja}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.footerQuickLinks}
          </h3>
          <ul>
            <li className="mb-2">
              <Link to="/about" className="group hover:text-white transition-colors relative inline-block">
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-orange-200/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                {t.navAbout}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/pooja" className="group hover:text-white transition-colors relative inline-block">
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-orange-200/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                {t.navServices}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="group hover:text-white transition-colors relative inline-block">
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-orange-200/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                {t.navBlog}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.footerContactInfo}
          </h3>
          <p className="mb-2">
            Email:{' '}
            <a
              href="mailto:amardwivedi792@gmail.com"
              className="hover:text-white"
            >
              amardwivedi792@gmail.com
            </a>
          </p>
          <p className="mb-2">
            WhatsApp:{' '}
            <a href="https://wa.me/8668552465" className="hover:text-white">
              8668552465
            </a>
          </p>
          <p className="mb-2">
            Instagram:{' '}
            <a
              href="https://www.instagram.com/adityanarayan3081?igsh=eGI5dnZtNWJ6OGo1"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              @adityanarayan3081
            </a>
          </p>
        </div>
      </div>
      <div className="text-center mt-10 pt-6 border-t border-orange-200/20">
        <p className="text-sm text-orange-200">
          &copy; {new Date().getFullYear()} Vedic Pooja. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
