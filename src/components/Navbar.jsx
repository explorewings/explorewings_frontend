import React, { useState } from 'react'
import { Menu, X, Instagram, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Packages', to: '/Packages' },
    { name: 'Resorts', to: '/Resorts' },
    { name: 'About', to: '/About' },
    { name: 'Contact', to: '/Contact' }
  ]

  return (
    <>
      <nav 
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '50px',
          border: '0.6px solid rgba(193, 141, 141, 0.38)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-transparent">
                <img 
                  src="/images/ewlogo.png" 
                  alt="Explore Wings Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
                  EXPLORE WINGS
                </h1>
                <p className="text-xs text-gray-200">
                  Your Journey ,Our Passion
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-300 transition-all duration-300 group-hover:w-full"></span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-transparent transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 mt-20 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className={`absolute top-6 left-4 right-4 bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-4 opacity-0'
        }`}>
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-white/90 font-medium rounded-xl transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 ${
                  'animate-fade-in-up'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-white/20 flex justify-start space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 "
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 "
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default Navbar