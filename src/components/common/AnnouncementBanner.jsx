import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { APP_CONFIG } from '../../data/config';

const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(APP_CONFIG.announcement.active);

    if (!isVisible || !APP_CONFIG.announcement.text) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white relative z-50 shadow-lg"
            >
                <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 w-full justify-center text-center">
                        <Bell className="w-5 h-5 animate-bounce hidden sm:block" />
                        <span className="font-bold text-sm md:text-base tracking-wide">
                            {APP_CONFIG.announcement.text}
                        </span>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Close announcement"
                    >
                        <X size={18} />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AnnouncementBanner;
