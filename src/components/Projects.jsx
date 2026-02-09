import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Luxury Villa',
        location: 'Lekki Phase 1',
        description: 'Full marble flooring and wall cladding for a 5-bedroom duplex.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Corporate HQ',
        location: 'Victoria Island',
        description: 'Granite exterior facade and reception area tiling.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Modern Apartment',
        location: 'Ikoyi',
        description: 'Kitchen countertops and bathroom vanity installation.',
        image: 'https://images.unsplash.com/photo-1512918760532-3edbed135119?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Hotel Lobby',
        location: 'Abuja',
        description: 'Italian marble flooring for grand hotel entrance.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Private Estate',
        location: 'Banana Island',
        description: 'Custom mosaic patterns and swimming pool tiling.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000&auto=format&fit=crop',
    }
];

const Projects = () => {
    const scrollContainerRef = useRef(null);

    return (
        <section id="projects" className="py-24 bg-[#F0F4F8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm">
                            Our Portfolio
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0056b3] mt-4">
                            Featured Projects
                        </h2>
                        <p className="text-gray-600 text-lg mt-4 max-w-2xl">
                            Explore our gallery of delivered excellence across residential and commercial spaces.
                        </p>
                    </div>

                    <div className="hidden md:flex gap-2">
                        {/* Custom Navigation indicators or buttons could go here */}
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer"
                        >
                            <div className="relative h-96 overflow-hidden rounded-xl mb-4 shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <span className="text-xs text-[#D4AF37] uppercase tracking-wider bg-black/50 px-2 py-1 rounded backdrop-blur-sm mb-2 inline-block">
                                        {project.location}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* View All Card */}
                    <motion.div
                        className="min-w-[200px] flex items-center justify-center snap-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="#contact" className="flex flex-col items-center text-gray-500 hover:text-[#D4AF37] transition-colors group">
                            <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all">
                                <ChevronRight size={32} />
                            </div>
                            <span className="uppercase tracking-widest text-sm font-bold">View All Projects</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
