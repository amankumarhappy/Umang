
export const FESTIVAL_DETAILS = {
    name: 'PATNA DIVISIONAL SPORTS FEST',
    tagline: 'Zonal Level',
    organizer: 'DSTTE, Bihar',
    host: 'Government Engineering College, Buxar',
    dates: {
        start: '2026-01-15',
        end: '2026-01-17'
    },
    contacts: {
        faculty: [
            { name: 'Dr. Shailesh Kumar', phone: '7906209274', role: 'Faculty In-Charge' },
            { name: 'Md. Ahmad', phone: '9958470800', role: 'Coordinator Head' }
        ],
        student: [
            { name: 'Sushil Kumar', batch: '2K22', phone: '8544688394' },
            { name: 'Ankit Kumar', batch: '2K23', phone: '9931602713' }
        ]
    },
    previous_event: {
        name: 'Intra College Event',
        dates: '09-12 January 2026',
        status: 'Completed'
    }
};

// --- ZONAL EVENTS (15-17 Jan 2026) ---
export const zonalEvents = [
    // --- BADMINTON ---
    {
        id: 'zonal-badminton-boys',
        name: 'Badminton (Boys)',
        category: 'sports',
        icon: '🏸',
        status: 'upcoming',
        venue: 'GEC Buxar (Academic Badminton Court 1)',
        image: '/EVENT PHOTO/BADMINTON.jpg',
        description: 'Smash and Drop. Group A & B battles.',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Dr. Shailesh Kumar', phone: '7906209274', role: 'Faculty' },
            { name: 'Md. Ahmad', phone: '9958470800', role: 'Faculty' },
            { name: 'Sushil Kumar', phone: '8544688394', role: 'Student (2K22)' },
            { name: 'Ankit Kumar', phone: '9931602713', role: 'Student (2K23)' }
        ],
        teams: ['GEC Buxar', 'GEC Bhojpur', 'GEC Kaimur', 'BCE Bakhtiyarpur', 'SEC Sasaram', 'NCE Chandi'],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '9:00 Am to 9:30 Am', match: 'GEC BUXAR VS SEC SASARAM', venue: 'Court 1' },
                    { time: '9:40 Am to 10:10 Am', match: 'BCE BKP VS GEC BHOJPUR', venue: 'Court 1' },
                    { time: '10:20 Am to 10:50 Am', match: 'GEC BUXAR VS GEC KAIMUR', venue: 'Court 1' },
                    { time: '9:00 Am to 9:30 Am', match: 'GEC BHOJPUR VS NCE CHANDI', venue: 'Court 1' },
                    { time: '9:40 Am to 10:10 Am', match: 'SEC SASARAM VS GEC KAIMUR', venue: 'Court 1' },
                    { time: '10:20 Am to 10:50 Am', match: 'NCE CHANDI VS BCE BKP', venue: 'Court 1' },
                    { time: '11:30 Am to 12:00 Pm', match: 'Semifinal 1: Top Group A vs Second Group B', venue: 'Court 1' },
                    { time: '11:30 Am to 12:00 Pm', match: 'Semifinal 2: Top Group B vs Second Group A', venue: 'Court 1' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '12:30 Pm to 1:00 Pm', match: 'FINAL: Winner SF1 vs Winner SF2', venue: 'Court 1' }
                ]
            }
        ]
    },
    {
        id: 'zonal-badminton-girls',
        name: 'Badminton (Girls)',
        category: 'sports',
        icon: '🏸',
        status: 'upcoming',
        venue: 'GEC Buxar (Academic Badminton Court 2)',
        image: '/EVENT PHOTO/BADMINTON.jpg',
        description: 'Smash and Drop. Group A & B battles.',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Dr. Shailesh Kumar', phone: '7906209274', role: 'Faculty' },
            { name: 'Md. Ahmad', phone: '9958470800', role: 'Faculty' },
            { name: 'Abhishek Kumar', phone: '9155147615', role: 'Student (2K22)' },
            { name: 'Divyank Pandey', phone: '7979976762', role: 'Student (2K22)' }
        ],
        teams: ['GEC Buxar', 'GEC Bhojpur', 'GEC Kaimur', 'BCE Bakhtiyarpur', 'SEC Sasaram', 'NCE Chandi'],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '9:00 Am to 10:00 Am', match: 'GEC BUXAR VS GEC BHOJPUR', venue: 'Court 2' },
                    { time: '10:00 Am to 11:00 Am', match: 'BCE BKP VS NCE CHANDI', venue: 'Court 2' },
                    { time: '11:00 Am to 12:00 Pm', match: 'GEC BHOJPUR VS GEC KAIMUR', venue: 'Court 2' },
                    { time: '12:00 Pm to 1:00 Pm', match: 'NCE CHANDI VS SEC SASARAM', venue: 'Court 2' },
                    { time: '1:00 Pm to 2:00 Pm', match: 'GEC BUXAR VS GEC KAIMUR', venue: 'Court 2' },
                    { time: '2:00 Pm to 3:00 Pm', match: 'BCE BKP VS SEC SASARAM', venue: 'Court 2' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '9:00 Am to 10:00 Am', match: 'FINAL: Group A Topper vs Group B Topper', venue: 'Court 2' }
                ]
            }
        ]
    },

    // --- CARROM ---
    {
        id: 'zonal-carrom-boys',
        name: 'Carrom (Boys)',
        category: 'sports',
        icon: '🎯',
        status: 'upcoming',
        venue: 'G7 (Board 1 & 2)',
        image: '/EVENT PHOTO/CARROM TOURNAMENT.jpg',
        description: 'Strike and Pocket.',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Vijay Kumar', phone: '9304405557', role: 'Faculty' },
            { name: 'Ankit Kumar', phone: '9931602713', role: 'Student' }
        ],
        teams: ['GEC Buxar', 'GEC Bhojpur', 'GEC Kaimur', 'BCE Bakhtiyarpur', 'SEC Sasaram', 'NCE Chandi'],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '9:00 Am - 9:30 Am', match: 'GEC BUXAR VS GEC KAIMUR', venue: 'G7 (Board 1)' },
                    { time: '9:00 Am - 9:30 Am', match: 'GEC BHOJPUR VS BCE BKP', venue: 'G7 (Board 2)' },
                    { time: '9:40 Am - 10:10 Am', match: 'GEC KAIMUR VS NCE CHANDI', venue: 'G7 (Board 1)' },
                    { time: '9:40 Am - 10:10 Am', match: 'BCE BKP VS SEC SASARAM', venue: 'G7 (Board 2)' }
                ]
            },
            {
                day: 'SF/Final (15 Jan 2026)',
                matches: [
                    { time: '11:30 Am - 12:00 Pm', match: 'Semfinals', venue: 'G7' },
                    { time: '12:30 Pm - 1:00 Pm', match: 'FINAL', venue: 'G7' }
                ]
            }
        ]
    },
    {
        id: 'zonal-carrom-girls',
        name: 'Carrom (Girls)',
        category: 'sports',
        icon: '🎯',
        status: 'upcoming',
        venue: 'G7 (Board 1 & 2)',
        image: '/EVENT PHOTO/CARROM TOURNAMENT.jpg',
        description: 'Strike and Pocket.',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Vijay Kumar', phone: '9304405557', role: 'Faculty' },
            { name: 'Sushil Kumar', phone: '8544688394', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '2:20 Pm - 2:50 Pm', match: 'GEC BUXAR VS GEC KAIMUR', venue: 'G7 (Board 1)' },
                    { time: '2:20 Pm - 2:50 Pm', match: 'GEC BHOJPUR VS BCE BKP', venue: 'G7 (Board 2)' },
                    { time: '3:00 Pm - 3:30 Pm', match: 'GEC KAIMUR VS NCE CHANDI', venue: 'G7 (Board 1)' },
                    { time: '3:00 Pm - 3:30 Pm', match: 'BCE BKP VS SEC SASARAM', venue: 'G7 (Board 2)' }
                ]
            },
            {
                day: 'SF/Final (15 Jan 2026)',
                matches: [
                    { time: '4:30 Pm - 5:00 Pm', match: 'Semfinals', venue: 'G7' },
                    { time: '5:20 Pm - 5:50 Pm', match: 'FINAL', venue: 'G7' }
                ]
            }
        ]
    },

    // --- CHESS ---
    {
        id: 'zonal-chess',
        name: 'Chess (Boys & Girls)',
        category: 'sports',
        icon: '♟️',
        status: 'upcoming',
        venue: 'G7 / Faculty Lounge',
        image: '/EVENT PHOTO/CHESS.jpg',
        description: 'Round-Robin format with 11 rounds.',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Abhishek Kumar', phone: '9155147615', role: 'Student' },
            { name: 'Divyank Pandey', phone: '7979976762', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: 'All Day', match: '11 Rounds of Round Robin', venue: 'Assigned Boards' }
                ]
            }
        ]
    },

    // --- CRICKET ---
    {
        id: 'zonal-cricket',
        name: 'Cricket',
        category: 'sports',
        icon: '🏏',
        status: 'upcoming',
        venue: 'GEC Buxar Cricket Ground',
        image: '/EVENT PHOTO/CRICKET.png',
        description: 'Zonal Cricket Tournament',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Chandrabhanu Kumar', phone: '9110918152', role: 'Faculty' },
            { name: 'Sushil Kumar', phone: '8544688394', role: 'Student' }
        ],
        teams: ['GEC Buxar', 'GEC Bhojpur', 'GEC Kaimur', 'BCE Bakhtiyarpur', 'SEC Sasaram', 'NCE Chandi'],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '8:00 Am - 9:30 Am', match: 'BCE BKP VS SEC SASARAM', venue: 'Cricket Ground' },
                    { time: '9:45 Am - 11:15 Am', match: 'NCE CHANDI VS GEC KAIMUR', venue: 'Cricket Ground' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '8:00 Am - 9:30 Am', match: 'GEC BUXAR VS SEC SASARAM', venue: 'Cricket Ground' },
                    { time: '9:45 Am - 11:15 Am', match: 'GEC BHOJPUR VS NCE CHANDI', venue: 'Cricket Ground' }
                ]
            },
            {
                day: 'Day 3 (17 Jan 2026)',
                matches: [
                    { time: '8:00 Am - 9:30 Am', match: 'GEC BUXAR VS BCE BKP', venue: 'Cricket Ground' },
                    { time: '9:45 Am - 11:15 Am', match: 'GEC BHOJPUR VS GEC KAIMUR', venue: 'Cricket Ground' },
                    { time: '1:00 Pm - 2:00 Pm', match: 'FINAL: Group A Winner vs Group B Winner', venue: 'Cricket Ground' }
                ]
            }
        ]
    },

    // --- KABADDI ---
    {
        id: 'zonal-kabaddi-boys',
        name: 'Kabaddi (Boys)',
        category: 'sports',
        icon: '🤼',
        status: 'upcoming',
        venue: 'GEC Buxar Kabaddi Court',
        image: '/EVENT PHOTO/KABADDI.png',
        description: 'Raid and Tackle',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Dr. Shailesh Kumar', phone: '7906209274', role: 'Faculty' },
            { name: 'Divyank Pandey', phone: '7979976762', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '9:00 Am', match: 'GEC BUXAR VS SEC SASARAM', venue: 'Kabaddi Court' },
                    { time: '10:30 Am', match: 'BCE BKP VS GEC BHOJPUR', venue: 'Kabaddi Court' },
                    { time: '12:00 Pm', match: 'GEC BUXAR VS BCE BKP', venue: 'Kabaddi Court' },
                    { time: '2:00 Pm', match: 'GEC BHOJPUR VS NCE CHANDI', venue: 'Kabaddi Court' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '9:00 Am', match: 'SEC SASARAM VS GEC KAIMUR', venue: 'Kabaddi Court' },
                    { time: '11:00 Am', match: 'NCE CHANDI VS BCE BKP', venue: 'Kabaddi Court' }
                ]
            },
            {
                day: 'Day 3 (17 Jan 2026)',
                matches: [
                    { time: '10:00 Am', match: 'FINAL', venue: 'Kabaddi Court' }
                ]
            }
        ]
    },
    {
        id: 'zonal-kabaddi-girls',
        name: 'Kabaddi (Girls)',
        category: 'sports',
        icon: '🤼',
        status: 'upcoming',
        venue: 'GEC Buxar Kabaddi Court',
        image: '/EVENT PHOTO/KABADDI.png',
        description: 'Raid and Tackle',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Vijay Kumar', phone: '9304405557', role: 'Faculty' },
            { name: 'Abhishek Kumar', phone: '9155147615', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '3:00 Pm', match: 'GEC BUXAR VS GEC KAIMUR', venue: 'Kabaddi Court' },
                    { time: '4:00 Pm', match: 'BCE BKP VS GEC BHOJPUR', venue: 'Kabaddi Court' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '1:00 Pm', match: 'SEC SASARAM VS GEC KAIMUR', venue: 'Kabaddi Court' },
                    { time: '2:00 Pm', match: 'NCE CHANDI VS GEC BHOJPUR', venue: 'Kabaddi Court' },
                    { time: '3:00 Pm', match: 'GEC BUXAR VS SEC SASARAM', venue: 'Kabaddi Court' }
                ]
            },
            {
                day: 'Day 3 (17 Jan 2026)',
                matches: [
                    { time: '9:00 Am', match: 'FINAL', venue: 'Kabaddi Court' }
                ]
            }
        ]
    },

    // --- TABLE TENNIS ---
    {
        id: 'zonal-tt-boys',
        name: 'Table Tennis (Boys)',
        category: 'sports',
        icon: '🏓',
        status: 'upcoming',
        venue: 'GEC Buxar Academic TT Court',
        image: '/EVENT PHOTO/TT.png',
        description: 'Ping Pong Zonal',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Ankit Kumar', phone: '9931602713', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '12:30 Pm - 3:30 Pm', match: 'Group Matches', venue: 'TT Court' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '9:30 Am - 12:30 Pm', match: 'Group Matches', venue: 'TT Court' },
                    { time: '2:30 PM', match: 'FINAL', venue: 'TT Court' }
                ]
            }
        ]
    },
    {
        id: 'zonal-tt-girls',
        name: 'Table Tennis (Girls)',
        category: 'sports',
        icon: '🏓',
        status: 'upcoming',
        venue: 'GEC Buxar Academic TT Court',
        image: '/EVENT PHOTO/TT.png',
        description: 'Ping Pong Zonal',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Sushil Kumar', phone: '8544688394', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '10:00 Am - 11:00 Am', match: 'GEC BUXAR VS SEC SASARAM', venue: 'TT Court' },
                    { time: '11:00 Am - 12:00 Pm', match: 'BCE BKP VS NCE CHANDI', venue: 'TT Court' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '10:00 Am - 12:00 Pm', match: 'Group Matches', venue: 'TT Court' },
                    { time: '4:00 PM', match: 'FINAL', venue: 'TT Court' }
                ]
            }
        ]
    },

    // --- VOLLEYBALL ---
    {
        id: 'zonal-volleyball-boys',
        name: 'Volleyball (Boys)',
        category: 'sports',
        icon: '🏐',
        status: 'upcoming',
        venue: 'GEC Buxar Academic Ground',
        image: '/EVENT PHOTO/VOLLEYBALL.png',
        description: 'Spike and Block',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Divyank Pandey', phone: '7979976762', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '9:00 Am', match: 'GEC BUXAR VS GEC KAIMUR', venue: 'VB Court' },
                    { time: '11:00 Am', match: 'GEC BHOJPUR VS SEC SASARAM', venue: 'VB Court' },
                    { time: '2:00 Pm', match: 'NCE CHANDI VS BCE BKP', venue: 'VB Court' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '9:00 Am', match: 'NCE CHANDI VS SEC SASARAM', venue: 'VB Court' }
                ]
            },
            {
                day: 'Final (17 Jan 2026)',
                matches: [
                    { time: '11:00 Am', match: 'FINAL: Top Group A vs Top Group B', venue: 'VB Court' }
                ]
            }
        ]
    },
    {
        id: 'zonal-volleyball-girls',
        name: 'Volleyball (Girls)',
        category: 'sports',
        icon: '🏐',
        status: 'upcoming',
        venue: 'GEC Buxar Academic Ground',
        image: '/EVENT PHOTO/VOLLEYBALL.png',
        description: 'Spike and Block',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Abhishek Kumar', phone: '9155147615', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '9:00 Am', match: 'GEC BHOJPUR VS GEC BUXAR', venue: 'VB Court' },
                    { time: '11:00 Am', match: 'BCE BKP VS SEC SASARAM', venue: 'VB Court' },
                    { time: '2:00 Pm', match: 'GEC BHOJPUR VS GEC KAIMUR', venue: 'VB Court' }
                ]
            },
            {
                day: 'Final (17 Jan 2026)',
                matches: [
                    { time: '9:00 Am', match: 'FINAL: Top Group A vs Top Group B', venue: 'VB Court' }
                ]
            }
        ]
    },

    // --- ATHLETICS ---
    {
        id: 'zonal-athletics',
        name: 'Athletics (Boys & Girls)',
        category: 'sports',
        icon: '🏃',
        status: 'upcoming',
        venue: 'GEC Buxar Cricket Ground',
        image: '/EVENT PHOTO/ATHELITUCS.png',
        description: 'Sprints, Jumps, Throws',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Sushil Kumar', phone: '8544688394', role: 'Student' },
            { name: 'Ankit Kumar', phone: '9931602713', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026) - Qualifiers & Throws',
                matches: [
                    { time: '10:00 AM', match: '100m (Boys/Girls)', venue: 'Cricket Ground' },
                    { time: '1:00 PM', match: '200m (Boys/Girls)', venue: 'Cricket Ground' },
                    { time: '3:00 PM', match: '400m (Boys/Girls)', venue: 'Cricket Ground' },
                    { time: '2:00 PM - 4:00 PM', match: 'Shot Put & Discus', venue: 'Cricket Ground' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026) - Finals & Jumps',
                matches: [
                    { time: 'Morning', match: '100m/200m/400m Finals', venue: 'Cricket Ground' },
                    { time: '2:00 PM', match: 'High Jump & Long Jump', venue: 'Cricket Ground' },
                    { time: '2:00 PM', match: 'Javelin', venue: 'Cricket Ground' }
                ]
            },
            {
                day: 'Day 3 (17 Jan 2026) - Relays',
                matches: [
                    { time: '9:00 AM - 1:00 PM', match: '4x100m & 4x400m Relay', venue: 'Cricket Ground' }
                ]
            }
        ]
    },

    // --- CULTURAL EVENTS ---
    {
        id: 'zonal-cultural',
        name: 'Literary & Cultural Events',
        category: 'cultural',
        icon: '🎭',
        status: 'upcoming',
        venue: 'Auditorium / Academic Building',
        image: '/EVENT PHOTO/POSTER.png',
        description: 'Debate, Painting, Singing, Quiz & more',
        rulebook: '/RULEBOOK/UMANG\'25 GEC BUXAR BROUCHER.pdf',
        coordinators: [
            { name: 'Aditya Gupta', phone: '7004052302', role: 'Student Head' },
            { name: 'Rounak Kumar', phone: '6201758723', role: 'Student' }
        ],
        schedule: [
            {
                day: 'Day 1 (15 Jan 2026)',
                matches: [
                    { time: '10:00 AM - 11:00 AM', match: 'Essay Writing', venue: 'Room 102' },
                    { time: '10:30 AM - 12:00 PM', match: 'Poster Making', venue: 'Faculty Lounge' },
                    { time: '11:00 AM - 12:00 PM', match: 'Story Writing', venue: 'Room 102' },
                    { time: '2:00 PM - 3:30 PM', match: 'Group Discussion', venue: 'Auditorium' },
                    { time: '3:30 PM - 4:30 PM', match: 'Extempore', venue: 'Auditorium' },
                    { time: '4:30 PM - 7:30 PM', match: 'Dumb Charades', venue: 'Auditorium' }
                ]
            },
            {
                day: 'Day 2 (16 Jan 2026)',
                matches: [
                    { time: '10:30 AM - 1:30 PM', match: 'Painting Competition', venue: 'Room 211' },
                    { time: '11:00 AM - 12:30 PM', match: 'Quiz Competition', venue: 'Faculty Lounge' },
                    { time: '2:00 PM - 3:30 PM', match: 'Debate Competition', venue: 'Auditorium' },
                    { time: '7:00 PM - 9:00 PM', match: 'Singing Competition', venue: 'Auditorium' }
                ]
            }
        ]
    }
];

// --- INTRA COLLEGE EVENTS (Completed) ---
export const intraEvents = [
    // --- LITERARY & CULTURAL ---
    {
        name: 'Essay Writing (Hindi)',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sneha Kumari' },
            { position: '🥈 Runner-up', name: 'Biru Kumar' }
        ]
    },
    {
        name: 'Essay Writing (English)',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Shreya Sinha' },
            { position: '🥈 Runner-up', name: 'Ritik Kumar' }
        ]
    },
    {
        name: 'Story Writing (Hindi)',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Anjali Kumari' },
            { position: '🥈 Runner-up', name: 'Jaya Pandey' }
        ]
    },
    {
        name: 'Story Writing (English)',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Amanjeet Kr.' },
            { position: '🥈 Runner-up', name: 'Swarnim Sharan' }
        ]
    },
    {
        name: 'Group Discussion',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Piyush Maubey' },
            { position: '🥈 Runner-up', name: 'Brishal' }
        ]
    },
    {
        name: 'Debate Competition',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Piyush Pathak' },
            { position: '🥈 Runner-up', name: 'Vishal Kumar' }
        ]
    },
    {
        name: 'Dumb Charade',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Prem Kumar & Amit' },
            { position: '🥈 Runner-up', name: 'Aditya Gupta & Raman Kumar' }
        ]
    },
    {
        name: 'Singing Competition',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Udit Narayan' },
            { position: '🥈 Runner-up', name: 'Ranveer Kumar' }
        ]
    },
    {
        name: 'Painting Competition',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Shivani Kumari' },
            { position: '🥈 Runner-up', name: 'Raman Kumar' }
        ]
    },
    {
        name: 'Extempore',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Piyush Pathak' },
            { position: '🥈 Runner-up', name: 'Aditya Tiwari' }
        ]
    },
    {
        name: 'Quiz Competition',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Ritik (24C70LE)' },
            { position: '🥈 Runner-up', name: 'Vikash (24M18)' }
        ]
    },
    {
        name: 'Poster Making Competition',
        category: 'cultural',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Aman Kumar Happy' },
            { position: '🥈 Runner-up', name: 'Prem Golden' }
        ]
    },

    // --- ATHLETICS ---
    {
        name: 'Javelin Throw (Female)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Rekha Kumari (23CS20) – 15 m' },
            { position: '🥈 Runner-up', name: 'Annu Kumari (25CS09) – 10.06 m' }
        ]
    },
    {
        name: 'Javelin Throw (Male)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Chandra Prakash (24CS04) – 36.78 m' },
            { position: '🥈 Runner-up', name: 'Nikhil Sharma (24CS19) – 32.82 m' }
        ]
    },
    {
        name: 'Shot Put (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Pratibha Kumari (25EE23)' },
            { position: '🥈 Runner-up', name: 'Ritu Pandey (23CS30)' }
        ]
    },
    {
        name: 'Shot Put (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Chandra Prakash (24CS04)' },
            { position: '🥈 Runner-up', name: 'Nikhil Kumar (24CS44)' }
        ]
    },
    {
        name: 'Discuss Throw (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sapna Kumari (24C28)' },
            { position: '🥈 Runner-up', name: 'Rekha Kumari (23CS20)' }
        ]
    },
    {
        name: 'Discuss Throw (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Chandra Prakash (24CS04)' },
            { position: '🥈 Runner-up', name: 'Nikhil (24CS44)' }
        ]
    },
    {
        name: 'High Jump (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sapna Kumari' },
            { position: '🥈 Runner-up', name: 'Sonali Bharti' }
        ]
    },
    {
        name: 'High Jump (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sujal Singh' },
            { position: '🥈 Runner-up', name: 'Ranjeet Kumar' }
        ]
    },
    {
        name: 'Long Jump (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Ashika Yadav' },
            { position: '🥈 Runner-up', name: 'Sapna Kumari' }
        ]
    },
    {
        name: 'Long Jump (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sujal Singh' },
            { position: '🥈 Runner-up', name: 'Faizan' }
        ]
    },
    {
        name: '100m Sprint (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sonali Bharti' },
            { position: '🥈 Runner-up', name: 'Anuradha Kumari' }
        ]
    },
    {
        name: '100m Sprint (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Faizan Raza Khan' },
            { position: '🥈 Runner-up', name: 'Sujal Singh' }
        ]
    },
    {
        name: '200m Sprint (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sonali Bharti' },
            { position: '🥈 Runner-up', name: 'Ashika Yadav' }
        ]
    },
    {
        name: '200m Sprint (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Faizan Raza Khan' },
            { position: '🥈 Runner-up', name: 'Prince Rajput' }
        ]
    },
    {
        name: '400m Sprint (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Sonali Bharti' },
            { position: '🥈 Runner-up', name: 'Pratibha Kumari' }
        ]
    },
    {
        name: '400m Sprint (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Navneet Kumar' },
            { position: '🥈 Runner-up', name: 'Prince Kumar' }
        ]
    },
    {
        name: '4×100 Relay (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Team: Rekha Kumari (C), Ashika Yadav, Sapna Kumari, Annu Kumari' },
            { position: '🥈 Runner-up', name: 'Team: Vidya Kumari (C), Komal Kumari, Shivani Kumari, Aropita Kumari' }
        ]
    },
    {
        name: '4×400 Relay (Girls)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Komal Kumari (C), Aropita Kumari, Shivani Kumari, Vidya Kumari' },
            { position: '🥈 Runner-up', name: 'Rishika Raj, Pratibha Kumari, Anshu Kumari, Annu Kumari' }
        ]
    },
    {
        name: '4×100 Relay (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Faizan Raza Khan, Kishan Prash Rai, Ravi Raj' },
            { position: '🥈 Runner-up', name: 'Ramesh Kumar, Aditya Gupta, Gautam Kumar' }
        ]
    },
    {
        name: '4×400 Relay (Boys)',
        category: 'sports',
        subcategory: 'Athletics',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Aditya Gupta, Shekhar Kumar, Nikhil Kumar, Ranjeet Kumar' },
            { position: '🥈 Runner-up', name: 'Navneet Kumar, Ashutosh Kumar, Ajay Rana, Prince Kumar' }
        ]
    },

    // --- INDIVIDUAL GAMES ---
    {
        name: 'Carrom (Boys)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Abhishek Kumar' },
            { position: '🥈 Runner-up', name: 'Sahil Kumar' }
        ]
    },
    {
        name: 'Carrom (Girls)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Anjali Kumari' },
            { position: '🥈 Runner-up', name: 'Pragya Kumari' }
        ]
    },
    {
        name: 'Chess (Girls)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Anjali Kumari Shukla' },
            { position: '🥈 Runner-up', name: 'Deepanjali Devi' }
        ]
    },
    {
        name: 'Chess (Boys)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Pranav R Prakash' },
            { position: '🥈 Runner-up', name: 'Dev Raj' }
        ]
    },

    // --- TEAM SPORTS ---
    {
        name: 'Volleyball (Boys)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Rising Falcon (Capt: Amit Kumar)' },
            { position: '🥈 Runner-up', name: 'Court Pushers (Capt: Anurag Kumar)' }
        ]
    },
    {
        name: 'Volleyball (Girls)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Team Captain: Khusi Kumar' },
            { position: '🥈 Runner-up', name: 'Team Captain: Sapna Kumari' }
        ]
    },
    {
        name: 'Badminton (Boys)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Team B (Capt: Prabhat Kr. Singh)' },
            { position: '🥈 Runner-up', name: 'Team A (Capt: Md. Amir)' }
        ]
    },
    {
        name: 'Badminton (Girls)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Team A (Capt: Ritu Pandey)' },
            { position: '🥈 Runner-up', name: 'Team C (Capt: Khusi Kumar)' }
        ]
    },
    {
        name: 'Table Tennis (Girls)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Captain: Aanya' },
            { position: '🥈 Runner-up', name: 'Captain: Aushi Thakur' }
        ]
    },
    {
        name: 'Table Tennis (Boys)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: 'Info', name: 'Not filled in document' }
        ]
    },
    {
        name: 'Kabaddi (Boys)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Dabang Warriors (Capt: Pritvi Raj Chauhan)' },
            { position: '🥈 Runner-up', name: 'Baghi Bulls (Capt: Aditya Pandey)' }
        ]
    },
    {
        name: 'Kabaddi (Girls)',
        category: 'sports',
        status: 'completed',
        winners: [
            { position: '🥇 Winner', name: 'Team Captain: Sushma Kumari' },
            { position: '🥈 Runner-up', name: 'Team Captain: Ritu Pandey' }
        ]
    }
];

export const eventsData = []; 
