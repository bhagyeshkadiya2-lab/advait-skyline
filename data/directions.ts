/**
 * Advait Skyline — Transit Corridors & Commute Data
 * Verified from Official Brochure (Page 21) & Google Maps telemetry
 */

export interface CommuteCorridor {
  id: string;
  title: string;
  distance: string;
  time: string;
  route: string;
  mode: string;
  highlights: string[];
  transitTip: string;
}

export interface DirectionFaq {
  question: string;
  answer: string;
}

export const COMMUTE_CORRIDORS: CommuteCorridor[] = [
  {
    id: 'bhilad',
    title: 'From Bhilad Railway Station & NH-48',
    distance: '5.1 km',
    time: '10 mins',
    route: 'Bhilad East → Naroli Main Road → D&NH Checkpost → Advait Skyline',
    mode: 'Car / Bike / Auto',
    highlights: [
      'Exit Bhilad Railway Station on the East side (Station Road).',
      'Head east on the Bhilad–Naroli Main Road towards the Dadra & Nagar Haveli border.',
      'Cross the Gujarat–DNH Checkpost (200 m before site).',
      'Advait Skyline is prominently located on the left-hand side, opposite Vadfaliya village.',
    ],
    transitTip: 'Shared auto-rickshaws run continuously between Bhilad Station and Naroli Checkpost (₹50–₹70 shared fare, 10–12 minutes).',
  },
  {
    id: 'silvassa',
    title: 'From Central Silvassa (Capital City)',
    distance: '9.8 km',
    time: '13 mins',
    route: 'Silvassa City Center → Silvassa Stadium → Naroli Road → Advait Skyline',
    mode: 'Car / Bike / DNH Bus',
    highlights: [
      'Take the Naroli–Silvassa Main Road heading south toward Bhilad/Vapi.',
      'Pass Silvassa Sports Stadium (9.8 km) and BAPS Shri Swaminarayan Mandir (7.2 km).',
      'Continue past Naroli High School (2.4 km) and Primary Health Centre (3.0 km).',
      'Advait Skyline will appear on your right-hand side, exactly 200 meters before reaching the Bhilad Checkpost.',
    ],
    transitTip: 'D&NH state transport buses and private auto-rickshaws operate on this arterial corridor every 5 to 10 minutes throughout the day.',
  },
  {
    id: 'vapi',
    title: 'From Vapi Railway Station & GIDC',
    distance: '16.0 km',
    time: '25 mins',
    route: 'Vapi NH-48 Corridor → South to Bhilad Flyover → Naroli Road → Advait Skyline',
    mode: 'Car / Express Bus / Train',
    highlights: [
      'From Vapi City / NH-48 junction, take National Highway 48 South towards Mumbai for ~11 km.',
      'Take the Bhilad exit / underpass onto the Bhilad–Naroli Main Road.',
      'Drive straight east for 5.1 km towards the DNH border.',
      'Arrive at Advait Skyline 200 m past the checkpost.',
    ],
    transitTip: 'Commuters from Vapi can also take frequent local passenger/express trains to Bhilad Station (1 stop, 12 minutes), followed by a 10-minute auto ride.',
  },
  {
    id: 'sarigam',
    title: 'From Sarigam GIDC & Laxmi Vidyapeet',
    distance: '9.0 – 11.0 km',
    time: '18 – 21 mins',
    route: 'Sarigam Industrial Area → Bhilad Link Road → Naroli Main Road → Site',
    mode: 'Car / Two-Wheeler / Auto',
    highlights: [
      'Head north-east from Sarigam GIDC or Laxmi Vidyapeet Campus on the Bhilad connector road.',
      'Merge onto Bhilad–Naroli Road near Bhilad town.',
      'Proceed 5.1 km east directly to Advait Skyline.',
    ],
    transitTip: 'Ideal daily commute corridor for educators, engineers, and plant managers working in Sarigam GIDC looking for premium residential amenities in DNH.',
  },
];

export const DIRECTIONS_FAQS: DirectionFaq[] = [
  {
    question: 'Where is Advait Skyline located?',
    answer:
      'Advait Skyline is located on the Naroli–Silvassa Main Road, opposite Vadfaliya, exactly 200 meters from the Naroli–Bhilad Checkpost, Dadra & Nagar Haveli (Pin: 396235). Please note: this project is in Naroli near Silvassa (DNH), NOT in Narol, Ahmedabad.',
  },
  {
    question: 'How far is Advait Skyline from Bhilad Railway Station?',
    answer:
      'Advait Skyline is approximately 5.1 km (10 minutes driving time) from Bhilad Railway Station on the Western Railway line. Regular auto-rickshaws and shared transport connect Bhilad station with the Naroli–Bhilad Checkpost throughout the day.',
  },
  {
    question: 'How far is Advait Skyline from Silvassa city center?',
    answer:
      'Advait Skyline is 9.8 km (approximately 13 minutes drive) from the Silvassa Sports Stadium and Central Silvassa along the wide, multi-lane Naroli–Silvassa Main Road.',
  },
  {
    question: 'How do I reach Advait Skyline from Vapi?',
    answer:
      'From Vapi (16 km / 25 minutes), drive south on NH-48 to the Bhilad flyover, then turn east onto the Bhilad–Naroli Road for 5.1 km. Alternatively, board a 12-minute train from Vapi Station to Bhilad Station, then take a 10-minute auto to the site.',
  },
  {
    question: 'Is Advait Skyline in Gujarat or Dadra & Nagar Haveli?',
    answer:
      'Advait Skyline is situated in the Union Territory of Dadra & Nagar Haveli (DNH), precisely 200 meters past the Gujarat–DNH border checkpost. Residents benefit from DNH union territory administration and tax-friendly policies while enjoying seamless road access to Gujarat.',
  },
  {
    question: 'What are the GPS coordinates of Advait Skyline for navigation?',
    answer:
      'The verified coordinates are Latitude: 20.2798943° N, Longitude: 72.920547° E. Search for "Advait Skyline" on Google Maps or use our verified Google Business Profile link for turn-by-turn GPS navigation.',
  },
];
