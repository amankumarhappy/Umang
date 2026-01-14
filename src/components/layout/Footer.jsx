import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-10 px-4 mt-auto transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">

                {/* Banner Image */}
                <div className="mb-12 flex justify-center">
                    <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                        <img
                            src="/College Logo/Banner.png"
                            alt="Umang Banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                            <span className="text-white font-bold text-lg tracking-wider">UMANG 2026</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-6 mb-8">
                    <a href="https://www.linkedin.com/in/amankumarhappy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                        <Linkedin size={20} />
                        <span className="font-medium">Developed by Aman Kumar Happy</span>
                    </a>
                </div>

                <p className="text-xs text-gray-400">© 2026 Department of Science, Technology and Technical Education, Bihar</p>
            </div>
        </footer>
    );
};

export default Footer;
