import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/events';
import { Filter, Calendar, MapPin, Clock } from 'lucide-react';

const Sports = () => {
    const [filter, setFilter] = useState('all'); // all, live, upcoming, completed

    const sportsEvents = eventsData.filter(e => e.category === 'sports');

    const filteredEvents = sportsEvents.filter(event => {
        if (filter === 'all') return true;
        return event.status === filter;
    });

    const statusColors = {
        live: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
        upcoming: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800',
        completed: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
    };

    return (
        <div className="pt-24 min-h-screen container pb-20 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                <div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-orange mb-2">Sports Activities</h1>
                    <p className="text-gray-600 dark:text-gray-400">Explore all sporting events and live scores.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {['all', 'live', 'completed'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all ${filter === status
                                ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/30'
                                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <Link to={`/events/${event.id}`} key={event.id} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-brand-blue block">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    {event.icon}
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${statusColors[event.status] || statusColors.upcoming}`}>
                                    {event.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{event.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{event.gender} Category</p>

                            <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                    <MapPin size={14} /> {event.venue}
                                </div>
                                {event.status === 'live' && (
                                    <div className="mt-3 w-full py-2 bg-red-600 rounded-lg text-white text-xs font-bold text-center animate-pulse">
                                        View Live Scoreboard
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">No events found with status "{filter}".</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sports;
