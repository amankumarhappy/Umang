import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send, Sparkles, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize Gemini
// WARNING: Putting API keys in client-side code is generally not recommended for production.
// For this hackathon/demo purpose as requested by user, we are proceeding.
const API_KEY = "AIzaSyCKowQm6V5gbp0GyPqY3Tcv65OH4Zgt_9M";
const genAI = new GoogleGenerativeAI(API_KEY);

const UmangAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: "Hi! I'm Umang AI. I can help you with event details, schedules, or just chat about the fest! How can I assist you today?" }
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
            // For a better experience, we can provide some context about the event to the AI
            // In a real app, this might come from a RAG system or system instruction.
            const systemContext = `
                You are Umang AI, the official AI assistant for UMANG 2026, a Sports and Cultural Festival organized by DSTTE, Bihar.
                The event is from 10 Jan 2026 to 12 Jan 2026 at GEC Buxar.
                Events include Cricket, Volleyball, Badminton, Singing, Debate, etc.
                Developers are Aman Kumar Happy and Biru Kumar.
                Be helpful, enthusiastic, and concise.
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
                    throw firstError; // Throw the first error as it's likely the more relevant one (e.g. key issue usually affects both)
                }
            }

            setMessages(prev => [...prev, { role: 'model', text: text }]);
        } catch (error) {
            console.error("AI Error Details:", error);

            let errorMessage = "Oops! I seem to be having trouble connecting to my brain right now.";

            // More specific error for the user to debug their key
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
            {/* FAB */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Sparkles size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 font-sans"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 text-white flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <Bot size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Umang AI</h3>
                                <p className="text-xs text-white/80 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Online • Powered by Gemini
                                </p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-950/50">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-2 items-center">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask anything..."
                                    className="flex-1 bg-gray-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-transform active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default UmangAI;
