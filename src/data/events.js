export const FESTIVAL_DETAILS = {
    name: 'UMANG 2026',
    tagline: 'Annual Sports & Cultural Fest',
    organizer: 'DSTTE, Bihar',
    host: 'Government Engineering College, Buxar',
    dates: {
        start: '2026-01-10',
        end: '2026-01-12'
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
    }
};

export const eventsData = [
    // --- SPORTS ---
    {
        id: 'cricket',
        name: 'Cricket',
        category: 'sports',
        icon: '🏏',
        status: 'upcoming',
        gender: 'Boys',
        venue: 'GEC Buxar Cricket Ground',
        description: 'The gentleman\'s game. T20 Format.',
        coordinators: [
            { name: 'Divyank Pandey', phone: '7979976762' },
            { name: 'Keshav Raj', phone: '9470656222' },
            { name: 'Rishu Raj', phone: '8409673549' },
            { name: 'Aalok Kumar', phone: '8603696763' },
            { name: 'Ashutosh Kumar', phone: '9631184110' },
            { name: 'Navneet', phone: '8235949226' }
        ],
        schedule: [
            {
                day: 'Day 1 (10/01/2026)',
                matches: [
                    { time: '9:00 AM - 10:00 AM', match: 'Team Navneet Vs Team Rahul', venue: 'GEC Buxar Cricket Ground' },
                    { time: '11:00 AM - 1:00 PM', match: 'Team Keshav Vs Team Aditya', venue: 'GEC Buxar Cricket Ground' },
                    { time: '2:00 PM - 4:00 PM', match: 'Team Navneet Vs Team Rahul', venue: 'GEC Buxar Cricket Ground' }
                ]
            },
            {
                day: 'Day 2 (11/01/2026)',
                matches: [
                    { time: '9:00 AM - 10:00 AM', match: 'Team Aditya Vs Team Ashutosh', venue: 'GEC Buxar Cricket Ground' },
                    { time: '11:00 AM - 1:00 PM', match: 'Team Rahul Vs Team Rishu', venue: 'GEC Buxar Cricket Ground' },
                    { time: '2:00 PM - 4:00 PM', match: 'Team Keshav Vs Team Ashutosh', venue: 'GEC Buxar Cricket Ground' }
                ]
            },
            {
                day: 'Day 3 (12/01/2026) - Final Day',
                matches: [
                    { time: '9:00 AM - 10:00 AM', match: 'Group A Semi Final', venue: 'GEC Buxar Cricket Ground' },
                    { time: '11:00 AM - 1:00 PM', match: 'Group B Semi Final', venue: 'GEC Buxar Cricket Ground' },
                    { time: '2:00 PM - 4:00 PM', match: 'Final', venue: 'GEC Buxar Cricket Ground' }
                ]
            }
        ]
    },
    {
        id: 'volleyball-boys',
        name: 'Volleyball (Boys)',
        category: 'sports',
        icon: '🏐',
        status: 'upcoming',
        gender: 'Boys',
        venue: 'GEC Buxar Acad. Ground',
        description: 'High energy 6v6 match.',
        coordinators: [
            { name: 'Ayush Kumar', phone: '8292770725' },
            { name: 'Avinash Kumar', phone: '6206621858' },
            { name: 'Rao Ankit', phone: '8969135824' },
            { name: 'Kundan Kumar', phone: '9241183971' },
            { name: 'Amit Raj', phone: '8210758522' },
            { name: 'Vishal Kumar', phone: '9835202041' },
            { name: 'Kumari Khushi', phone: '9031599674' },
            { name: 'Anshika Raj', phone: '8986447235' }
        ],
        schedule: [
            {
                day: 'Day 1 (09/01/2026)',
                matches: [
                    { time: '9:00 AM - 10:30 AM', match: 'Team Anurag vs Team Ankit', venue: 'Acad. Ground' },
                    { time: '10:30 AM - 12:00 PM', match: 'Team Ayush vs Team Akshay', venue: 'Acad. Ground' },
                    { time: '1:30 PM - 3:00 PM', match: 'Team Anurag vs Team Ayush', venue: 'Acad. Ground' },
                    { time: '3:30 PM - 4:30 PM', match: 'Team Ankit vs Team Chiku', venue: 'Acad. Ground' }
                ]
            },
            {
                day: 'Day 2 (10/01/2026)',
                matches: [
                    { time: '9:00 AM - 10:30 AM', match: 'Team Anurag vs Team Akshay', venue: 'Acad. Ground' },
                    { time: '10:30 AM - 12:00 PM', match: 'Team Ayush vs Team Chiku', venue: 'Acad. Ground' },
                    { time: '1:30 PM - 3:00 PM', match: 'Team Anurag vs Team Chiku', venue: 'Acad. Ground' },
                    { time: '3:30 PM - 4:30 PM', match: 'Team Ankit vs Team Akshay', venue: 'Acad. Ground' }
                ]
            },
            {
                day: 'Day 3 (11/01/2026)',
                matches: [
                    { time: '9:00 AM - 10:30 AM', match: 'Team Ankit vs Team Ayush', venue: 'Acad. Ground' },
                    { time: '10:30 AM - 12:00 PM', match: 'Team Akshay vs Team Chiku', venue: 'Acad. Ground' },
                    { time: '1:30 PM - 3:00 PM', match: 'Semi-Final', venue: 'Acad. Ground' }
                ]
            }
        ]
    },
    {
        id: 'badminton-boys',
        name: 'Badminton (Boys)',
        category: 'sports',
        icon: '🏸',
        status: 'upcoming',
        gender: 'Boys',
        venue: 'Badminton Court',
        description: 'Smash and Drop.',
        coordinators: [
            { name: 'Abhishek Kumar', phone: '6203566373' },
            { name: 'Ankesh Kumar', phone: '9523562719' },
            { name: 'Shushant Kumar', phone: '8757155992' },
            { name: 'Prabhat Shankar Singh', phone: '7783032138' },
            { name: 'MD Aamir', phone: '9570080513' },
            { name: 'Satish Kumar', phone: '7783883573' },
            { name: 'Ritu Pandey', phone: '8521840199' },
            { name: 'Khushi Kumari', phone: '7667298094' }
        ],
        schedule: [
            {
                day: 'Day 1 (09/01/2026)',
                matches: [
                    { time: '10:00 AM - 10:30 AM', match: 'Team Amir vs Team Satish', venue: 'Badminton Court' },
                    { time: '10:30 AM - 11:00 AM', match: 'Team Prabhat vs Team Abhishek', venue: 'Badminton Court' },
                    { time: '11:00 AM - 11:30 AM', match: 'Team Amir vs Team Akash', venue: 'Badminton Court' },
                    { time: '11:30 AM - 12:00 PM', match: 'Team Prabhat vs Team Raushan', venue: 'Badminton Court' },
                    { time: '12:00 PM - 12:30 PM', match: 'Team Satish vs Team Akash', venue: 'Badminton Court' },
                    { time: '12:30 PM - 1:00 PM', match: 'Team Abhishek vs Team Raushan', venue: 'Badminton Court' }
                ]
            },
            {
                day: 'Day 2 (10/01/2026) - Semi Final',
                matches: [
                    { time: '4:00 PM - 4:30 PM', match: 'Team Amir vs TBD (Semi Final 1)', venue: 'Badminton Court' },
                    { time: '4:30 PM - 5:00 PM', match: 'Semi Final 2', venue: 'Badminton Court' }
                ]
            },
            {
                day: 'Day 3 (11/01/2026) - Final',
                matches: [
                    { time: '4:00 PM - 5:00 PM', match: 'Final', venue: 'Badminton Court' }
                ]
            }
        ]
    },
    {
        id: 'badminton-girls',
        name: 'Badminton (Girls)',
        category: 'sports',
        icon: '🏸',
        status: 'upcoming',
        gender: 'Girls',
        venue: 'Badminton Court',
        description: 'Smash and Drop.',
        coordinators: [
            { name: 'Ritu Pandey', phone: '8521840199' },
            { name: 'Khushi Kumari', phone: '7667298094' }
        ],
        schedule: [
            {
                day: 'Day 1 (09/01/2026)',
                matches: [
                    { time: '7:00 AM - 8:00 AM', match: 'Team Ritu vs Team Roshani', venue: 'Badminton Court' },
                    { time: '8:00 AM - 9:00 AM', match: 'Team Roshani vs Team Khushi', venue: 'Badminton Court' },
                    { time: '9:00 AM - 10:00 AM', match: 'Team Ritu vs Team Khushi', venue: 'Badminton Court' }
                ]
            },
            {
                day: 'Day 2 (11/01/2026) - Final',
                matches: [
                    { time: '10:00 AM - 10:45 AM', match: 'Final (Pos 1 vs Pos 2)', venue: 'Badminton Court' }
                ]
            }
        ]
    },
    {
        id: 'table-tennis-boys',
        name: 'Table Tennis (Boys)',
        category: 'sports',
        icon: '🏓',
        status: 'upcoming',
        gender: 'Boys',
        venue: 'Acad. Courtyard',
        description: 'Fast-paced action.',
        coordinators: [
            { name: 'Rahul Raj', phone: '6206848182' },
            { name: 'Anmol Saran', phone: '7340134201' },
            { name: 'Rupali Kumari', phone: '9471006391' },
            { name: 'Aanya', phone: '9798595818' },
            { name: 'Om Kumar', phone: '7970774219' }
        ],
        schedule: [
            {
                day: 'Day 1 (08/01/2026)',
                matches: [
                    { time: '2:00 PM - 2:45 PM', match: 'Team Rahul vs Team Om', venue: 'Acad. Courtyard' },
                    { time: '2:45 PM - 3:30 PM', match: 'Team Anmol vs Team Akash', venue: 'Acad. Courtyard' },
                    { time: '3:30 PM - 4:15 PM', match: 'Team Rahul vs Team Anshu', venue: 'Acad. Courtyard' },
                    { time: '4:15 PM - 5:00 PM', match: 'Team Anmol vs Team Akash', venue: 'Acad. Courtyard' }
                ]
            },
            {
                day: 'Day 2 (09/01/2026)',
                matches: [
                    { time: '10:00 AM - 10:45 AM', match: 'Team Anshu vs Team Om', venue: 'Acad. Courtyard' },
                    { time: '10:45 AM - 11:30 AM', match: 'Team Anmol vs Team Ankit', venue: 'Acad. Courtyard' },
                    { time: '12:00 PM - 12:45 PM', match: 'Semi Final 1', venue: 'Acad. Courtyard' },
                    { time: '12:45 PM - 1:30 PM', match: 'Semi Final 2', venue: 'Acad. Courtyard' }
                ]
            },
            {
                day: 'Day 3 (11/01/2026)',
                matches: [
                    { time: '10:00 AM - 11:00 AM', match: 'Final', venue: 'Acad. Courtyard' }
                ]
            }
        ]
    },
    {
        id: 'table-tennis-girls',
        name: 'Table Tennis (Girls)',
        category: 'sports',
        icon: '🏓',
        status: 'upcoming',
        gender: 'Girls',
        venue: 'Acad. Courtyard',
        description: 'Fast-paced action.',
        coordinators: [
            { name: 'Rupali Kumari', phone: '9471006391' },
            { name: 'Aanya', phone: '9798595818' }
        ],
        schedule: [
            {
                day: 'Day 1 (08/01/2026)',
                matches: [
                    { time: '2:00 PM - 2:45 PM', match: 'Team Arushi vs Team Aanya (Final)', venue: 'Acad. Courtyard' }
                ]
            }
        ]
    },
    {
        id: 'kabaddi',
        name: 'Kabaddi',
        category: 'sports',
        icon: '🤼',
        status: 'upcoming',
        gender: 'Boys',
        venue: 'Kabaddi Ground',
        description: 'Raid and Tackle.',
        coordinators: [
            { name: 'Harsh Gautam', phone: '6299113695' },
            { name: 'Ashwani', phone: '9631423152' },
            { name: 'Prithvi Raj Chauhan', phone: '9570617064' },
            { name: 'Ritu Pandey', phone: '8521840199' },
            { name: 'Radhika Kumari', phone: '9102781480' }
        ],
        schedule: [
            {
                day: 'Day 1',
                matches: [
                    { time: 'TBA', match: 'Team Prithvi vs Team Aditya', venue: 'Kabaddi Ground' },
                    { time: 'TBA', match: 'Team Ashwani vs Team Tej', venue: 'Kabaddi Ground' },
                    { time: 'TBA', match: 'Team Prithvi vs Team Ashwani', venue: 'Kabaddi Ground' }
                ]
            },
            {
                day: 'Day 2',
                matches: [
                    { time: 'TBA', match: 'Team Aditya vs Team Tej', venue: 'Kabaddi Ground' },
                    { time: 'TBA', match: 'Team Prithvi vs Team Tej', venue: 'Kabaddi Ground' },
                    { time: 'TBA', match: 'Team Ashwani vs Team Aditya', venue: 'Kabaddi Ground' }
                ]
            },
            {
                day: 'Day 3',
                matches: [
                    { time: 'TBA', match: 'Final', venue: 'Kabaddi Ground' }
                ]
            }
        ]
    },
    {
        id: 'carrom',
        name: 'Carrom',
        category: 'sports',
        icon: '🎯',
        status: 'upcoming',
        gender: 'Mixed',
        venue: 'Common Room',
        description: 'Strike and Pocket.',
        coordinators: [
            { name: 'Manish Kumar', phone: '9508868648' },
            { name: 'Akash Shrivashtav', phone: '8210983047' },
            { name: 'Rahul Parsad', phone: '8252088322' },
            { name: 'Mohammad Abaan', phone: '9508608840' },
            { name: 'Khushi Raj', phone: '9471208833' },
            { name: 'Anjali Kumari', phone: '9693509893' }
        ]
    },
    {
        id: 'chess',
        name: 'Chess',
        category: 'sports',
        icon: '♟️',
        status: 'upcoming',
        gender: 'Mixed',
        venue: 'Library Hall',
        description: 'Checkmate.',
        coordinators: [
            { name: 'Anurag Kumar', phone: '8271289284' },
            { name: 'Satyam Kumar', phone: '9341526497' },
            { name: 'Kalpana Kumari', phone: '7033911381' },
            { name: 'Khushi Raj', phone: '9229109738' }
        ]
    },
    {
        id: 'athletics-jumps',
        name: 'Long Jump & High Jump',
        category: 'sports',
        icon: '🏃',
        status: 'upcoming',
        gender: 'Mixed',
        venue: 'Athletics Ground',
        description: 'Jump higher, jump longer.',
        coordinators: [
            { name: 'Sushant Kumar', phone: '7903077943' },
            { name: 'Prince Raj', phone: '9031099637' },
            { name: 'Kishan Harsh Raj', phone: '9905335322' },
            { name: 'Sahil Kumar', phone: '7667477691' },
            { name: 'Anushka Yadav', phone: '7903965726' },
            { name: 'Juhi Pandey', phone: '9939763464' }
        ]
    },
    {
        id: 'athletics-track',
        name: 'Track Events (Sprints)',
        category: 'sports',
        icon: '🏃💨',
        status: 'live',
        gender: 'Mixed',
        venue: 'Athletics Ground',
        description: '100M, 200M, 400M races.',
        coordinators: [
            { name: 'Sushant Kumar', phone: '7903077943' },
            { name: 'Prince Raj', phone: '9031099637' }
        ],
        results: [
            {
                title: '100M Sprint (Boys) - Round 1',
                winners: [
                    { position: 1, name: 'Vaibhav Kumar (25CS64)' },
                    { position: 2, name: 'Aditya Gupta (04CS52)' }
                ]
            },
            {
                title: '100M Sprint (Girls) - Final',
                winners: [
                    { position: 1, name: 'Sonali' },
                    { position: 2, name: 'Anwardha' }
                ]
            },
            {
                title: '200M Sprint (Girls) - Round 1',
                winners: [
                    { position: 1, name: 'Sonali Bharti' },
                    { position: 2, name: 'Aashika Yadav' }
                ]
            },
            {
                title: '200M Sprint (Girls) - Round 1 (Heat 2)',
                winners: [
                    { position: 1, name: 'Anshika Raj' },
                    { position: 2, name: 'Annu Kumari' }
                ]
            }
        ],
        scorecard: '/scorecards/100_m_sprint_score_sheet.pdf'
    },
    {
        id: 'athletics-throws',
        name: 'Javelin, Shot Put, Discus',
        category: 'sports',
        icon: '💪',
        status: 'completed',
        gender: 'Mixed',
        venue: 'Athletics Ground',
        description: 'Test of power and technique.',
        coordinators: [
            { name: 'Sushil Kumar', phone: '8544688394' },
            { name: 'Ankit Kumar', phone: '8292574286' },
            { name: 'Anmol Sharan', phone: '7340134201' },
            { name: 'Rekha Kumari', phone: '7765911682' },
            { name: 'Sapna Kumari', phone: '9122135574' }
        ],
        results: [
            {
                title: 'Javelin Throw (Boys) - Final',
                winners: [
                    { position: 1, name: 'Chandra Prakash (24CS04)' },
                    { position: 2, name: 'Nikhil' }
                ]
            }
        ],
        scorecard: '/scorecards/Javelin_score_sheet_boys.pdf'
    },

    // --- CULTURAL ---
    {
        id: 'essay-writing',
        name: 'Essay Writing',
        category: 'cultural',
        icon: '📝',
        status: 'upcoming',
        gender: 'Mixed',
        status: 'upcoming',
        gender: 'Mixed',
        timing: '11:00 AM onwards',
        date: '10/01/2026',
        venue: 'Faculty Lounge',
        description: 'Express your thoughts through writing.',
        coordinators: [
            { name: 'Subish', batch: '2K22', branch: 'EE' },
            { name: 'Ankit Kumar', batch: '2K23', branch: 'CSE' },
            { name: 'Aditya Prakash', batch: '2K23', branch: 'CIVIL' }
        ]
    },
    {
        id: 'story-writing',
        name: 'Story Writing',
        category: 'cultural',
        icon: '✍️',
        status: 'upcoming',
        gender: 'Mixed',
        status: 'upcoming',
        gender: 'Mixed',
        timing: '11:00 AM onwards',
        date: '10/01/2026',
        venue: 'Faculty Lounge',
        description: 'Weave a compelling story.',
        coordinators: [
            { name: 'Subish', batch: '2K22', branch: 'EE' },
            { name: 'Aditya Ranjan', batch: '2K23', branch: 'ECE' },
            { name: 'Nitesh Kumar', batch: '2K23', branch: 'ECE' }
        ]
    },
    {
        id: 'group-discussion',
        name: 'Group Discussion',
        category: 'cultural',
        icon: '🗣️',
        status: 'upcoming',
        gender: 'Mixed',
        gender: 'Mixed',
        timing: '3:00 PM – 6:00 PM',
        date: '10/01/2026',
        venue: 'Faculty Lounge',
        description: 'Debate and discuss current topics.',
        coordinators: [
            { name: 'Tanuja', batch: '2K22', branch: 'CIVIL' },
            { name: 'Azad', batch: '2K22', branch: 'CIVIL' },
            { name: 'Khushi Raj', batch: '2K23', branch: 'CSE' }
        ]
    },
    {
        id: 'debate',
        name: 'Debate Competition',
        category: 'cultural',
        icon: '🎙️',
        status: 'upcoming',
        gender: 'Mixed',
        timing: '3:00 PM – 6:00 PM',
        date: '11/01/2026',
        venue: 'Auditorium',
        description: 'Verbal battle of logic and rhetoric.',
        coordinators: [
            { name: 'Tanuja', batch: '2K22', branch: 'CIVIL' },
            { name: 'Azad', batch: '2K22', branch: 'CIVIL' },
            { name: 'Ankit Kumar', batch: '2K23', branch: 'CSE' }
        ]
    },
    {
        id: 'dumb-charades',
        name: 'Dumb Charades',
        category: 'cultural',
        icon: '🎭',
        status: 'upcoming',
        gender: 'Mixed',
        timing: '2:30 PM - 4:30 PM',
        date: '11/01/2026',
        venue: 'Auditorium',
        description: 'Act it out!',
        coordinators: [
            { name: 'Aditya Gupta', batch: '2K22', branch: 'ECE' },
            { name: 'Rounak Kumar', batch: '2K22', branch: 'EE' },
            { name: 'Avantika', batch: '2K23', branch: 'CSE' }
        ]
    },
    {
        id: 'singing',
        name: 'Singing Competition',
        category: 'cultural',
        icon: '🎤',
        status: 'upcoming',
        gender: 'Mixed',
        timing: 'To Be Announced',
        date: '11/01/2026',
        venue: 'Auditorium',
        description: 'Solo and Duet performances.',
        coordinators: [
            { name: 'Kunal', batch: '2K22', branch: 'ECE' },
            { name: 'Rajiv', batch: '2K22', branch: 'CIVIL' },
            { name: 'Ranvir', batch: '2K23', branch: 'CIVIL' },
            { name: 'Khusi Singh', batch: '2K23', branch: 'CSE' }
        ]
    },
    {
        id: 'painting',
        name: 'Painting Competition',
        category: 'cultural',
        icon: '🎨',
        status: 'upcoming',
        gender: 'Mixed',
        timing: '11:00 AM - 2:00 PM',
        date: '11/01/2026',
        venue: 'Faculty Lounge / Room 210',
        description: 'Express through colors.',
        coordinators: [
            { name: 'Sneha', batch: '2K22', branch: 'EE' },
            { name: 'Vidya', batch: '2K22', branch: 'EE' },
            { name: 'Ankita', batch: '2K23', branch: 'CIVIL' }
        ]
    },
    {
        id: 'extempore',
        name: 'Extempore',
        category: 'cultural',
        icon: '⏱️',
        status: 'upcoming',
        gender: 'Mixed',
        timing: 'From 6:00 PM onwards',
        date: '11/01/2026',
        venue: 'Auditorium',
        description: 'Spontaneous speaking skills.',
        coordinators: [
            { name: 'Subish', batch: '2K22', branch: 'EE' },
            { name: 'Raj Kumar', batch: '2K23', branch: 'EE' },
            { name: 'Rajiv', batch: '2K22', branch: 'CIVIL' }
        ]
    },
    {
        id: 'quiz',
        name: 'Quiz Competition',
        category: 'cultural',
        icon: '❓',
        status: 'upcoming',
        gender: 'Mixed',
        timing: '11:00 AM onwards',
        date: '11/01/2026',
        venue: 'Seminar Hall',
        description: 'Test of general knowledge.',
        coordinators: [
            { name: 'Muskan', batch: '2K22', branch: 'EE' },
            { name: 'Ankit Kumar', batch: '2K23', branch: 'CSE' },
            { name: 'Utkarsh Sharma', batch: '2K23', branch: 'CIVIL' }
        ]
    },
    {
        id: 'poster-making',
        name: 'Poster Making',
        category: 'cultural',
        icon: '🖼️',
        status: 'upcoming',
        gender: 'Mixed',
        timing: 'To Be Announced',
        date: '11/01/2026',
        venue: 'Faculty Lounge',
        description: 'Visual communication art.',
        coordinators: [
            { name: 'Hemant Mukhiya', batch: '2K22', branch: 'CIVIL' },
            { name: 'Pragati Raj', batch: '2K22', branch: 'ECE' },
            { name: 'Vishal Kumar', batch: '2K23', branch: 'CSE' }
        ]
    }
];
