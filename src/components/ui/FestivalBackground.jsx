import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const FestivalBackground = () => {
    const { theme } = useTheme();

    const icons = [
        // Kite (Polygon)
        {
            type: 'svg',
            path: "M12 2L2 12l10 10 10-10L12 2zm0 22v8",
            color: theme === 'dark' ? '#FF6B00' : '#FF6B00',
            size: 40,
            x: '10%',
            y: '20%',
            duration: 15
        },
        // Music Note
        {
            type: 'svg',
            path: "M9 18V5l12-2v13",
            color: theme === 'dark' ? '#3B82F6' : '#0056D2',
            size: 30,
            x: '85%',
            y: '15%',
            duration: 20
        },
        // Cricket Ball (Circle)
        {
            type: 'circle',
            color: theme === 'dark' ? '#EF4444' : '#DC2626',
            size: 20,
            x: '75%',
            y: '60%',
            duration: 18
        },
        // Another Kite
        {
            type: 'svg',
            path: "M12 2L2 12l10 10 10-10L12 2zm0 22v8",
            color: theme === 'dark' ? '#10B981' : '#059669',
            size: 35,
            x: '20%',
            y: '70%',
            duration: 25
        },
        // Star/Sparkle
        {
            type: 'svg',
            path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
            color: theme === 'dark' ? '#F59E0B' : '#D97706',
            size: 25,
            x: '50%',
            y: '40%',
            duration: 22
        }
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ x: item.x, y: item.y, opacity: 0.2, scale: 0.8 }}
                    animate={{
                        y: [item.y, `calc(${item.y} - 50px)`, item.y],
                        x: [item.x, `calc(${item.x} + 30px)`, item.x],
                        rotate: [0, 10, -10, 0],
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute opacity-20 dark:opacity-10"
                    style={{
                        left: 0,
                        top: 0
                    }}
                >
                    {item.type === 'svg' ? (
                        <svg
                            width={item.size}
                            height={item.size}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={item.color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d={item.path} />
                        </svg>
                    ) : (
                        <div
                            style={{
                                width: item.size,
                                height: item.size,
                                backgroundColor: item.color,
                                borderRadius: '50%'
                            }}
                        />
                    )}
                </motion.div>
            ))}

            {/* Ambient Gradients for Dark Mode */}
            <div className={`fixed -top-40 -left-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-30' : 'opacity-0'}`} />
            <div className={`fixed -bottom-40 -right-40 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px] transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-30' : 'opacity-0'}`} />
        </div>
    );
};

export default FestivalBackground;
