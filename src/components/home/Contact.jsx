import React from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section className="max-w-4xl mx-auto mb-16 relative overflow-hidden" id="contact-form">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-orange mb-2">
                    Send us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Have specific queries? Reach out to us directly.</p>
            </div>

            <div className="glass bg-white/50 dark:bg-slate-800/50 rounded-2xl p-8 border border-white/20 shadow-xl relative z-10 backdrop-blur-sm">
                <form
                    action="https://formspree.io/f/xqeezavy"
                    method="POST"
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                            <Mail size={16} className="text-brand-blue" /> Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all placeholder:text-gray-400 dark:text-white"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                            <MessageSquare size={16} className="text-brand-orange" /> Your Message
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all placeholder:text-gray-400 dark:text-white resize-none"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <div className="text-center pt-2">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-blue/25 flex items-center justify-center gap-2 mx-auto"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
