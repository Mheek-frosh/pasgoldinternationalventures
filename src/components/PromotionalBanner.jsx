import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PromotionalBanner = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-[#0056b3]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-white font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                        Transform Your Vision
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
                        Are you ready to work with us?
                    </h2>
                    <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-light">
                        Let's collaborate to bring premium stone finishes to your residential or commercial projects.
                        Quality, durability, and elegance guaranteed.
                    </p>

                    <motion.a
                        href="https://wa.me/2347054885172"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-white font-bold text-lg rounded-full shadow-2xl hover:bg-white hover:text-[#0056b3] transition-colors"
                    >
                        Start Your Project
                        <ArrowRight size={24} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default PromotionalBanner;
