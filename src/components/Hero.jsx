import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import local asset if available, otherwise fallback to URL for demo
// Assuming hero.png is available based on previous checks
import heroImage from '../assets/hero.png';

const slides = [
    {
        id: 1,
        image: heroImage,
        subtitle: 'Luxury Stone & Architecture',
        title: 'Elevate Your Space with Timeless Marble',
        description: 'Transforming architectural ideas into durable, elegant functional spaces with premium marble tiles.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
        subtitle: 'Exquisite Craftsmanship',
        title: 'Refined Granite for Modern Living',
        description: 'Experience the perfect blend of durability and sophistication with our curated granite collection.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
        subtitle: 'Premium Interiors',
        title: 'Design Your Dream Home Today',
        description: 'From flooring to wall cladding, we provide the finest stone solutions for your luxury projects.',
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0056b3]">
            {/* Background Slider */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    {/* Dark Blue Overlay for "Breathtaking" Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/90 via-[#0056b3]/40 to-black/30 z-10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/20 z-10"></div>

                    <img
                        src={slides[currentSlide].image}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
                <div className="max-w-4xl">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-base mb-6 uppercase flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-[#D4AF37]"></span>
                                {slides[currentSlide].subtitle}
                            </h2>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl font-light mb-12 leading-relaxed drop-shadow-md">
                                {slides[currentSlide].description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <motion.a
                                    href="#products"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-[#D4AF37] text-white font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-[#0056b3] transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] border-2 border-transparent"
                                >
                                    Explore Collection
                                    <ArrowRight size={24} />
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#0056b3] hover:border-white transition-all backdrop-blur-sm"
                                >
                                    Get a Quote
                                </motion.a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 ${index === currentSlide ? 'w-12 bg-[#D4AF37]' : 'w-3 bg-gray-300'
                            } h-2 rounded-full`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
