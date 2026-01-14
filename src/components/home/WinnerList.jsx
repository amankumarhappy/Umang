import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const WinnerList = ({ events }) => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {events.map((event, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:border-brand-blue/30 transition-all"
                >
                    <div className="flex justify-between items-start mb-3 border-b border-gray-100 dark:border-gray-700 pb-2">
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">{event.name}</h3>
                            <div className="flex gap-2 text-xs mt-1">
                                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase font-bold tracking-wider">{event.category}</span>
                                {event.subcategory && (
                                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{event.subcategory}</span>
                                )}
                            </div>
                        </div>
                        {event.status === 'completed' && (
                            <Trophy size={18} className="text-yellow-500" />
                        )}
                    </div>

                    <div className="space-y-2">
                        {event.winners && event.winners.map((winner, idx) => (
                            <div key={idx} className="flex items-center text-sm gap-2">
                                <span className="font-bold min-w-[30px]">{winner.position.includes('🥇') ? '🥇' : winner.position.includes('🥈') ? '🥈' : '🏅'}</span>
                                <div>
                                    <span className={`block font-medium ${winner.position.includes('🥇') ? 'text-slate-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {winner.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {(!event.winners || event.winners.length === 0) && (
                            <p className="text-xs text-gray-400 italic">Results pending or not available.</p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default WinnerList;
