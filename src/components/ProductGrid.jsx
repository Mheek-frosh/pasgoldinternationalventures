import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingCart, Check } from 'lucide-react';

const marbles = [
    {
        id: 1,
        name: 'Carrara White',
        price: '₦25,000 / sqm',
        type: 'Luxury',
        origin: 'Italy',
        description: 'Classic Italian marble with soft white background and grey veining. Perfect for bathrooms and flooring.',
        stock: 'Available',
        gradient: 'from-gray-100 via-gray-200 to-gray-100',
    },
    {
        id: 2,
        name: 'Marquina Black',
        price: '₦35,000 / sqm',
        type: 'Premium',
        origin: 'Spain',
        description: 'Striking black marble with contrasting white veins. Ideal for statement walls and countertops.',
        stock: 'Available',
        gradient: 'from-gray-900 via-black to-gray-800',
    },
    {
        id: 3,
        name: 'Emperador Dark',
        price: '₦30,000 / sqm',
        type: 'Classic',
        origin: 'Spain',
        description: 'Rich dark brown marble with white and crystal veins. Adds warmth and elegance to any space.',
        stock: 'Low Stock',
        gradient: 'from-[#4a3b2a] via-[#3a2b1a] to-[#4a3b2a]',
    },
    {
        id: 4,
        name: 'Calacatta Gold',
        price: '₦45,000 / sqm',
        type: 'Exclusive',
        origin: 'Italy',
        description: 'Rare and exclusive white marble with dramatic gold and grey veining. The epitome of luxury.',
        stock: 'Available',
        gradient: 'from-white via-yellow-50 to-white',
    },
    {
        id: 5,
        name: 'Travertine Beige',
        price: '₦22,000 / sqm',
        type: 'Natural',
        origin: 'Turkey',
        description: 'Natural beige stone with distinct porous texture. excellent for outdoor areas and rustic interiors.',
        stock: 'Available',
        gradient: 'from-[#e6d0ac] via-[#d6c09c] to-[#e6d0ac]',
    },
    {
        id: 6,
        name: 'Forest Green',
        price: '₦28,000 / sqm',
        type: 'Exotic',
        origin: 'India',
        description: 'Deep green marble with web-like veins. Brings a touch of nature and exotic beauty.',
        stock: 'Available',
        gradient: 'from-[#1a2f1a] via-[#0a1f0a] to-[#1a2f1a]',
    },
];

const ProductGrid = () => {
    const [selectedMarble, setSelectedMarble] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const openModal = (marble) => {
        setSelectedMarble(marble);
        setQuantity(1);
    };

    const closeModal = () => {
        setSelectedMarble(null);
    };

    const incrementQuantity = () => setQuantity(q => q + 1);
    const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

    const addToCart = () => {
        if (!selectedMarble) return;
        const message = `Hello Pass Gold, I am interested in *${selectedMarble.name}*.\n\nQuantity: ${quantity} sqm\nPrice: ${selectedMarble.price}\n\nPlease provide a formal quote.`;
        const url = `https://wa.me/2347054885172?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="products" className="py-24 bg-[#F0F4F8] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm">
                        Our Collection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0056b3] mt-4 mb-4">
                        Curated Marble Selection
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        transition={{ duration: 1 }}
                        className="h-1 bg-[#D4AF37] mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {marbles.map((marble, index) => (
                        <motion.div
                            key={marble.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
                            onClick={() => openModal(marble)}
                        >
                            {/* Marble Texture Fallback */}
                            <div className={`h-64 w-full bg-gradient-to-br ${marble.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/marble.png')]"></div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="px-6 py-2 bg-[#D4AF37] text-white font-medium rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold">{marble.type}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-1">{marble.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-lg font-bold text-gray-900">{marble.price}</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <div className={`w-2 h-2 rounded-full ${marble.stock === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        {marble.stock}
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">{marble.origin}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Product Details Modal */}
            <AnimatePresence>
                {selectedMarble && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Side */}
                            <div className={`md:w-1/2 bg-gradient-to-br ${selectedMarble.gradient} p-8 relative flex items-center justify-center`}>
                                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/marble.png')]"></div>
                                <div className="relative z-10 text-center">
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-black/80">{selectedMarble.name}</h3>
                                    <span className="inline-block mt-2 px-3 py-1 bg-black/10 rounded-full text-sm font-bold uppercase tracking-wider">{selectedMarble.type}</span>
                                </div>
                            </div>

                            {/* Details Side */}
                            <div className="md:w-1/2 p-8 md:p-10 flex flex-col relative overflow-y-auto">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X size={24} className="text-gray-500" />
                                </button>

                                <div className="mb-6">
                                    <span className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase mb-2 block">Available In Stock</span>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMarble.name}</h2>
                                    <p className="text-2xl font-light text-gray-900">{selectedMarble.price}</p>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {selectedMarble.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Origin</span>
                                        <span className="font-bold text-gray-900">{selectedMarble.origin}</span>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Finish</span>
                                        <span className="font-bold text-gray-900">Polished</span>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-bold text-gray-700">Quantity (sqm)</span>
                                        <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
                                            <button onClick={decrementQuantity} className="p-1 hover:text-[#D4AF37]"><Minus size={18} /></button>
                                            <span className="font-bold w-4 text-center">{quantity}</span>
                                            <button onClick={incrementQuantity} className="p-1 hover:text-[#D4AF37]"><Plus size={18} /></button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={addToCart}
                                        className="w-full py-4 bg-[#D4AF37] text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                                    >
                                        <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                                        Request Quote / Add to Cart
                                    </button>
                                    <p className="text-center text-gray-400 text-xs mt-3">
                                        *Checkout redirects to WhatsApp for secure processing
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProductGrid;
