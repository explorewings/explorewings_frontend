import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="bg-black text-gray-100 min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
          <div className="text-center mb-[-60px] mt-[100px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-red-200 via-red-300 to-red-400 bg-clip-text text-transparent">
                About Explore Wings
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Redefining travel and tourism through innovation and excellence since 2017
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-black-900 to-black-950">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-[-40px] bg-gradient-to-r from-red-200 via-red-400 to-red-600 bg-clip-text text-transparent relative inline-block animate-fadein">
                  Our Journey
                  <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-red-400 via-yellow-300 to-red-600 rounded-full opacity-80"></span>
                  {/* Decorative floating orb */}
                  <span className="absolute -top-8 -left-12 w-24 h-24 bg-gradient-to-br from-red-500/20 via-yellow-400/20 to-red-900/30 rounded-full blur-2xl opacity-70 -z-10"></span>
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                Explore Wings began its journey in 2017 with a vision to redefine travel and tourism through innovation and excellence. What started as a passion project has now grown into a trusted name in both the tourism and digital marketing industries.
              </p>
              <p className="text-gray-300 mb-6">
                Over the years, we've proudly served 10+ lakh happy customers, offering unforgettable travel experiences across Kerala. Today, we manage and operate 10 unique resorts in some of the most scenic destinations, delivering comfort, adventure, and memorable moments to every guest.
              </p>
              <p className="text-gray-300">
                But our journey doesn't stop there. As a growing brand-building and resort management company, we focus on expanding and elevating hospitality brands through strategic digital marketing, branding, and operational excellence.
              </p>
            </div>
            <div className=" p-8 flex flex-col gap-4 relative overflow-hidden">
              {/* Border Glow */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-4 rounded-2xl text-center border border-white/10">
                  <p className="text-red-500 text-3xl font-bold">10+</p>
                  <p className="text-gray-300">Resorts</p>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-4 rounded-2xl text-center border border-white/10">
                  <p className="text-red-500 text-3xl font-bold">10L+</p>
                  <p className="text-gray-300">Happy Customers</p>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-4 rounded-2xl text-center border border-white/10">
                  <p className="text-red-500 text-3xl font-bold">2017</p>
                  <p className="text-gray-300">Founded</p>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-4 rounded-2xl text-center border border-white/10">
                  <p className="text-red-500 text-3xl font-bold">2</p>
                  <p className="text-gray-300">Business Verticals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-black-900 to-black-950 ">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl mt-[-70px]">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-red-700 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-200 via-red-400 to-red-600 bg-clip-text text-transparent">Our Vision</h3>
              </div>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>To become a leading force in the tourism and hospitality industry by creating unforgettable travel experiences and empowering resort brands through innovation, quality, and digital excellence.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Inspire travelers to explore new horizons and cultures.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Promote sustainable and responsible tourism practices.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Foster a global community of passionate explorers and partners.</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Leverage technology to enhance every aspect of the travel experience.</li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-red-700 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-200 via-red-400 to-red-600 bg-clip-text text-transparent">Our Mission</h3>
              </div>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  To deliver exceptional travel services and hospitality experiences that exceed customer expectations.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  To manage and promote unique resorts that showcase the beauty and culture of Kerala.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  To support resort and hospitality brands in achieving growth through smart digital marketing, branding, and operational strategies.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  To continuously innovate and adapt to changing travel trends, ensuring long-term satisfaction for both guests and partners.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-black-900 to-black-950">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
         

          {/* Tourism Services */}
          <div className="mb-20">
            <div className="flex items-center mb-14 mt-[-60px]">
              <div className="bg-red-700 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Tourism & Hospitality Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Resort Management: Operating and managing 10+ unique resorts across Kerala with a focus on quality, comfort, and customer satisfaction.",
                "Customized Tour Packages: Curated travel experiences for families, couples, groups, and solo travelers.",
                "Adventure Tourism: Activities like trekking, skydiving, camping, and more to add thrill to your journeys.",
                "Corporate & Educational Tours: End-to-end planning and execution for business retreats and student trips.",
                "24x7 Travel Support: Dedicated customer service to assist travelers anytime, anywhere."
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-6 rounded-2xl border border-white/10 shadow-2xl hover:scale-[1.02] hover:border-white/20 transition-all duration-500 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2 text-red-500">{service.split(':')[0]}</h4>
                  <p className="text-gray-300">{service.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div>
            <div className="flex items-center mb-14">
              <div className="bg-red-700 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Digital Marketing & Branding Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Social Media Management: Strategy, content creation, and account handling for Instagram, Facebook, and more.",
                "Meta Advertising: High-performance ad campaigns on Facebook and Instagram to boost visibility and bookings.",
                "Poster & Video Creation: Engaging visual content tailored for promotions and storytelling.",
                "OTA Management: Maximizing visibility and bookings on platforms like Booking.com, Agoda, and MakeMyTrip.",
                "Website Development: Fast, modern websites built for resorts, hotels, and tourism businesses.",
                "Branding & Identity: Logo design, brand strategy, and creative identity development for hospitality businesses.",
                "Influencer Marketing: Collaboration with travel influencers to expand brand reach."
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-6 rounded-2xl border border-white/10 shadow-2xl hover:scale-[1.02] hover:border-white/20 transition-all duration-500 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2 text-red-500">{service.split(':')[0]}</h4>
                  <p className="text-gray-300">{service.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Footer />
    </motion.div>
  );
};

export default About;

<style>{`
  @keyframes fadein {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadein {
    animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both;
  }
`}</style>