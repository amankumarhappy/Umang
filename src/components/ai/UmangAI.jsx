import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send, Sparkles, Bot, User, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_CONFIG } from '../../data/config';

// Initialize Gemini
const API_KEY = "AIzaSyCKowQm6V5gbp0GyPqY3Tcv65OH4Zgt_9M";
const genAI = new GoogleGenerativeAI(API_KEY);

const UmangAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: APP_CONFIG.ai.welcomeMessage || "Hi! I'm Umang AI. I can help you with event details, schedules, or just chat about the fest! How can I assist you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const systemContext = `
                You are Umang AI, the official intelligent assistant for UMANG 2026, the Patna Divisional Sports Fest hosted by GEC Buxar.
                
                **CORE EVENT DETAILS:**
                - **Event Name:** PATNA DIVISIONAL SPORTS FEST (Zonal Level)
                - **Dates:** 15th January - 17th January 2026
                - **Host Venue:** Government Engineering College (GEC), Buxar
                - **Organized By:** Department of Science, Technology and Technical Education, Bihar
                - **Theme:** "Umang" - celebrating spirit, sportsmanship, and culture.
                
                **PARTICIPATING COLLEGES (TEAMS):**
                1. GEC Buxar (Host)
                2. GEC Bhojpur
                3. GEC Kaimur
                4. BCE Bakhtiyarpur
                5. SEC Sasaram
                6. NCE Chandi

                **EVENT SCHEDULE & VENUES (Zonal):**
                - **Badminton (Boys/Girls):** 15-16 Jan at Academic Badminton Court 1.
                - **Volleyball (Boys/Girls):** 15-16 Jan at GEC Buxar Ground.
                - **Cricket (Boys):** 15-17 Jan at GEC Buxar Main Ground.
                - **Chess:** 15 Jan at Room 101, Main Building.
                - **Kabaddi:** 16 Jan at Sports Complex.
                - **Athletics (100m, 200m, 400m, Relay):** 17 Jan at Track Field.
                - **Tug of War:** 17 Jan (Closing Event).
                
                **WINNERS (Intra-College Round - Completed 09-12 Jan):**
                - *Examples:* 
                  - Chess: Winner - Ravi Kumar (CSE)
                  - Badminton: Winner - Amit Singh (Civil)
                  - 100m Race: Winner - Rahul (Mech)
                (If asked for specific winners not listed here, say: "The full list of Intra-college winners is available on the 'View Past Winners' section of the home page.")

                **CONTACTS & DEVELOPERS:**
                - **Developers:** Aman Kumar Happy & Biru Kumar (CSE Dept).
                - **Faculty Coordinators:** Dr. Shailesh Kumar, Md. Ahmad.
                
                **YOUR PERSONALITY:**
                - You are energetic, helpful, and polite.
                - Use emojis (🏆, 🏏, 🎉) to make the conversation lively.
                - If you don't know an answer, politely ask them to check the "Rulebook" or contact a coordinator.
                - Always emphasize that GEC Buxar is proud to host this zonal event.
            `;

            let text = "";
            try {
                // Try gemini-pro first as it's the most standard model
                const model = genAI.getGenerativeModel({ model: "gemini-pro" });
                const prompt = `${systemContext}\n\nUser: ${userMessage}`;
                const result = await model.generateContent(prompt);
                const response = await result.response;
                text = response.text();
            } catch (firstError) {
                console.warn("Gemini Pro failed, trying Flash...", firstError);
                try {
                    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                    const prompt = `${systemContext}\n\nUser: ${userMessage}`;
                    const result = await model.generateContent(prompt);
                    const response = await result.response;
                    text = response.text();
                } catch (secondError) {
                    throw firstError;
                }
            }

            setMessages(prev => [...prev, { role: 'model', text: text }]);
        } catch (error) {
            console.error("AI Error Details:", error);

            let errorMessage = "Oops! I seem to be having trouble connecting to my brain right now.";

            if (error.message) {
                if (error.message.includes('404')) errorMessage += " (Model not found - check API access)";
                else if (error.message.includes('403')) errorMessage += " (Access denied - check API Key permissions)";
                else if (error.message.includes('400')) errorMessage += " (Bad Request - check payload)";
                else if (error.message.includes('Failed to fetch')) errorMessage += " (Network Error - check internet)";
                else errorMessage += ` (${error.message})`;
            }

            setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* Animated Glow Effect behind FAB */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.5, scale: 1.5 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-purple-500 rounded-full blur-xl pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* FAB */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Bot size={28} className="animate-bounce-slow" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, y: 100, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[380px] h-[550px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 font-sans glass-panel"
                    >
                        {/* Interactive Header */}
                        <div className="relative overflow-hidden p-6 text-white bg-slate-900">
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 animate-gradient-xy opacity-90" />

                            {/* Content */}
                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 shadow-inner">
                                        <Sparkles size={20} className="text-yellow-300 fill-yellow-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg tracking-tight">Umang AI</h3>
                                        <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                                            Online & Ready
                                        </p>
                                    </div>
                                </div>
                                <Zap size={18} className="text-white/50" />
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-slate-950/50 scrollbar-thin scrollbar-thumb-purple-200 dark:scrollbar-thumb-slate-700">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                            ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-br-none'
                                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1.5 items-center border border-gray-100 dark:border-gray-700">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2 items-center bg-gray-100 dark:bg-slate-800 rounded-full p-1.5 pl-4 border border-transparent focus-within:border-purple-500/50 transition-colors"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-1 bg-transparent text-slate-900 dark:text-white text-sm outline-none placeholder:text-gray-400"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-full shadow-md transition-all active:scale-90 disabled:opacity-50 disabled:shadow-none"
                                >
                                    <Send size={16} className="-ml-0.5 mt-0.5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default UmangAI;
