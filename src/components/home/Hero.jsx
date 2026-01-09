import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Activity, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-16">
            {/* Background Decor (Optional Gradients) */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-primary opacity-10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-accent-secondary opacity-10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10 py-12">

                {/* Main Content */}
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    {/* Live Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent-primary/20 bg-accent-primary/5 mx-auto">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="text-sm font-mono font-medium text-primary">
                            {formatDate(time)} &bull; {formatTime(time)}
                        </span>
                    </div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-2">
                            <span className="text-gradient">UMANG 2026</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary font-light">
                            Annual Sports & Cultural Fest
                        </p>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-secondary mt-8"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="text-accent-primary" size={20} />
                            <span>10 Jan 2026 – 12 Jan 2026</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-border-color" />
                        <div className="flex items-center gap-2">
                            <MapPin className="text-accent-secondary" size={20} />
                            <span>GEC Buxar</span>
                        </div>
                    </motion.div>

                    <p className="text-xs text-secondary/60 uppercase tracking-widest mt-2">
                        Organized by DSTTE, Bihar
                    </p>
                </div>

                {/* Action Cards */}
                <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
                    <Link to="/sports" className="group relative overflow-hidden rounded-2xl glass p-8 border border-border-color hover:border-accent-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-between relative z-10">
                            <div className="space-y-2">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit text-blue-600 dark:text-blue-400">
                                    <Activity size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Sports Activities</h3>
                                <p className="text-secondary text-sm">Cricket, Volleyball, Badminton & more</p>
                            </div>
                            <ArrowRight className="text-secondary group-hover:text-accent-primary transform group-hover:translate-x-2 transition-all" />
                        </div>
                    </Link>

                    <Link to="/cultural" className="group relative overflow-hidden rounded-2xl glass p-8 border border-border-color hover:border-accent-secondary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-between relative z-10">
                            <div className="space-y-2">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg w-fit text-orange-600 dark:text-orange-400">
                                    <Music size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Cultural Events</h3>
                                <p className="text-secondary text-sm">Singing, Debate, Arts & more</p>
                            </div>
                            <ArrowRight className="text-secondary group-hover:text-accent-secondary transform group-hover:translate-x-2 transition-all" />
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Hero;
