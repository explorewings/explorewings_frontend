import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: "Kochi,Kerala",
    image: "https://i.pinimg.com/736x/9b/a8/3c/9ba83c79ce33fc173557135e968dfaae.jpg",
    rating: 4.9,
    reviews: 2341,
    description: "Tropical paradise with stunning beaches and rich culture",
    span: "col-span-full md:col-span-2 row-span-1"
  },
  {
    id: 2,
    name: "Kovalam, Kerala",
    image: "https://i.pinimg.com/736x/d1/5f/32/d15f32dfc06eb9be94bc51d64d4acb2a.jpg",
    rating: 4.8,
    reviews: 1892,
    description: "Iconic buildings and breathtaking sunsets",
    span: "col-span-full md:col-span-1 row-span-1"
  },
  {
    id: 3,
    name: "Anjuna, Goa",
    image: "https://i.pinimg.com/736x/41/88/46/41884604312499b0fc1c3314ad49858a.jpg",
    rating: 4.9,
    reviews: 2156,
    description: "Best party point in india",
    span: "col-span-full md:col-span-1 row-span-1"
  },
  {
    id: 4,
    name: "Shimla, Himachal Pradesh",
    image: "https://i.pinimg.com/736x/ac/0c/ae/ac0cae60259bd03bfe3782636099d281.jpg",
    rating: 4.9,
    reviews: 1987,
    description: "Majestic temples and world-class skiing destinations",
    span: "col-span-full md:col-span-2 row-span-1"
  }
];

const TopDestinations = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-red-200 via-red-300 to-red-400 bg-clip-text text-transparent">
              Top Destinations
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our most popular destinations that travelers love
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 auto-rows-[minmax(350px,auto)] max-w5xl mx-auto">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className={`${destination.span} group relative overflow-hidden rounded-3xl md:rounded-4xl backdrop-blur-xl bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 border border-white/10 p-8 md:p-10 lg:p-12 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-3xl`}
            >
              {/* Image Container */}
              <div className="absolute inset-0">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                    {destination.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-6">
                  {destination.description}
                </p>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-white text-lg font-semibold">{destination.rating}</span>
                  <span className="text-gray-400 text-base">({destination.reviews} reviews)</span>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl md:rounded-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Floating Orbs */}
              <div className="absolute -right-8 -top-8 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125"></div>
              <div className="absolute -left-8 -bottom-8 w-28 md:w-36 h-28 md:h-36 bg-gradient-to-tr from-white/5 via-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 md:mt-20">
          <Link to="/Packages" className="group relative overflow-hidden bg-gradient-to-r from-black text-white font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-full transition-transform duration-300 hover:scale-105 border border-gray-600 inline-block">
            <span className="relative z-10 flex items-center text-lg md:text-xl">
              View All Packages
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations; 