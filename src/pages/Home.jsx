import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Projects from '../components/Projects';
import StorySection from '../components/StorySection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

import PromotionalBanner from '../components/PromotionalBanner';
import ChatBot from '../components/ChatBot';

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Hero />
            <ProductGrid />
            <PromotionalBanner />
            <Projects />
            <StorySection />
            <Testimonials />
            <Footer />
            <ChatBot />
        </div>
    );
};

export default Home;
