import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Chief Adebayo',
        role: 'Homeowner, Lekki',
        text: 'The marble quality is exceptional. My living room looks like a palace. Highly recommended for anyone looking for premium finishes.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Mrs. Okonjo',
        role: 'Interior Designer',
        text: 'I have worked with many suppliers, but Pass Gold delivers the best cuts and installation. Their attention to detail is unmatched.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Engr. Tunde',
        role: 'Construction Lead',
        text: 'Timely delivery and professional service. We used their granite for our mall project in Abuja and it stands out beautifully.',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Mr. Johnson',
        role: 'Real Estate Developer',
        text: 'Pass Gold International Ventures is our go-to for all luxury tiling needs. Consistent quality and great support.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop'
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-[#0F172A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm">
                        Client Feedback
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
                        Trust & Excellence
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[400px]"
                        >
                            {/* Image Section (Left) */}
                            <div className="md:w-1/3 relative h-64 md:h-auto">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                                <div className="absolute bottom-4 left-4 text-white z-10 md:hidden">
                                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                    <span className="text-xs uppercase tracking-wide opacity-80">{testimonials[currentIndex].role}</span>
                                </div>
                            </div>

                            {/* Content Section (Right) */}
                            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative">
                                <Quote className="text-[#D4AF37]/20 w-16 h-16 mb-6 absolute top-8 right-8" />

                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={20}
                                                className={i < testimonials[currentIndex].rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-200"}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-xl md:text-2xl font-light italic leading-relaxed">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                </div>

                                <div className="mt-auto hidden md:block">
                                    <h4 className="font-bold text-gray-900 text-xl">{testimonials[currentIndex].name}</h4>
                                    <span className="text-sm text-[#D4AF37] uppercase tracking-widest font-bold">{testimonials[currentIndex].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows (Bottom Right) */}
                    <div className="absolute bottom-[-60px] md:bottom-10 right-0 md:right-10 flex gap-4 z-20">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white shadow-lg border border-gray-100 text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-[#D4AF37] shadow-lg text-white hover:bg-black transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
