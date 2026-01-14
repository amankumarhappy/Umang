import React from 'react';

const colleges = [
    { name: 'GEC Buxar', logo: '/College Logo/GEC Buxar.png', host: true, website: 'https://www.gecbuxar.ac.in' },
    { name: 'Nalanda College of Engineering, Chandi', logo: '/College Logo/NCE CHANDI.png', website: 'https://www.ncechandi.org' },
    { name: 'Bakhtiyarpur College of Engineering, Patna', logo: '/College Logo/BCE.png', website: 'https://www.bcebakhtiyarpur.org' },
    { name: 'Shershah Engineering College, Sasaram', logo: '/College Logo/SHERSAH ENG COLLEGE SASARAM.jpg', website: 'https://www.sershahengineeringcollege.ac.in' },
    { name: 'Government Engineering College, Kaimur', logo: '/College Logo/GEC KAIMUR.jpg', website: 'https://www.geckaimur.org' },
    { name: 'Government Engineering College, Bhojpur', logo: '/College Logo/GEC BHOJPUR.jpg', website: 'https://www.gecbhojpur.org' },
];

const ParticipatingColleges = () => {
    return (
        <section className="bg-white dark:bg-slate-900 py-16 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Patna Divisional Sports Fest</h2>
                <div className="w-24 h-1 bg-brand-orange mx-auto mb-6 rounded-full"></div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    All colleges are coming together at <span className="font-bold text-brand-blue">Government Engineering College Buxar</span> – The Official Host.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
                    {colleges.map((college, idx) => (
                        <a key={idx} href={college.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                            <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-full shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-200 p-2">
                                <img
                                    src={college.logo}
                                    alt={college.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                                {college.host && (
                                    <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-sm animate-pulse">
                                        Host
                                    </span>
                                )}
                            </div>
                            <p className="mt-4 text-xs font-semibold text-gray-700 dark:text-gray-400 max-w-[120px] leading-tight group-hover:text-brand-blue transition-colors">
                                {college.name}
                            </p>
                        </a>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">Organized By</p>
                    <img src="/College Logo/DSTTE Logo.png" alt="DSTTE Logo" className="h-16 opacity-90 grayscale hover:grayscale-0 transition-all duration-500" />
                </div>

                <div className="mt-12 text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto border-t border-gray-100 dark:border-gray-800 pt-8">
                    <p className="font-medium">
                        <a href="https://maps.app.goo.gl/gynUUHhVeH5BgC3z7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue flex items-center justify-center gap-2 group">
                            Government Engineering College (GEC), Buxar is located at Mahdah village on the Itarhi road, near the Police Line in Buxar, Bihar
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">📍</span>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ParticipatingColleges;
