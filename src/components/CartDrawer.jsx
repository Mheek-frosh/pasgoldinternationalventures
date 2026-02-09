import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        address: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckout = () => {
        if (!customerDetails.name || !customerDetails.address || !customerDetails.phone) {
            alert('Please fill in all details to proceed.');
            return;
        }

        const itemsList = cartItems.map(item =>
            `- ${item.name} (${item.type}) x ${item.quantity} sqm @ ${item.price}`
        ).join('\n');

        const message = `*New Order Request*\n\n*Customer Details:*\nName: ${customerDetails.name}\nAddress: ${customerDetails.address}\nPhone: ${customerDetails.phone}\n\n*Order Summary:*\n${itemsList}\n\n*Total Estimate:* ₦${cartTotal.toLocaleString()}\n\nPlease confirm availability and delivery costs.`;

        const url = `https://wa.me/2347054885172?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-[#0056b3] text-white flex justify-between items-center shadow-md">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={24} />
                                <h2 className="text-xl font-bold font-serif">Your Cart</h2>
                                <span className="bg-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded-full">
                                    {cartItems.length} items
                                </span>
                            </div>
                            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
                                    <ShoppingBag size={64} className="mb-4" />
                                    <p className="text-lg">Your cart is empty</p>
                                    <button onClick={() => setIsCartOpen(false)} className="mt-4 text-[#0056b3] font-bold hover:underline">
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 relative group">
                                                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${item.gradient} flex-shrink-0`}></div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                                    <p className="text-xs text-gray-500 mb-2">{item.price}</p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                                                            >-</button>
                                                            <span className="px-2 text-sm font-bold">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                                                            >+</button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-red-400 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition-colors ml-auto"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Checkout Form */}
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <h3 className="text-lg font-bold text-[#0056b3] mb-4 flex items-center gap-2">
                                            Checkout Details
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={customerDetails.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your full name"
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={customerDetails.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your phone number"
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Delivery Address</label>
                                                <textarea
                                                    name="address"
                                                    value={customerDetails.address}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter full delivery address"
                                                    rows="2"
                                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] transition-all resize-none"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Footer / Total */}
                        <div className="p-6 bg-gray-50 border-t border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-500 font-medium">Total Estimate</span>
                                <span className="text-2xl font-bold text-[#0056b3]">₦{cartItems.reduce((acc, item) => {
                                    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
                                    return acc + (price * item.quantity);
                                }, 0).toLocaleString()}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                disabled={cartItems.length === 0}
                                className="w-full py-4 bg-[#D4AF37] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#b5952f] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                Confirm Order via WhatsApp
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-3">
                                Detailed invoice will be sent after confirmation.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
