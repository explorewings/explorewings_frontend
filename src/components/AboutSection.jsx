import React from 'react';
import { Mountain, Map, Globe, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" >
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0">
        {/* Red background flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-red-600/30 via-red-500/20 to-red-400/30 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20" >
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-[-70x] md:mt-[-100px]" >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Image Section - Left */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-3xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1 max-w-[90%] mx-auto">
              {/* Glowing border effect */}
              
              <div className="relative rounded-3xl p-1">
                {/* Red flare behind image */}
                <img 
                  src="/images/ew12.png" 
                  alt="Travel adventure" 
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/3] rounded-3xl relative z-10"
                />
                
                {/* Floating decorative elements */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
                
                {/* Gradient overlay for blending */}
                
                {/* Enhanced floating stats */}
                
                
                {/* Floating sparkles */}
                <div className="absolute top-4 right-4 opacity-60">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section - Right */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-black text-white mb-8 leading-tight">
                We Craft{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-500 to-red-800">
                    Unforgettable
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </span>
                <br />Travel Experiences
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Founded in 2010, we've been transforming travel dreams into reality for over a decade. Our team of passionate explorers and local experts create journeys that go beyond the ordinary.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-full text-sm text-red-400 font-medium">
                    Authentic
                  </span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-full text-sm text-red-400 font-medium">
                    Custom Iterations
                  </span>
                  </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative overflow-hidden bg-gradient-to-r from-black text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-black/30 border border-gray-600">
                  <Link to="/About">
                  <span className="relative z-10 flex items-center text-lg">
                    About Us
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                  </Link>
                </button>
                
                <button className="group relative bg-black/50 hover:bg-black/70 text-white font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm">
                <Link to="/Resorts">
                  <span className="flex items-center text-lg relative z-10">
                    View Resorts
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />

                  </span>
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;