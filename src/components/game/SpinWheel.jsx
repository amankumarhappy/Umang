import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Gift, RefreshCcw, ExternalLink, X } from 'lucide-react';

const PRIZES = [
    {
        id: 1,
        label: "20% OFF Hostinger",
        color: "#673AB7", // Purple
        textColor: "#ffffff",
        link: "https://hostinger.in?REFERRALCODE=XTVAMANKUXVF",
        description: "Web, Cloud, & VPS Hosting",
        icon: <Gift size={20} />
    },
    {
        id: 2,
        label: "10% Cashback",
        color: "#E91E63", // Pink
        textColor: "#ffffff",
        link: "https://cashkaro.com?r=5011002&fname=Happy",
        description: "Earn on every shop via CashKaro",
        icon: <Gift size={20} />
    },
    {
        id: 3,
        label: "Try Again!",
        color: "#9E9E9E", // Grey
        textColor: "#ffffff",
        link: null,
        description: "Better luck next time!",
        icon: <RefreshCcw size={20} />
    },
    {
        id: 4,
        label: "20% OFF Hostinger",
        color: "#673AB7", // Purple
        textColor: "#ffffff",
        link: "https://hostinger.in?REFERRALCODE=XTVAMANKUXVF",
        description: "Web, Cloud, & VPS Hosting",
        icon: <Gift size={20} />
    },
    {
        id: 5,
        label: "10% Cashback",
        color: "#E91E63", // Pink
        textColor: "#ffffff",
        link: "https://cashkaro.com?r=5011002&fname=Happy",
        description: "Earn on every shop via CashKaro",
        icon: <Gift size={20} />
    },
    {
        id: 6,
        label: "Try Again!",
        color: "#9E9E9E", // Grey
        textColor: "#ffffff",
        link: null,
        description: "Spin to win more!",
        icon: <RefreshCcw size={20} />
    }
];

const SpinWheel = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState(null);
    const [hasSpun, setHasSpun] = useState(false);
    const controls = useAnimation();

    React.useEffect(() => {
        const spun = localStorage.getItem('umang_spin_completed');
        if (spun) {
            setHasSpun(true);
        }
    }, []);

    const spinWheel = async () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setResult(null);

        // Random rotation between 5 and 10 full spins (1800 to 3600 degrees) + random offset
        const randomSpin = 1800 + Math.random() * 1800;

        await controls.start({
            rotate: randomSpin,
            transition: { duration: 4, type: "spring", stiffness: 50, damping: 10 }
        });

        // Calculate result
        // The wheel stops at 'randomSpin'. We need to normalize this to 0-360
        const normalizedRotation = randomSpin % 360;
        // Each segment is 60 degrees (360 / 6)
        // The pointer is usually at the top (0 degrees).
        // If the wheel rotates, the segment at the top is determined by the rotation.
        // However, 0 degrees in CSS rotation usually means the top.
        // If we rotate X degrees, the slice at the top is:
        // (360 - (X % 360)) / segmentSize

        const segmentSize = 360 / PRIZES.length;
        const itemsRotated = Math.floor(((randomSpin + (segmentSize / 2)) % 360) / segmentSize);
        // This calculation usually needs tweaking depending on where 0 is. 
        // Let's assume 0 is top. The wheel rotates clockwise.
        // Segment 0 spans -30 to 30.

        // Simplification: We can just pick a random index first, then rotate to it.
        // But let's stick to the random spin for 'physics' feel.

        // To properly map, let's just pick a random prize index and calculate required rotation.
        const selectedIndex = Math.floor(Math.random() * PRIZES.length);
        const selectedPrize = PRIZES[selectedIndex];

        // We want the selected index to land at the top (0 degrees or 270 depending on setup).
        // Let's say top is 270 degrees in a standard circle, but in rotate transform, 0 is top if setup that way.
        // Assume sector 0 is at the top. We need to rotate such that sector index is at top.
        // Sector i is at angle i * 60. To bring it to top (0), we rotate - (i * 60).
        // Add multiple full rotations.

        const targetRotation = 3600 + (360 - (selectedIndex * segmentSize));
        // Added 3600 (10 spins).

        await controls.start({
            rotate: targetRotation,
            transition: { duration: 4, ease: "circOut" }
        });

        setResult(selectedPrize);
        setIsSpinning(false);
        setHasSpun(true);
        localStorage.setItem('umang_spin_completed', 'true');
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-lg mx-auto border border-gray-200 dark:border-gray-700 relative overflow-hidden">

            <div className="mb-6 text-center z-10">
                <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 mb-2">
                    Spin & Win!
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Exclusive rewards for Umang 2026 participants</p>
            </div>

            <div className="relative w-80 h-80 mb-8">
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-20 w-8 h-8 text-slate-800 dark:text-white drop-shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 22L7 12L17 12Z" />
                        {/* Simple Down Arrow */}
                        <path d="M11.0001 20.4853L4.63612 14.1213C3.85507 13.3403 3.85507 12.0739 4.63612 11.2929L11.0001 4.92893C11.5524 4.37665 12.4478 4.37665 13.0001 4.92893L19.3641 11.2929C20.1451 12.0739 20.1451 13.3403 19.3641 14.1213L13.0001 20.4853C12.4478 21.0376 11.5524 21.0376 11.0001 20.4853F" />
                    </svg>
                </div>

                {/* Wheel */}
                <motion.div
                    className="w-full h-full rounded-full border-4 border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden relative"
                    animate={controls}
                    style={{ transformOrigin: "center" }}
                >
                    {PRIZES.map((prize, index) => {
                        const rotation = index * (360 / PRIZES.length);
                        return (
                            <div
                                key={index}
                                className="absolute w-full h-full text-center pt-4"
                                style={{
                                    backgroundColor: prize.color,
                                    transform: `rotate(${rotation}deg)`,
                                    clipPath: "polygon(50% 50%, 0 0, 100% 0)", // Creates triangle slice?? No, this is tricky in pure CSS without SVG.
                                    // Better approach: Conic gradient or absolute positioning with transform origin
                                }}
                            >
                                {/* 
                             The clip-path approach for wedges is complex on a div. 
                             Let's use a simpler approach: SVG or just rely on Conic Gradient for background and place items.
                           */}
                            </div>
                        );
                    })}

                    {/* 
                    Better Rendering: Static SVG for the wheel background 
                */}
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 transform -rotate-90">
                        {PRIZES.map((prize, i) => {
                            const segmentAngle = 360 / PRIZES.length;
                            const startAngle = i * segmentAngle;
                            // Calculate coordinates
                            const x1 = 50 + 50 * Math.cos(Math.PI * startAngle / 180);
                            const y1 = 50 + 50 * Math.sin(Math.PI * startAngle / 180);
                            const x2 = 50 + 50 * Math.cos(Math.PI * (startAngle + segmentAngle) / 180);
                            const y2 = 50 + 50 * Math.sin(Math.PI * (startAngle + segmentAngle) / 180);

                            return (
                                <path
                                    key={i}
                                    d={`M50,50 L${x1},${y1} A50,50 0 0,1 ${x2},${y2} Z`}
                                    fill={prize.color}
                                    stroke="white"
                                    strokeWidth="0.5"
                                />
                            );
                        })}
                    </svg>

                    {/* Text/Icons overlying the SVG */}
                    {PRIZES.map((prize, i) => {
                        const segmentAngle = 360 / PRIZES.length;
                        const midAngle = i * segmentAngle + segmentAngle / 2;
                        return (
                            <div
                                key={i}
                                className="absolute top-0 left-0 w-full h-full flex justify-center pt-2"
                                style={{
                                    transform: `rotate(${midAngle}deg)`,
                                }}
                            >
                                <div className="flex flex-col items-center text-white" style={{ marginTop: '10px' }}>
                                    <div className="bg-white/20 p-1 rounded-full mb-1">
                                        {prize.icon}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider w-20 text-center truncate px-1">
                                        {prize.label}
                                    </span>
                                </div>
                            </div>
                        )
                    })}

                </motion.div>

                {/* Center Cap */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center border-2 border-slate-200 z-10">
                    <span className="text-xs font-bold text-slate-400">UMANG</span>
                </div>
            </div>

            <button
                onClick={spinWheel}
                disabled={isSpinning || hasSpun}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full font-bold shadow-lg transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSpinning ? 'Spinning...' : hasSpun ? 'Already Spin' : 'SPIN NOW'}
            </button>

            {/* Result Modal / Overlay */}
            {result && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl p-4">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full relative"
                    >
                        <button
                            onClick={() => setResult(null)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto flex items-center justify-center text-white mb-4 shadow-lg">
                            <Gift size={32} />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {result.link ? "CONGRATULATIONS!" : "Oops!"}
                        </h3>
                        <p className="text-lg text-purple-600 font-semibold mb-2">{result.label}</p>
                        <p className="text-sm text-gray-500 mb-6">{result.description}</p>

                        {result.link ? (
                            <a
                                href={result.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors w-full justify-center"
                            >
                                Claim Offer <ExternalLink size={18} />
                            </a>
                        ) : (
                            <button
                                onClick={() => setResult(null)}
                                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-6 py-3 rounded-xl font-bold transition-colors w-full"
                            >
                                Try Again
                            </button>
                        )}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default SpinWheel;
