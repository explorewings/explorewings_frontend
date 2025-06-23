import React from 'react';
import { Globe, Target, Eye, Package, Users, Share2 } from 'lucide-react';

const BentoCard = () => {
  const cards = [
    {
      title: "Services",
      description: "Discover our range of travel experiences and personalized journeys crafted just for you. From luxury getaways to adventure tours, we've got you covered.",
      icon: Globe,
      iconColor: "text-blue-400",
      gradient: "from-red-500/20 via-red-600/10 to-red-900/20",
      hoverGradient: "from-red-500/30 via-red-600/20 to-red-900/30",
      span: "col-span-full md:col-span-2 row-span-1"
    },
    {
      title: "About Us",
      description:"Explore Wings began in 2017 with a vision to transform travel and tourism through innovation. Today, we are a trusted name in hospitality and digital marketing, having served over 10 lakh customers and managing 10 unique resorts across Kerala’s most scenic locations. Beyond travel experiences, we specialize in resort management and brand growth, helping hospitality businesses expand through strategic digital marketing, branding, and operational excellence. Whether you're a traveler seeking unforgettable getaways or a business looking to scale, Explore Wings is dedicated to delivering exceptional experiences and sustainable growth—taking you higher in every journey",
      icon: Users,
      iconColor: "text-purple-400",
      gradient: "from-red-500/20 via-red-600/10 to-red-900/20",
      hoverGradient: "from-red-500/30 via-red-600/20 to-red-900/30",
      span: "col-span-full md:col-span-1 md:row-span-2"
    },
    {
      title: "Mission",
      description: "Our commitment to exceptional travel experiences that go beyond the ordinary. We strive to create meaningful connections through travel.",
      icon: Target,
      iconColor: "text-red-400",
      gradient: "from-red-500/20 via-red-600/10 to-red-900/20",
      hoverGradient: "from-red-500/30 via-red-600/20 to-red-900/30",
      span: "col-span-full sm:col-span-1 row-span-1"
    },
    {
      title: "Vision",
      description: "Shaping the future of travel with innovative experiences and sustainable practices. We envision a world where travel enriches lives.",
      icon: Eye,
      iconColor: "text-green-400",
      gradient: "from-red-500/20 via-red-600/10 to-red-900/20",
      hoverGradient: "from-red-500/30 via-red-600/20 to-red-900/30",
      span: "col-span-full sm:col-span-1 row-span-1"
    },
    {
      title: "Packages",
      description: "Explore our curated travel packages designed to suit every traveler's needs. From weekend getaways to extended adventures, find your perfect journey.",
      icon: Package,
      iconColor: "text-yellow-400",
      gradient: "from-red-500/20 via-red-600/10 to-red-900/20",
      hoverGradient: "from-red-500/30 via-red-600/20 to-red-900/30",
      span: "col-span-full md:col-span-2 row-span-1"
    },
    {
      title: "Social Media",
      description: "Connect with us on social platforms to stay updated with the latest travel trends, exclusive offers, and inspiring travel stories from around the world.",
      icon: Share2,
      iconColor: "text-indigo-400",
      gradient: "from-red-500/20 via-red-600/10 to-red-900/20",
      hoverGradient: "from-red-500/30 via-red-600/20 to-red-900/30",
      span: "col-span-full md:col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-black via-black-900 to-black-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
       

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)] md:auto-rows-[minmax(180px,auto)] mt-[-70px] md:mt-[-140px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.span} group relative overflow-hidden rounded-2xl md:rounded-3xl backdrop-blur-xl bg-gradient-to-br ${card.gradient} border border-white/10 p-6 md:p-8 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-3xl`}
            >
             

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div className={`${card.iconColor} mb-4 md:mb-6`}>
                  <div className="relative">
                    <card.icon className="w-10 h-10 md:w-12 md:h-12 relative z-10" />
                    <div className={`absolute inset-0 ${card.iconColor.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300 line-clamp-4 md:line-clamp-none">
                  {card.description}
                </p>

                {/* Read More Indicator for Mobile */}
                <div className="md:hidden mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tap to explore →
                </div>
              </div>
              
              {/* Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Floating Orbs */}
              <div className="absolute -right-6 -top-6 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125"></div>
              <div className="absolute -left-6 -bottom-6 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-tr from-white/5 via-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default BentoCard;