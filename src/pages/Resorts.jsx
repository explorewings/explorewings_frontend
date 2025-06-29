import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MapPin, Star, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { supabase } from '../lib/supabaseClient';
import Footer from '../components/Footer';

const Resorts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [resorts, setResorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedResort, setSelectedResort] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch resorts from Supabase
  useEffect(() => {
    const fetchResorts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('resorts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        // Transform data to match UI structure
        const formattedData = data.map(resort => ({
          id: resort.id,
          title: resort.location,
          price: `₹${resort.price.toLocaleString('en-IN')}`,
          image: resort.image1 || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          image2: resort.image2 || resort.image1 || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          image3: resort.image3 || resort.image1 || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          description: resort.description,
          rating: resort.ratings || 4.5,
          reviews: Math.floor(Math.random() * 2000) + 500,
          price_value: resort.price
        }));

        setResorts(formattedData);
      } catch (error) {
        console.error('Error fetching resorts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResorts();
  }, []);

  const handleViewNow = (resort) => {
    setSelectedResort(resort);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResort(null);
  };

  const filteredResorts = resorts.filter(resort =>
    resort.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resort.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mix-blend-overlay filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mix-blend-overlay filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mix-blend-overlay filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl py-12 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 mt-20">
            <span className="bg-gradient-to-r from-red-200 via-red-400 to-red-600 bg-clip-text text-transparent">
              Our Resorts
            </span>
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto mb-8 md:mb-12 px-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search resorts..."
              className="w-full px-4 py-3 pl-12 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </motion.div>

        {/* Resort Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-gray-900/50 via-gray-900/30 to-gray-900/50 border border-white/10 p-6 h-[500px] animate-pulse"
                >
                  <div className="h-48 mb-6 rounded-2xl bg-gray-800/50"></div>
                  <div className="h-6 w-3/4 bg-gray-800/50 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-800/50 rounded mb-2"></div>
                  <div className="h-4 w-2/3 bg-gray-800/50 rounded mb-6"></div>
                  <div className="h-4 w-1/4 bg-gray-800/50 rounded"></div>
                </motion.div>
              ))
            ) : filteredResorts.length > 0 ? (
              filteredResorts.map((resort) => (
                <motion.div
                  key={resort.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-gray-900/50 via-gray-900/30 to-gray-900/50 border border-white/10 p-4 md:p-6 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-3xl"
                >
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-red-500/50 via-red-600/20 to-transparent rounded-full blur-2xl"></div>

                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={resort.image}
                      alt={resort.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-500"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3 min-h-[3rem]">
                      <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-300 leading-tight">
                        {resort.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300 line-clamp-1">
                      {resort.description}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-white font-semibold">{resort.rating}</span>
                      
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                        {resort.price}
                      </span>
                      <button 
                        onClick={() => handleViewNow(resort)}
                        className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                      >
                        <span className="relative z-10 flex items-center">
                          View Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-red-500/10 via-red-600/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125"></div>
                  <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-gradient-to-tr from-red-500/5 via-red-600/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-12"
              >
                <h3 className="text-xl text-gray-400">
                  {searchQuery 
                    ? `No resorts found for "${searchQuery}"` 
                    : 'No resorts available'}
                </h3>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Resort Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedResort && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[90vw] sm:max-w-4xl max-h-[90vh] sm:max-h-[95vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Decorative Elements */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-30 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-red-500/80 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Swiper */}
              <div className="relative h-48 sm:h-72 md:h-96 lg:h-[500px] rounded-t-3xl overflow-hidden">
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="h-full"
                >
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={selectedResort.image}
                        alt={selectedResort.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={selectedResort.image2}
                        alt={selectedResort.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={selectedResort.image3}
                        alt={selectedResort.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Buttons */}
                

                {/* Resort Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-red-400" />
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      {selectedResort.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-8 lg:p-10">
                
                {/* Price Section */}
                <div className="bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-900/20 p-6 rounded-3xl border border-white/10 backdrop-blur-sm mb-8">
                  <div className="flex flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">Resort Price</h3>
                      <p className="text-gray-400 text-sm">All inclusive stay</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-1">
                        {selectedResort.price}
                      </div>
                      <p className="text-gray-400 text-sm">per night</p>
                    </div>
                  </div>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <span className="text-white font-bold text-lg">{selectedResort.title}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Destination</p>
                  </div>
                  
                  
                  <div className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-bold text-lg">{selectedResort.rating}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Rating</p>
                  </div>
                </div>


                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                    About This Resort
                  </h3>
                  <div className="bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-800/30 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedResort.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      const message = `Hi! I'm interested in booking the ${selectedResort.title} resort for ${selectedResort.price}. Can you please provide more details?`;
                      const whatsappUrl = `https://wa.me/918921309190?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="group flex-1 relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 border border-red-400/20"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Book Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button 
                    onClick={() => {
                      window.open('tel:+918921309190', '_blank');
                    }}
                    className="group flex-1 relative overflow-hidden bg-transparent border-2 border-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:border-red-500 hover:text-red-400 hover:scale-105 backdrop-blur-sm"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Contact Us
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
};

export default Resorts;