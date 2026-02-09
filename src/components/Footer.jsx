import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#002B5B] text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <img src="/src/assets/logo1.png" alt="Pass Gold Logo" className="h-10 w-auto brightness-0 invert" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif text-white tracking-wider font-bold leading-none">PASS GOLD</span>
                                <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] leading-none mt-1">International Ventures</span>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Leading importer and installer of premium marble and granite in Nigeria.
                            Converting houses into homes with luxury finishes.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-[#D4AF37] mt-1 shrink-0" />
                                <span>Shop 21, Marble Plaza,<br />Lekki-Epe Expressway, Lagos.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-[#D4AF37] shrink-0" />
                                <a href="tel:+2347054885172" className="hover:text-[#D4AF37] transition-colors">+234 705 488 5172</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-[#D4AF37] shrink-0" />
                                <a href="mailto:info@passgold.com" className="hover:text-[#D4AF37] transition-colors">info@passgold.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
                            <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Collections</a></li>
                            <li><a href="#projects" className="hover:text-[#D4AF37] transition-colors">Projects</a></li>
                            <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Get Quote</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Pass Gold International Ventures. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black transition-all">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
