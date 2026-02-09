import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { toggleCart, cartItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '#products' },
        { name: 'Projects', path: '/projects' },
        { name: 'Testimonials', path: '#testimonials' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-[#0056b3]/95 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
                            <img src="/src/assets/logo1.png" alt="Pass Gold Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-serif text-white tracking-wider font-bold leading-none group-hover:text-[#D4AF37] transition-colors">PASS GOLD</span>
                            <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] leading-none mt-1 group-hover:text-white transition-colors">International Ventures</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium tracking-wide uppercase relative overflow-hidden group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Cart Icon */}
                    <div className="hidden md:block ml-8">
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-white hover:text-[#D4AF37] transition-all group"
                        >
                            <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu & Cart */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleCart}
                            className="relative p-1 text-white hover:text-[#D4AF37]"
                        >
                            <ShoppingCart size={24} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#D4AF37] hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-600 hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
