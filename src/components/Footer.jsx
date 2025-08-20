import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Packages', to: '/Packages' },
    { name: 'Resorts', to: '/Resorts' },
    { name: 'About', to: '/About' },
    { name: 'Contact', to: '/Contact' },
  ];

  const socialLinks = [
    { icon: <Instagram />, href: 'https://instagram.com', name: 'Instagram' },
    { icon: <Facebook />, href: 'https://facebook.com', name: 'Facebook' },
    { icon: <Twitter />, href: 'https://twitter.com', name: 'Twitter' },
  ];

  return (
    <footer className="relative bg-transparent text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-900/30 via-transparent to-transparent"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-red-600/10 via-red-500/5 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-red-600/10 via-red-500/10 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/ewlogo.png" alt="Explore Wings Logo" className="w-8 h-6" />
              <div>
                <h2 className="text-2xl font-bold">EXPLORE WINGS</h2>
                <p className="text-sm text-gray-400">Your Journey, Our Passion</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting unforgettable travel experiences since 2010. Let's explore the world together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center">
                    <Send className="w-4 h-4 mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Asiatic Business Centre (6th Floor), Kazhakuttam, Thiruvananthapuram, Kerala </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@explorewings.com" className="hover:text-red-400 transition-colors duration-300">info@explorewings.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+1234567890" className="hover:text-red-400 transition-colors duration-300">+91 80782 78032</a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider uppercase">Stay Connected</h3>
            
           
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Explore Wings. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 