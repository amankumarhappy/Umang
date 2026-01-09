import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickSpark = () => {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const newSpark = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setSparks((prev) => [...prev, newSpark]);

            // Cleanup spark after animation
            setTimeout(() => {
                setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
            }, 1000);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <AnimatePresence>
            {sparks.map((spark) => (
                <SparkBurst key={spark.id} x={spark.x} y={spark.y} />
            ))}
        </AnimatePresence>
    );
};

const SparkBurst = ({ x, y }) => {
    const particleCount = 8;
    const particles = Array.from({ length: particleCount });

    return (
        <div
            style={{
                position: 'fixed',
                top: y,
                left: x,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        >
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: 0,
                        scale: 0.5,
                        x: Math.cos((i / particleCount) * 2 * Math.PI) * 40,
                        y: Math.sin((i / particleCount) * 2 * Math.PI) * 40,
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: `hsl(${Math.random() * 360}, 100%, 70%)`,
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    }}
                />
            ))}
            <motion.div
                initial={{ opacity: 0.8, scale: 0 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 0.4 }}
                style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                }}
            />
        </div>
    );
};

export default ClickSpark;
