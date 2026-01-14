import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Trophy, Calendar, ExternalLink, Download, MapPin, Activity, Music, Swords, Clock, User, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { intraEvents, zonalEvents } from '../data/events';
import ParticipatingColleges from '../components/home/ParticipatingColleges';
import WinnerList from '../components/home/WinnerList';

const Home = () => {
    const [view, setView] = useState('landing');
    const [eventStatus, setEventStatus] = useState('Upcoming');

    const location = useLocation();

    const handleBack = () => setView('landing');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const requestedView = params.get('view');
        if (requestedView && ['landing', 'intra', 'zonal'].includes(requestedView)) {
            setView(requestedView);
        }
    }, [location.search]);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day1Start = new Date("2026-01-15T09:00:00");
            const day2Start = new Date("2026-01-16T09:00:00");
            const day3Start = new Date("2026-01-17T09:00:00");
            const eventEnd = new Date("2026-01-18T00:00:00");

            if (now >= eventEnd) {
                setEventStatus('Zonal End');
            } else if (now >= day3Start) {
                setEventStatus('Day 3 Zonal Live');
            } else if (now >= day2Start) {
                setEventStatus('Day 2 Zonal Live');
            } else if (now >= day1Start) {
                setEventStatus('Day 1 Zonal Live');
            } else {
                setEventStatus('Upcoming');
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    // --- LANDING VIEW ---
    const LandingView = () => {
        const videoRef = React.useRef(null);
        const [isPlaying, setIsPlaying] = useState(true);
        const [isMuted, setIsMuted] = useState(true);

        const togglePlay = () => {
            if (videoRef.current) {
                if (isPlaying) videoRef.current.pause();
                else videoRef.current.play();
                setIsPlaying(!isPlaying);
            }
        };

        const toggleMute = () => {
            if (videoRef.current) {
                videoRef.current.muted = !isMuted;
                setIsMuted(!isMuted);
            }
        };

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen pt-16 flex flex-col relative overflow-hidden"
            >
                {/* Hero Section with Video Background - Full Mobile Height */}
                <div className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-center items-center px-4 overflow-hidden group">

                    {/* Video Background */}
                    <div className="absolute inset-0 z-0">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
                        >
                            <source src="/Video/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Overlay Gradient - Stronger on mobile for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-slate-900/40" />
                        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
                    </div>

                    {/* Video Controls - Adjusted for mobile */}
                    <div className="absolute top-24 right-4 md:top-auto md:bottom-8 md:right-8 z-30 flex flex-col md:flex-row gap-3 md:gap-4">
                        <button
                            onClick={togglePlay}
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full text-white transition-all transform hover:scale-110"
                        >
                            {isPlaying ? <Activity size={20} className="animate-pulse" /> : <div className="w-5 h-5 flex items-center justify-center">▶</div>}
                        </button>
                        <button
                            onClick={toggleMute}
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full text-white transition-all transform hover:scale-110"
                        >
                            {isMuted ? <div className="w-5 h-5 flex items-center justify-center">🔇</div> : <div className="w-5 h-5 flex items-center justify-center">🔊</div>}
                        </button>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col justify-center items-center h-full pt-16 pb-12">
                        {/* Live Status Pill */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6 md:mb-8"
                        >
                            <span className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-lg border border-white/20 backdrop-blur-md ${eventStatus.includes('Live') ? 'bg-red-600/90 text-white animate-pulse' :
                                eventStatus === 'Zonal End' ? 'bg-gray-800/90 text-white' :
                                    'bg-white/10 text-brand-orange-light'
                                }`}>
                                {eventStatus === 'Zonal End' ? 'Event Completed' : eventStatus}
                            </span>
                        </motion.div>

                        {/* Title - Responsive Sizing */}
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-tight drop-shadow-2xl"
                        >
                            PATNA DIVISIONAL
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 mt-1 md:mt-2">
                                SPORTS FEST
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-3xl text-gray-200 font-light mb-8 md:mb-10 tracking-widest px-4"
                        >
                            Zonal Level Sports Fest 2026
                        </motion.p>

                        {/* Info Pills */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12 text-white px-2"
                        >
                            <div className="flex items-center gap-2 md:gap-3 bg-white/10 px-4 md:px-6 py-2 md:py-3 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition cursor-default">
                                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-brand-orange" />
                                <span className="text-sm md:text-base font-semibold tracking-wide">15-17 Jan 2026</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 bg-white/10 px-4 md:px-6 py-2 md:py-3 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition cursor-default">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                                <span className="text-sm md:text-base font-semibold tracking-wide">GEC Buxar (Host)</span>
                            </div>
                        </motion.div>

                        {/* Main CTA */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center w-full px-4"
                        >
                            <button
                                onClick={() => setView('zonal')}
                                className="w-full max-w-sm md:w-auto px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-brand-orange to-red-600 text-white rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center justify-center gap-3 group"
                            >
                                View Today's Schedule
                                <ChevronLeft className="rotate-180 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <div className="mt-6 md:mt-8">
                                <button
                                    onClick={() => setView('intra')}
                                    className="text-gray-300 hover:text-white font-medium text-sm transition-colors border-b border-transparent hover:border-white/50 pb-1"
                                >
                                    View Past Winners (Intra)
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Featured Events Section */}
                <div className="py-20 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                                FEATURED EVENTS
                            </h2>
                            <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {zonalEvents.filter(e => e.image).map((event, idx) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setView('zonal')}
                                    className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="absolute inset-0 bg-slate-900" />
                                    <img
                                        src={event.image}
                                        alt={event.name}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="text-brand-orange mb-2 text-3xl">
                                            {event.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                            {event.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                                            {event.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <ParticipatingColleges />
                </div>
            </motion.div>
        );
    };

    const IntraView = () => {
        const categories = {
            'Literary & Cultural': intraEvents.filter(e => e.category === 'cultural'),
            'Athletics': intraEvents.filter(e => e.category === 'sports' && e.subcategory === 'Athletics'),
            'Team Sports & Games': intraEvents.filter(e => e.category === 'sports' && !e.subcategory)
        };

        return (
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="pt-24 pb-20 px-4 max-w-7xl mx-auto"
            >
                <button onClick={handleBack} className="flex items-center gap-1 text-brand-blue font-bold mb-6 hover:underline">
                    <ChevronLeft size={20} /> Back to Home
                </button>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center justify-center gap-3">
                        <Trophy className="text-yellow-500" size={40} /> Winners Circle
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">Intra College Event Results (09-12 Jan 2026)</p>
                </div>

                <div className="space-y-16">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-brand-orange border-l-4 border-brand-orange pl-3">
                            Arts, Literature & Cultural
                        </h2>
                        <WinnerList events={categories['Literary & Cultural']} />
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-l-4 border-blue-600 pl-3">
                            Athletics (Track & Field)
                        </h2>
                        <WinnerList events={categories['Athletics']} />
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-green-600 border-l-4 border-green-600 pl-3">
                            Sports & Games
                        </h2>
                        <WinnerList events={categories['Team Sports & Games']} />
                    </section>
                </div>

                <div className="mt-20">
                    <ParticipatingColleges />
                </div>
            </motion.div>
        );
    };

    const ZonalView = () => {
        return (
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="pt-24 pb-20 px-4 max-w-7xl mx-auto"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <button onClick={handleBack} className="flex items-center gap-1 text-brand-blue font-bold hover:underline">
                        <ChevronLeft size={20} /> Back to Home
                    </button>

                    <a
                        href="/RULEBOOK/UMANG'25 GEC BUXAR BROUCHER.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-orange-600 transition flex items-center gap-2"
                    >
                        <Download size={18} /> Download Brochure / Rule Book
                    </a>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                        PATNA DIVISIONAL SPORTS FEST
                    </h1>
                    <div className="bg-brand-blue/10 inline-block px-4 py-2 rounded-lg border border-brand-blue/30">
                        <p className="text-lg font-bold text-brand-blue">
                            {eventStatus.includes('Live') ? eventStatus : '15 January - 17 January 2026'}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {zonalEvents.map((event, idx) => (
                        <EventCard key={event.id} event={event} index={idx} />
                    ))}
                </div>

                <div className="mt-20">
                    <ParticipatingColleges />
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <AnimatePresence mode="wait">
                {view === 'landing' && <LandingView key="landing" />}
                {view === 'intra' && <IntraView key="intra" />}
                {view === 'zonal' && <ZonalView key="zonal" />}
            </AnimatePresence>
        </div>
    );
};

const EventCard = ({ event, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
        >
            <div
                className="p-6 cursor-pointer flex flex-col md:flex-row gap-6 md:items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 rounded-xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {event.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-brand-blue transition-colors">
                            {event.name}
                            <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                            <MapPin size={14} /> {event.venue}
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-col items-end">
                        <span className="text-xs uppercase text-gray-400 font-bold">Category</span>
                        <span>{event.category}</span>
                    </div>
                    {event.schedule && event.schedule[0] && (
                        <div className="flex flex-col items-end">
                            <span className="text-xs uppercase text-gray-400 font-bold">First Day</span>
                            <span>{event.schedule[0].day.split('(')[0]}</span>
                        </div>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-slate-800/50"
                    >
                        <div className="p-6 pt-2">
                            {/* Teams */}
                            {event.teams && (
                                <div className="mb-6 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                                        <Swords size={14} /> Participating Teams
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {event.teams.map((team, tIdx) => (
                                            <span key={tIdx} className="text-xs font-bold px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-300 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                                                {team}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Coordinators */}
                            {event.coordinators && (
                                <div className="mb-6 bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                                        <User size={14} /> Coordinators
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {event.coordinators.map((c, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="font-bold text-slate-900 dark:text-white text-sm">{c.name}</span>
                                                <span className="text-xs text-brand-blue font-mono">{c.phone}</span>
                                                <span className="text-[10px] text-gray-400 uppercase">{c.role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Schedule Table */}
                            {event.schedule && (
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                                        <Clock size={14} /> Match Schedule
                                    </h4>
                                    <div className="space-y-4">
                                        {event.schedule.map((day, dIdx) => (
                                            <div key={dIdx} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                                                <div className="bg-gray-100 dark:bg-slate-700 px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-200">
                                                    {day.day}
                                                </div>
                                                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                                    {day.matches.map((match, mIdx) => (
                                                        <div key={mIdx} className="p-3 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-xs font-mono bg-blue-50 text-blue-600 px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-400 whitespace-nowrap">
                                                                    {match.time}
                                                                </span>
                                                                <span className="font-medium text-slate-800 dark:text-gray-200 text-sm">
                                                                    {match.match}
                                                                </span>
                                                            </div>
                                                            {match.venue && match.venue !== event.venue && (
                                                                <span className="text-xs text-gray-400 flex items-center gap-1 md:justify-end">
                                                                    <MapPin size={10} /> {match.venue}
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            {event.rulebook && (
                                <div className="mt-6 flex justify-end">
                                    <a
                                        href={event.rulebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-gray-500 hover:text-brand-blue flex items-center gap-1 transition-colors"
                                    >
                                        <ExternalLink size={14} /> View Rulebook PDF
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Home;
