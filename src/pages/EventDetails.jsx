import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../data/events';
import { MapPin, User, ChevronLeft, Shield, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const EventDetails = () => {
    const { id } = useParams();
    const event = eventsData.find(e => e.id === id);

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-16">
                <p className="text-gray-500">Event not found.</p>
            </div>
        );
    }

    const isLive = event.status === 'live';

    return (
        <div className="min-h-screen pt-24 pb-12 container px-4">
            <Link to={event.category === 'cultural' ? '/cultural' : '/sports'} className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-blue mb-6 transition-colors">
                <ChevronLeft size={20} />
                Back to List
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{event.name}</h1>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                                        {event.category}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isLive ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300'
                                        }`}>
                                        {event.status}
                                    </span>
                                </div>
                            </div>

                            {isLive && (
                                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center gap-3 animate-pulse">
                                    Live Scoreboard
                                </button>
                            )}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-brand-orange mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">Venue</p>
                                    <p>{event.venue}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="text-green-500 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">Category</p>
                                    <p>{event.gender}</p>
                                </div>
                            </div>
                            {/* Show Date & Time for cultural events if available */}
                            {event.date && (
                                <div className="flex items-start gap-3">
                                    <Calendar className="text-purple-500 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">Date</p>
                                        <p>{event.date}</p>
                                    </div>
                                </div>
                            )}
                            {event.timing && (
                                <div className="flex items-start gap-3">
                                    <Clock className="text-blue-500 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">Timing</p>
                                        <p>{event.timing}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Description</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {event.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Schedule Section - Updated for dynamic data */}
                    {event.schedule && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Calendar size={24} className="text-brand-blue" />
                                Schedule
                            </h3>
                            <div className="space-y-6">
                                {event.schedule.map((day, idx) => (
                                    <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                        <div className="bg-gray-50 dark:bg-slate-700/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700 font-bold text-sm text-slate-700 dark:text-gray-200">
                                            {day.day}
                                        </div>
                                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                            {day.matches.map((match, mIdx) => (
                                                <div key={mIdx} className="p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm">
                                                    <div className="font-medium text-slate-900 dark:text-white">{match.match}</div>
                                                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                                        <div className="flex items-center gap-1"><Clock size={14} /> {match.time}</div>
                                                        {match.venue && <div className="flex items-center gap-1"><MapPin size={14} /> {match.venue}</div>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Coordinators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <User size={24} className="text-brand-orange" />
                            Coordinators
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            {event.coordinators && event.coordinators.map((coord, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/30 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">{coord.name}</p>
                                        <p className="text-xs text-gray-500">
                                            {coord.batch ? `${coord.batch} ${coord.branch}` : 'Student Coordinator'}
                                        </p>
                                    </div>
                                    {coord.phone ? (
                                        <a href={`tel:${coord.phone}`} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                                            Call
                                        </a>
                                    ) : (
                                        <div className="text-xs text-gray-400 italic">No Contact</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div>
                    {/* Placeholder for Rulebook/Pdf */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
                        <button className="w-full py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-brand-blue hover:text-brand-blue transition-colors mb-3">
                            Download Rulebook
                        </button>
                        <p className="text-xs text-center text-gray-400">Rules PDF available soon.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventDetails;
