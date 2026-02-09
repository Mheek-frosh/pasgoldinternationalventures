import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const StorySection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0056b3]/5 -z-10 rounded-l-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm block mb-4">
                            Installation Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Watch Our Story <br /> in Action
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            From the selection of the finest slabs to the precision of the final cut,
                            witness the dedication and expertise that goes into every Pass Gold project.
                            Our master craftsmen ensure perfection in every detail.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-xl">1</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Precision Cutting</h4>
                                    <p className="text-gray-500 text-sm">State-of-the-art machinery meets traditional craftsmanship.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-xl">2</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Expert Installation</h4>
                                    <p className="text-gray-500 text-sm">Seamless fitting for a flawless, luxurious finish.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video Container Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-8 border-white group">
                            <video
                                ref={videoRef}
                                className="w-full h-[300px] md:h-[500px] object-cover"
                                poster="https://images.unsplash.com/photo-1620626012053-1c14e0bd3dfc?q=80&w=2000&auto=format&fit=crop"
                                onEnded={() => setIsPlaying(false)}
                            >
                                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                            </video>

                            {/* Overlay Controls */}
                            <div
                                className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                            >
                                <motion.button
                                    onClick={togglePlay}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 cursor-pointer"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        {isPlaying ? (
                                            <Pause className="text-[#D4AF37] fill-[#D4AF37]" size={32} />
                                        ) : (
                                            <Play className="ml-1 text-[#D4AF37] fill-[#D4AF37]" size={32} />
                                        )}
                                    </div>
                                </motion.button>
                            </div>
                        </div>

                        {/* Floating Small Image */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-[30px] overflow-hidden border-4 border-white shadow-xl hidden md:block"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
                                alt="Worker Installing Marble"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
