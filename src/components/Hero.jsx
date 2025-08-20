import React, { useState, useEffect, useCallback } from 'react'
import { Plane, MapPin, Star, ArrowRight, Globe, Compass } from 'lucide-react'
import { Link } from 'react-router-dom';
// Removed LightRays background; using CSS aurora instead

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  // Throttle mouse move handler with increased delay
  const handleMouseMove = useCallback((e) => {
    // Only update every 100ms instead of 50ms
    if (!handleMouseMove.throttleTimer) {
      handleMouseMove.throttleTimer = setTimeout(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        })
        handleMouseMove.throttleTimer = null
      }, 100)
    }
  }, [])

  useEffect(() => {
    setIsLoaded(true)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (handleMouseMove.throttleTimer) {
        clearTimeout(handleMouseMove.throttleTimer)
      }
    }
  }, [handleMouseMove])

  // Reduce number of floating elements
  const floatingElements = [
    { icon: Plane, delay: '0s', position: 'top-20 left-20' },
    { icon: Star, delay: '2s', position: 'bottom-40 left-32' }
  ]

  return (
    <section className="relative w-full bg-gray-900/80">
      {/* Dynamic Background with Parallax - Simplified gradients */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base gradient layer */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/80 to-gray-800 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        />

        {/* Simplified gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-overlay filter blur-2xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-full mix-blend-overlay filter blur-2xl"></div>
        </div>

        {/* Aurora/Nebula Effect (pure CSS, performant) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2] aurora-mask">
          <div className="aurora-blob aurora-1" />
          <div className="aurora-blob aurora-2" />
          <div className="aurora-blob aurora-3" />
          <div className="stars" />
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-[1] md:from-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-[1] md:from-black/60 md:to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/45 z-[1] md:from-black/30 md:to-black/30"></div>
        {/* Bottom fade to avoid visible cutoff */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black/95 z-[3]"></div>
      </div>

      {/* Floating elements with reduced animation complexity */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} text-white/10 animate-float hidden lg:block`}
          style={{ 
            animationDelay: element.delay,
            animationDuration: '10s'
          }}
        >
          <element.icon size={32} />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 pt-24 lg:pt-28">
        {/* Main Heading with Gradient Text */}
        <h1 className={`text-5xl sm:text-6xl md:text-8xl font-black mb-6 mt-10 leading-tight transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Explore
          </span>
          <br />
          <span className="text-gray-100">The Unseen</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl lg:text-2xl mb-12 text-gray-400 max-w-2xl leading-relaxed transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Embark on extraordinary adventures and discover breathtaking destinations that will leave you with memories to last a lifetime
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <button className="group bg-black/20 backdrop-blur-md border border-gray-700/50 hover:bg-black/30 text-gray-300 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-transform duration-300 hover:scale-105">
          <Link to="/Packages">
            <span className="flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            </Link>
          </button>
          
          <button className="group bg-black/20 backdrop-blur-md border border-gray-700/50 hover:bg-black/30 text-gray-300 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-transform duration-300 hover:scale-105">
          <Link to="/Resorts">
            <span className="flex items-center">
              View Resorts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

            </span>
            </Link>
          </button>
        </div>

        {/* Stats Section - Simplified animations */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 sm:mt-12 w-full max-w-6xl px-4 transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-80' : 'translate-y-10 opacity-0'}`}>
          {[
            { number: '150+', label: 'Destinations', icon: Globe },
            { number: '50K+', label: 'Travelers', icon: Plane },
            { number: '4.9', label: 'Rating', icon: Star }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer relative">
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-gray-700/40 transition-transform duration-300 hover:scale-102">
                <div className="mb-3 text-gray-400">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        /* Aurora blobs */
        .aurora-blob {
          position: absolute;
          width: 110vw;
          height: 110vw;
          filter: blur(80px);
          opacity: 0.8;
          animation: auroraShift 18s ease-in-out infinite alternate;
          will-change: transform;
        }
        .aurora-1 {
          top: -20%;
          left: -10%;
          background: radial-gradient(closest-side, rgba(255, 64, 64, 0.35), rgba(255, 64, 64, 0) 65%);
          animation-duration: 20s;
        }
        .aurora-2 {
          right: -5%;
          bottom: -25%;
          background: radial-gradient(closest-side, rgba(255, 128, 80, 0.28), rgba(255, 128, 80, 0) 65%);
          animation-duration: 22s;
        }
        .aurora-3 {
          top: 10%;
          right: 20%;
          background: radial-gradient(closest-side, rgba(255, 0, 128, 0.22), rgba(255, 0, 128, 0) 65%);
          animation-duration: 24s;
        }
        @keyframes auroraShift {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50%  { transform: translate3d(5%, -3%, 0) rotate(12deg) scale(1.06); }
          100% { transform: translate3d(-5%, 3%, 0) rotate(-10deg) scale(1.1); }
        }

        /* Subtle twinkling stars */
        .stars {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 18% 32%, rgba(255,255,255,0.14) 40%, transparent 41%),
            radial-gradient(1.6px 1.6px at 72% 42%, rgba(255,255,255,0.12) 40%, transparent 41%),
            radial-gradient(1.8px 1.8px at 42% 78%, rgba(255,255,255,0.10) 40%, transparent 41%),
            radial-gradient(1.2px 1.2px at 12% 68%, rgba(255,255,255,0.12) 40%, transparent 41%),
            radial-gradient(1.4px 1.4px at 82% 16%, rgba(255,255,255,0.10) 40%, transparent 41%);
          animation: twinkle 6s ease-in-out infinite;
          opacity: 0.5;
          pointer-events: none;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }

        /* Fade the aurora toward the bottom to blend seamlessly */
        .aurora-mask {
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 65%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%);
                  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 65%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%);
        }
      `}</style>
    </section>
  )
}

export default Hero