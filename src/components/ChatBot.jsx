import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';
// Ideally, import a custom professional agent image here if available:
// import agentImage from '../assets/agent.png';

const questions = [
    "I want to get a quote",
    "Do you have Carrara White in stock?",
    "What is your delivery timeline?",
    "I need installation services",
    "Can I see more project samples?"
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleQuestionClick = (q) => {
        setMessage(q);
        inputRef.current?.focus();
    };

    const handleSend = () => {
        if (!message.trim()) return;

        // Simulate bot thinking
        setIsTyping(true);
        setTimeout(() => {
            const url = `https://wa.me/2347054885172?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            setIsTyping(false);
            setMessage('');
            setIsOpen(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl mb-4 w-80 md:w-96 overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-[#0056b3] p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    {/* Replace with agent image if available */}
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Pass Gold Assistant</h3>
                                    <span className="text-xs text-white/80 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-gray-50 h-80 overflow-y-auto flex flex-col gap-3">
                            <div className="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-700">
                                Hello! I'm here to help you finding the perfect stone for your project. How can I assist you today?
                            </div>

                            <div className="mt-auto flex flex-col gap-2">
                                <span className="text-xs text-gray-400 ml-2">Suggested Questions:</span>
                                <div className="flex flex-wrap gap-2">
                                    {questions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleQuestionClick(q)}
                                            className="text-xs bg-white border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1.5 rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors text-left"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!message.trim() || isTyping}
                                className="p-2 bg-[#D4AF37] text-white rounded-full hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-[#D4AF37] rounded-full shadow-lg flex items-center justify-center text-white relative group"
            >
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <MessageSquare size={28} />
                    )}
                </AnimatePresence>

                {/* Tooltip */}
                {!isOpen && (
                    <span className="absolute right-16 bg-black text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Chat with us
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatBot;
