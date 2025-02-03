"use client";
import React, { useState } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

function LandindPage() {
    const [active, setActive] = useState<string | null>(null);
    const words = [
        {
            text: "The",
            className: "text-white",
        },
        {
            text: "Official",
            className: "text-white",
        },
        {
            text: "Campus",
            className: "text-white",
        },
        {
            text: "Newsletter",
            className: "text-white",
        },
        {
            text: "-",
            className: "text-white",
        },
        {
            text: "StuTalk",
            className: "text-blue-500"
        },
    ];

    const navItems = [
        { text: "Home", href: "#home" },
        { text: "About Us", href: "#about" },
        { text: "Magazines", href: "#magazines" },
        { text: "Broadcast Journalism", href: "#broadcast" },
        { text: "Saadhya", href: "#saadhya" },
        { text: "Blogs", href: "#blogs" },
        { text: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const backgroundVariants = {
        initial: {
            scale: 1,
            rotate: 0,
        },
        animate: {
            scale: [1, 1.5, 1],
            rotate: [0, 45, 0],
        }
    };

    return (
        <div className="w-full min-h-screen bg-black">
            {/* Navigation */}
            <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#home">Home</HoveredLink>
                            <HoveredLink href="#features">Features</HoveredLink>
                            <HoveredLink href="#highlights">Highlights</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="About">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#about">About Us</HoveredLink>
                            <HoveredLink href="#team">Our Team</HoveredLink>
                            <HoveredLink href="#mission">Our Mission</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Publications">
                        <div className="grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Magazines"
                                href="#magazines"
                                src="/magazine-cover.jpg"
                                description="Explore our latest magazine publications."
                            />
                            <ProductItem
                                title="Broadcast"
                                href="#broadcast"
                                src="/broadcast-image.jpg"
                                description="Watch our broadcast journalism content."
                            />
                            <ProductItem
                                title="Saadhya"
                                href="#saadhya"
                                src="/saadhya-image.jpg"
                                description="Discover Saadhya initiatives and projects."
                            />
                            <ProductItem
                                title="Blogs"
                                href="#blogs"
                                src="/blog-image.jpg"
                                description="Read our latest blog posts and articles."
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#contact">Get in Touch</HoveredLink>
                            <HoveredLink href="#location">Our Location</HoveredLink>
                            <HoveredLink href="#social">Social Media</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>

            {/* Hero Section with Enhanced Content */}
            <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
                <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-lg">
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            background: "radial-gradient(circle at center, #00ff8c 0%, #00a1ff 25%, #7000ff 50%, #ff0099 75%, #ff8c00 100%)",
                            filter: "blur(100px)",
                            opacity: 0.15,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            rotate: [0, 45, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            background: "radial-gradient(circle at center, #ff8c00 0%, #ff0099 25%, #7000ff 50%, #00a1ff 75%, #00ff8c 100%)",
                            filter: "blur(100px)",
                            opacity: 0.15,
                        }}
                        animate={{
                            scale: [1.5, 1, 1.5],
                            rotate: [0, -45, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                    
                    {/* Enhanced Hero Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <TypewriterEffect words={words} />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-white/80 mt-4 max-w-2xl mx-auto"
                            >
                                <p className="text-xl mb-6">
                                    StuTalk is a student-run forum that serves as the official campus magazine of VBIT, since 2007. 
                                    We design and release two editions comprising a Volume in an academic year namely: 
                                    The Freshmen Edition and The Republic Edition.
                                </p>
                            </motion.div>
                        </div>

                        {/* Magazine Preview Cards */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                                <h3 className="text-xl font-bold text-white mb-2">The Freshmen Edition</h3>
                                <p className="text-white/70">Welcoming new students with stories, insights, and campus highlights</p>
                                <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-white">
                                    Read Latest
                                </button>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                                <h3 className="text-xl font-bold text-white mb-2">The Republic Edition</h3>
                                <p className="text-white/70">Celebrating our nation's spirit through campus achievements and stories</p>
                                <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-white">
                                    Explore
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section with Background */}
            <section id="about" className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: "radial-gradient(circle at center, #7000ff 0%, #00a1ff 50%, #00ff8c 100%)",
                        filter: "blur(100px)",
                        opacity: 0.1,
                    }}
                    variants={backgroundVariants}
                    animate="animate"
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="max-w-4xl text-white">
                    <h2 className="text-4xl font-bold mb-6">About Us</h2>
                    <div className="space-y-6 text-lg">
                        <p className="text-white/80">
                            We are a dynamic student-led media organization dedicated to fostering creativity, 
                            journalistic excellence, and innovative storytelling. Founded in 2020, we've grown 
                            from a small campus initiative to a comprehensive media platform.
                        </p>
                        <p className="text-white/80">
                            Our mission is to provide authentic, engaging content while offering students 
                            hands-on experience in digital media, journalism, and content creation.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-blue-500">500+</h3>
                                <p>Articles Published</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-blue-500">50+</h3>
                                <p>Active Contributors</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-blue-500">10K+</h3>
                                <p>Monthly Readers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Magazines Section with Background */}
            <section id="magazines" className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: "radial-gradient(circle at center, #ff0099 0%, #7000ff 50%, #00a1ff 100%)",
                        filter: "blur(100px)",
                        opacity: 0.1,
                    }}
                    variants={backgroundVariants}
                    animate="animate"
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="max-w-4xl text-white">
                    <h2 className="text-4xl font-bold mb-6">Magazines</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-blue-500">Latest Issue</h3>
                            <p className="text-white/80">
                                "Innovation & Technology" - Spring 2024
                                Featuring cutting-edge developments in campus technology, 
                                student startups, and digital transformation initiatives.
                            </p>
                            <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                Read Now
                            </button>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-blue-500">Previous Editions</h3>
                            <ul className="space-y-2 text-white/80">
                                <li>Winter 2023 - "Cultural Renaissance"</li>
                                <li>Fall 2023 - "Sustainable Future"</li>
                                <li>Summer 2023 - "Arts & Expression"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Broadcast Section with Background */}
            <section id="broadcast" className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: "radial-gradient(circle at center, #00ff8c 0%, #ff0099 50%, #7000ff 100%)",
                        filter: "blur(100px)",
                        opacity: 0.1,
                    }}
                    variants={backgroundVariants}
                    animate="animate"
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="max-w-4xl text-white">
                    <h2 className="text-4xl font-bold mb-6">Broadcast Journalism</h2>
                    <div className="space-y-8">
                        <p className="text-white/80 text-lg">
                            Our broadcast team brings you the latest campus news, events, and stories 
                            through professional-quality video content and live streaming.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-black/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Latest Episodes</h3>
                                <ul className="space-y-3 text-white/80">
                                    <li>Campus News Weekly Roundup</li>
                                    <li>Student Achievement Spotlight</li>
                                    <li>Faculty Interview Series</li>
                                    <li>Sports Coverage & Highlights</li>
                                </ul>
                            </div>
                            <div className="bg-black/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Upcoming Shows</h3>
                                <ul className="space-y-3 text-white/80">
                                    <li>Tech Talk Tuesday - Live</li>
                                    <li>Cultural Festival Coverage</li>
                                    <li>Academic Achievement Awards</li>
                                    <li>Student Life Documentary</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Saadhya Section with Background */}
            <section id="saadhya" className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: "radial-gradient(circle at center, #ff0099 0%, #7000ff 50%, #00a1ff 100%)",
                        filter: "blur(100px)",
                        opacity: 0.1,
                    }}
                    variants={backgroundVariants}
                    animate="animate"
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="max-w-4xl text-white">
                    <h2 className="text-4xl font-bold mb-6">Saadhya</h2>
                    <div className="space-y-6">
                        <p className="text-white/80 text-lg">
                            Saadhya represents our commitment to cultural expression and artistic excellence. 
                            Through this platform, we showcase the diverse talents and creative endeavors of our community.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="bg-black/50 p-6 rounded-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">Art Gallery</h3>
                                <p className="text-white/80">Student artwork and exhibitions</p>
                            </div>
                            <div className="bg-black/50 p-6 rounded-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">Literary Corner</h3>
                                <p className="text-white/80">Poetry and creative writing</p>
                            </div>
                            <div className="bg-black/50 p-6 rounded-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">Cultural Events</h3>
                                <p className="text-white/80">Performances and celebrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blogs Section with Background */}
            <section id="blogs" className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: "radial-gradient(circle at center, #ff0099 0%, #7000ff 50%, #00a1ff 100%)",
                        filter: "blur(100px)",
                        opacity: 0.1,
                    }}
                    variants={backgroundVariants}
                    animate="animate"
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="max-w-4xl text-white">
                    <h2 className="text-4xl font-bold mb-6">Blogs</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-blue-500">Featured Posts</h3>
                            <div className="space-y-4">
                                <div className="bg-black/50 p-4 rounded-lg">
                                    <h4 className="font-semibold">The Future of Student Media</h4>
                                    <p className="text-white/80">Exploring new trends in digital journalism...</p>
                                </div>
                                <div className="bg-black/50 p-4 rounded-lg">
                                    <h4 className="font-semibold">Campus Life Chronicles</h4>
                                    <p className="text-white/80">Stories from our vibrant community...</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-blue-500">Categories</h3>
                            <ul className="space-y-2 text-white/80">
                                <li>Student Life</li>
                                <li>Academic Insights</li>
                                <li>Technology & Innovation</li>
                                <li>Arts & Culture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section with Background */}
            <section id="contact" className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: "radial-gradient(circle at center, #ff0099 0%, #7000ff 50%, #00a1ff 100%)",
                        filter: "blur(100px)",
                        opacity: 0.1,
                    }}
                    variants={backgroundVariants}
                    animate="animate"
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="max-w-4xl text-white text-center">
                    <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>
                    <div className="flex justify-center items-center space-x-8">
                        <a 
                            href="mailto:your.email@example.com" 
                            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail className="w-8 h-8" />
                        </a>
                        <a 
                            href="https://github.com/yourusername" 
                            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-8 h-8" />
                        </a>
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>
                        <a 
                            href="https://instagram.com/yourusername" 
                            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="w-8 h-8" />
                        </a>
                    </div>
                    <p className="mt-8 text-white/60">
                        Feel free to reach out to us through any of these platforms
                    </p>
                </div>
            </section>
        </div>
    );
}

export default LandindPage;
