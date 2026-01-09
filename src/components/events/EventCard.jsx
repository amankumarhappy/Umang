import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
    const statusColors = {
        live: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
        upcoming: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800',
        completed: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700',
    };

    const statusLabel = {
        live: 'LIVE',
        upcoming: 'UPCOMING',
        completed: 'COMPLETED',
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass rounded-xl overflow-hidden border border-border-color hover:shadow-lg transition-all duration-300 group cursor-pointer"
        >
            <Link to={`/events/${event.id}`} className="block h-full">
                <div className="p-5 space-y-4">
                    <div className="flex justify-between items-start">
                        <div className="p-3 bg-bg-secondary rounded-lg border border-border-color group-hover:border-accent-primary/50 transition-colors">
                            {/* Placeholder for Icon - in real app, map string to Lucide icon */}
                            <div className="w-6 h-6 bg-accent-gradient opacity-20 rounded-md" />
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${statusColors[event.status] || statusColors.upcoming}`}>
                            {statusLabel[event.status]}
                        </span>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-primary group-hover:text-accent-primary transition-colors">
                            {event.name}
                        </h3>
                        <p className="text-sm text-secondary mt-1">{event.gender}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-border-color/50">
                        <div className="flex items-center gap-2 text-xs text-secondary">
                            <Clock size={14} />
                            <span>{event.timing}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-secondary">
                            <MapPin size={14} />
                            <span>{event.venue}</span>
                        </div>
                    </div>

                    {event.status === 'live' && (
                        <button className="w-full mt-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 animate-pulse">
                            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                            View Live Scoreboard
                        </button>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};

export default EventCard;
