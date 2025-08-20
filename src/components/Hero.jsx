import React, { useState, useEffect, useCallback } from 'react'
import { Plane, MapPin, Star, ArrowRight, Globe, Hotel } from 'lucide-react'
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
    <section className="relative w-full bg-gray-900/80 ">
      {/* Dynamic Background with Parallax - Simplified gradients */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base gradient layer */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/80 to-gray-800 transition-transform duration-300 ease-out "
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

      {/* Main Content: Fresh split layout */}
      <div className="relative z-10 px-4 pt-24 sm:pt-24 lg:pt-28 ">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 items-center mt-8 md:mt-[80px]">
          {/* Left: Headline + CTAs + Trust badges */}
          <div className={`md:col-span-7 text-white ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} transition-all duration-500`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs sm:text-sm text-gray-200 uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Best vacation planners
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-white bg-clip-text text-transparent">Explore</span>
              <br />
              The <span className="text-gray-100">Unseen</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
              Curated journeys, premium stays, and seamless experiences. Plan your next escape with confidence.
            </p>

            <div className="mt-7 flex flex-row flex-wrap items-center gap-3 sm:gap-4">

              <button className="group w-auto sm:w-auto flex-none bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 hover:scale-[1.02]">
                <Link to="/Resorts">
                  <span className="flex items-center justify-center whitespace-nowrap text-sm sm:text-base">Our Resorts <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /></span>
                </Link>
              </button>
              {/* <button className="group w-1/2 sm:w-auto flex-1 sm:flex-none bg-black/30 backdrop-blur-md border border-white/10 hover:border-white/20 text-gray-200 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 hover:bg-black/40">
                <Link to="/Resorts">
                  <span className="flex items-center justify-center whitespace-nowrap text-sm sm:text-base">View Resorts <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /></span>
                </Link>
              </button> */}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-gray-300/90">
              <div className="flex items-center gap-2">
                <Hotel className="w-5 h-5 text-red-400" />
                <span className="text-sm">500+ Resorts</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-red-400" />
                <span className="text-sm">150+ destinations</span>
              </div>
              
            </div>
          </div>

          {/* Right: Collage cards */}
          <div className={`md:col-span-5 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} transition-all duration-500`}>
            <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
              {/* Card A */}
              <div className="absolute left-0 top-6 w-52 sm:w-60 md:w-64 h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl backdrop-blur-md animate-float-slow">
                <img src="/images/delhi.jpg" alt="Tropical escape" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" /> Delhi
                </div>
              </div>
              {/* Card B */}
              <div className="absolute left-20 sm:left-28 md:left-32 top-24 rotate-6 w-48 sm:w-56 md:w-60 h-56 sm:h-64 md:h-72 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl backdrop-blur-md animate-float">
                <img src="/images/jaipur.jpg" alt="Mountain retreat" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" /> Jaipur
                </div>
              </div>
              {/* Card C */}
              <div className="absolute right-0 md:right-4 top-0 -rotate-6 w-44 sm:w-52 md:w-56 h-56 sm:h-64 md:h-72 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl backdrop-blur-md animate-float-fast">
                <img src="/images/banglore.jpg" alt="City lights" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" /> Banglore
                </div>
              </div>
            </div>
          </div>

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