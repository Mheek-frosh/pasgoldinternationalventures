import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/2347054885172?text=Hello%2C%20I%20came%20across%20your%20website%20and%20I%20would%20like%20to%20inquire%20about%20your%20marble%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
        >
            <MessageCircle size={32} fill="white" className="text-[#25D366]" />
            <span className="absolute right-full mr-4 bg-white text-black text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Chat with us
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
