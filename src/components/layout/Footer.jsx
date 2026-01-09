import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-10 px-4 mt-auto transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-6">Designed & Developed for UMANG 2026</p>

                <div className="flex justify-center space-x-8 mb-8">
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-3 overflow-hidden border-2 border-transparent group-hover:border-brand-blue transition-all">
                            <img src="https://ui-avatars.com/api/?name=Aman+Kumar&background=0D8ABC&color=fff" alt="Aman" className="w-full h-full object-cover" />
                        </div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Aman Kumar Happy</h5>
                        <p className="text-xs text-gray-500">Developer</p>
                        <a href="#" className="text-brand-blue hover:text-blue-700 transition inline-block mt-2">
                            <Linkedin size={18} />
                        </a>
                    </div>
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-3 overflow-hidden border-2 border-transparent group-hover:border-brand-orange transition-all">
                            <img src="https://ui-avatars.com/api/?name=Biru+Kumar&background=FF6B00&color=fff" alt="Biru" className="w-full h-full object-cover" />
                        </div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Biru Kumar</h5>
                        <p className="text-xs text-gray-500">Developer</p>
                        <a href="#" className="text-brand-blue hover:text-blue-700 transition inline-block mt-2">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                <p className="text-xs text-gray-400">© 2026 Department of Science, Technology and Technical Education, Bihar</p>
            </div>
        </footer>
    );
};

export default Footer;
