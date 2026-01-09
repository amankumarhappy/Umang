import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Activity, Music, Trophy, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { eventsData, FESTIVAL_DETAILS } from '../data/events';
import Contact from '../components/home/Contact';

const Home = () => {
    const [displayState, setDisplayState] = useState('countdown'); // countdown or live
    const [timeLeft, setTimeLeft] = useState({
        days: '00', hours: '00', minutes: '00', seconds: '00'
    });
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        const startDate = new Date("2026-01-10T09:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = startDate - now;

            if (distance < 0) {
                setDisplayState('live');
                // Simple logic to determine "Day X"
                const daysPassed = Math.floor(Math.abs(distance) / (1000 * 60 * 60 * 24)) + 1;
                setCurrentDay(`Day ${daysPassed} • ${new Date().toLocaleDateString('en-GB')}`);
            } else {
                setDisplayState('countdown');
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days < 10 ? `0${days}` : days,
                    hours: hours < 10 ? `0${hours}` : hours,
                    minutes: minutes < 10 ? `0${minutes}` : minutes,
                    seconds: seconds < 10 ? `0${seconds}` : seconds
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Get live events or fallback to specific upcoming ones
    const activeEvents = eventsData.filter(e => e.status === 'live');
    const displayEvents = activeEvents.length > 0
        ? activeEvents
        : eventsData.filter(e => ['cricket', 'volleyball-boys', 'football'].includes(e.id));

    return (
        <div className="pt-24 pb-20 px-4">
            {/* Hero Section */}
            <header className="text-center max-w-4xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue dark:text-blue-400 text-sm font-semibold mb-4 border border-brand-blue/20">
                    Organized by DSTTE, Bihar
                </span>

                {displayState === 'live' ? (
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-2 tracking-tight text-slate-900 dark:text-white">
                            {currentDay}
                        </h1>
                        <p className="text-xl text-brand-orange font-bold">UMANG 2026 IS LIVE!</p>
                    </div>
                ) : (
                    <>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-2 tracking-tight text-slate-900 dark:text-white">
                            UMANG <span className="text-brand-orange">2026</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Annual Sports & Cultural Fest</p>

                        {/* Countdown */}
                        <div className="grid grid-cols-4 gap-2 max-w-md mx-auto mb-10">
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border-b-4 border-brand-blue">
                                <span className="block text-2xl font-bold dark:text-white">{timeLeft.days}</span>
                                <span className="text-xs text-gray-500">Days</span>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border-b-4 border-brand-blue">
                                <span className="block text-2xl font-bold dark:text-white">{timeLeft.hours}</span>
                                <span className="text-xs text-gray-500">Hours</span>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border-b-4 border-brand-blue">
                                <span className="block text-2xl font-bold dark:text-white">{timeLeft.minutes}</span>
                                <span className="text-xs text-gray-500">Mins</span>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border-b-4 border-brand-orange">
                                <span className="block text-2xl font-bold text-brand-orange">{timeLeft.seconds}</span>
                                <span className="text-xs text-gray-500">Secs</span>
                            </div>
                        </div>
                    </>
                )}

                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8 flex items-center justify-center gap-2">
                    <MapPin className="text-brand-orange" size={16} />
                    GEC Buxar
                </p>

                {/* Entry Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
                    <Link to="/sports" className="group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                        <Activity className="mb-4" size={40} />
                        <h3 className="text-2xl font-bold">Sports Activities</h3>
                        <p className="text-blue-100 mt-2 text-sm">Cricket, Volleyball, Kabaddi & more</p>
                    </Link>
                    <Link to="/cultural" className="group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                        <Music className="mb-4" size={40} />
                        <h3 className="text-2xl font-bold">Cultural & Lit</h3>
                        <p className="text-orange-100 mt-2 text-sm">Debate, Singing, Poetry & more</p>
                    </Link>
                </div>
            </header>

            {/* Live/Upcoming Section */}
            <section className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold border-l-4 border-brand-orange pl-3 text-slate-800 dark:text-white">
                        {activeEvents.length > 0 ? 'Live Now' : 'Featured Upcoming'}
                    </h2>
                    {activeEvents.length > 0 && (
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    )}
                </div>

                <div className="grid gap-4">
                    {displayEvents.map(event => (
                        <Link to={`/events/${event.id}`} key={event.id} className="block bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition">
                            <div className="bg-gray-900 text-white p-3 flex justify-between items-center">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{event.name}</span>
                                <span className={`text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase ${event.status === 'live' ? 'bg-red-600' : 'bg-blue-600'}`}>
                                    {event.status}
                                </span>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold dark:text-white">{event.gender} Category</h3>
                                    <p className="text-sm text-gray-500">{event.venue}</p>
                                </div>
                                {event.schedule && event.schedule[0] ? (
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">Next Match: {event.schedule[0].matches[0].match}</p>
                                ) : (
                                    <p className="text-gray-500 text-sm">{event.description}</p>
                                )}
                            </div>
                            {event.status === 'live' && (
                                <div className="w-full py-3 bg-gray-50 dark:bg-slate-700 text-center text-sm font-semibold text-brand-blue flex items-center justify-center">
                                    View Live Scoreboard <ArrowRight size={16} className="ml-1" />
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Winner Section */}
            <section className="max-w-4xl mx-auto mb-16">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <Trophy size={48} className="mx-auto mb-4 text-white drop-shadow-md" />
                        <h2 className="text-3xl font-bold mb-2">Winners Circle</h2>
                        <p className="text-white/90 font-medium text-lg">Results will be announced here after the events.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-4xl mx-auto mb-16">
                <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                    <Phone className="text-brand-blue" /> Contact & Coordination
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Faculty */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-l-4 border-brand-blue">
                        <h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider mb-4">Faculty In-Charge</h3>
                        <div className="space-y-4">
                            {FESTIVAL_DETAILS.contacts.faculty.map((contact, idx) => (
                                <div key={idx} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">{contact.name}</p>
                                        <p className="text-xs text-gray-500">{contact.role}</p>
                                    </div>
                                    <a href={`tel:${contact.phone}`} className="text-brand-blue font-mono font-medium">{contact.phone}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Student */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-l-4 border-brand-orange">
                        <h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider mb-4">Schedule Coordinators</h3>
                        <div className="space-y-4">
                            {FESTIVAL_DETAILS.contacts.student.map((contact, idx) => (
                                <div key={idx} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">{contact.name}</p>
                                        <p className="text-xs text-gray-500">{contact.batch} Batch</p>
                                    </div>
                                    <a href={`tel:${contact.phone}`} className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition">
                                        <Phone size={18} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default Home;
