import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const Resorts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [resorts, setResorts] = useState([]);
  const [loading, setLoading] = useState(true);

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
          description: resort.description,
          rating: resort.ratings || 4.5,
          reviews: Math.floor(Math.random() * 2000) + 500
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
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                        {resort.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {resort.description}
                    </p>
                    <div className="flex items-center gap-3 mb-6">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-semibold">{resort.rating}</span>
                      <span className="text-gray-400 text-sm">({resort.reviews} reviews)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                        {resort.price}
                      </span>
                      <button className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                        <span className="relative z-10 flex items-center">
                          Book Now
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
    </section>
  );
};

export default Resorts;