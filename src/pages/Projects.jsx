import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
    {
        id: 1,
        title: "Luxury Villa in Lekki",
        category: "Residential",
        type: "video",
        src: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761",
        thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Corporate HQ Lobby",
        category: "Commercial",
        type: "image",
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Modern Kitchen Island",
        category: "Interior",
        type: "image",
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Master Ensuite",
        category: "Bathroom",
        type: "image",
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Penthouse Flooring",
        category: "Residential",
        type: "video",
        src: "https://player.vimeo.com/external/494297126.sd.mp4?s=d19b78d2b2c9a9d7c0f1c6d3d9d3a0f1d1d1d1d1&profile_id=164", // Placeholder video
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Hotel Reception",
        category: "Hospitality",
        type: "image",
        src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1000&auto=format&fit=crop"
    }
];

const Projects = () => {
    return (
        <div className="bg-[#F0F4F8] min-h-screen">
            <Navbar />

            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm">
                        Our Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0056b3] mt-4 mb-6">
                        Masterpieces in Stone
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore our curated selection of completed projects, showcasing the timeless elegance and durability of our marble and granite installations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                {project.type === 'video' ? (
                                    <>
                                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                            <div className="w-16 h-16 bg-[#D4AF37]/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform">
                                                <Play size={32} className="text-white ml-1" />
                                            </div>
                                        </div>
                                        {/* Video tag could go here, but for specific video playing UX we might want a modal. For now, visual representation. */}
                                    </>
                                ) : (
                                    <img src={project.src} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                )}

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <button className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider hover:text-[#0056b3] transition-colors">
                                        View Project
                                    </button>
                                    {project.type === 'video' ? <Play size={16} className="text-gray-400" /> : <ImageIcon size={16} className="text-gray-400" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Projects;
