import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aravind Menon",
      review: "One of the best experiences we've ever had! The team at Explore Wings knows exactly how to make guests feel special. The Munnar resort was a dream – peaceful, scenic, and the hospitality was top-notch!"
    },
    {
      id: 2,
      name: "Devi Pillai",
      review: "Truly unforgettable! From check-in to check-out, the Explore Wings staff treated us like family. Beautiful rooms, great food, and perfect location. Highly recommend for anyone visiting Kerala."
    },
    {
      id: 3,
      name: "Krishna Kumar",
      review: "Explore Wings made our Kerala trip smooth and memorable. The Munnar resort was cozy, clean, and surrounded by nature. Great service and warm people – we'll definitely come back!"
    },
    {
      id: 4,
      name: "Meera Nair",
      review: "If you're looking for comfort, nature, and genuine hospitality – Explore Wings is it. We stayed at their Munnar property and were blown away by the views and the friendly team."
    },
    {
      id: 5,
      name: "Suresh Warrier",
      review: "Such an amazing stay! The rooms were clean, the food was delicious, and the staff was always ready to help. Big thumbs up to Explore Wings for giving us the best holiday in Kerala."
    },
    {
      id: 6,
      name: "Lakshmi Iyer",
      review: "I've traveled across many places in India, but Explore Wings stands out. The hospitality, care, and professionalism of the staff are commendable. Munnar resort was simply beautiful!"
    },
    {
      id: 7,
      name: "Vishnu Nambiar",
      review: "Peaceful environment, professional team, and amazing service. Explore Wings delivered an authentic Kerala stay with comfort and care. Perfect for family trips and couples."
    },
    {
      id: 8,
      name: "Anjali Unni",
      review: "Explore Wings knows how to create magical stays. Woke up to misty mornings in Munnar and enjoyed evenings with delicious local food. Truly felt like a home away from home!"
    },
    {
      id: 9,
      name: "Mohan Das",
      review: "From start to finish, it was a seamless experience. Explore Wings gave us not just a place to stay but a memorable story to tell. Every detail was thoughtfully planned."
    },
    {
      id: 10,
      name: "Sarika Kurup",
      review: "Kerala at its best! The Explore Wings team made our trip stress-free and joyful. Their Munnar property is well-maintained, with breathtaking views and caring staff. Highly recommend!"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        <div className="text-center mb-20 mt-[-80px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-red-200 via-red-400 to-red-600 bg-clip-text text-transparent ">
              Testimonials
            </span>
          </h2>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={false}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          className="pb-12 testimonial-swiper "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="group relative overflow-hidden rounded-3xl md:rounded-4xl backdrop-blur-xl bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-900/20 border border-white/10 p-8 md:p-10 lg:p-12 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-3xl h-[380px] md:h-[400px] lg:h-[420px] flex flex-col justify-between">
                {/* Floating Orbs */}
                <div className="absolute -right-8 -top-8 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125"></div>
                <div className="absolute -left-8 -bottom-8 w-28 md:w-36 h-28 md:h-36 bg-gradient-to-tr from-white/5 via-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl md:rounded-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 " fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg md:text-xl overflow-hidden text-ellipsis line-clamp-5">"{testimonial.review}"</p>
                <p className="text-white font-medium text-base md:text-lg">- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
          .testimonial-swiper .swiper-pagination {
            margin-top: 2.5rem; /* mt-10 */
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;