/**
 * Advait Skyline — Single Source of Truth
 * Dhanasvi Infra — Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235
 * 
 * All facts, configurations, amenities, contacts and technical specs must derive from here.
 * Items requiring owner or official authority confirmation are tagged with pendingVerification: true
 * and cross-referenced in content/TODO-VERIFY.md.
 */

export interface Amenity {
  id: string;
  name: string;
  category: 'sports-fitness' | 'leisure-social' | 'kids-family' | 'wellness-nature' | 'safety-utilities';
  confirmedInBrochure: boolean;
  tagline: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface ConnectivityPoint {
  name: string;
  category: 'transit' | 'education' | 'healthcare' | 'civic' | 'commercial';
  time: string;
  distance: string;
  approxNote?: string;
}

export interface UnitLayout {
  type: '1-bhk' | '2-bhk';
  title: string;
  carpetAreaSqFt: number;
  carpetAreaSqM: number;
  balconyWidth: string;
  washAreaWidth: string;
  bathrooms: number;
  acPoints: number;
  rooms: { name: string; dimensions: string }[];
  keyFeatures: string[];
  renderPath: string;
  plan2DPath: string;
}

// Verified official Google Business Profile share link
export const GBP_MAPS_URL = 'https://share.google/1BK6JUvV05C14djr3';

export const PROJECT_DATA = {
  identity: {
    name: 'Advait Skyline',
    legalEntity: 'Dhanasvi Infra',
    entityType: 'Partnership Firm',
    tagline: 'Elevate Your Everyday',
    developerTagline: 'Where Quality Meets Trust',
    projectType: 'Residential & Commercial Mixed Landmark',
    structure: 'G+14 Floors, 3 Towers, Ground Floor Retail Shops (1–20), 2nd Floor Offices (1–6), Residential Above',
    totalTowers: '3 Towers',
    totalUnits: '{FILL_UNITS}', // TODO(FACT): Total residential units count
    reraNumber: 'PM3000002600013',
    reraAuthorityName: 'MAHA RERA (PM3000002600013)',
    reraPendingVerification: false,
    possessionDate: '{FILL_POSSESSION}', // TODO(FACT): Official RERA completion/possession month & year
    possessionNote: 'Under construction. Delivery timeline as per registered RERA agreement.',
    startingPrice1BHK: '{FILL_PRICE_1BHK}', // TODO(FACT): Starting price for 1 BHK (e.g. ₹XX Lakhs)
    startingPrice2BHK: '{FILL_PRICE_2BHK}', // TODO(FACT): Starting price for 2 BHK (e.g. ₹XX Lakhs)
    parkingAllocation: '{FILL_PARKING}', // TODO(FACT): Stilt/basement covered and open parking spaces count
    founderFace: {
      name: 'Dr. Divyraj Rathod',
      title: 'Founder & Visionary',
      pendingVerification: true,
    },
  },

  contact: {
    siteAddress: 'Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235',
    streetFrontage: 'Naroli–Silvassa Main Road',
    distanceFromCheckpost: '200 m',
    email: 'Dhanasviinfra@gmail.com',
    brochurePhones: ['+91 99090 62363', '+91 99090 72363'],
    primaryCallNumber: '+919909072363',
    whatsappLeadNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919909072390',
    whatsappFormatted: '+91 99090 72390',
    geoCoordinates: {
      latitude: 20.2798943,
      longitude: 72.920547,
      googleMapsPlaceUrl: GBP_MAPS_URL,
      embedIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6657930800615!2d72.920547!3d20.2798943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cd00330b9017%3A0x8c8df8922e650cec!2sAdvait%20Skyline!5e0!3m2!1sen!2sin!4v1717657200000!5m2!1sen!2sin',
    },
  },

  team: {
    architect: {
      name: 'Parul Kansara',
      credentials: 'B.Arch., A.I.I.A., Regn No. CA/94/16797',
      firm: 'Takshashila Architects',
      location: 'Vapi / D&NH',
    },
    structuralConsultant: {
      name: 'Janak Bhavsar',
      credentials: 'M.E. Struct., F.I.E., M.I.G.S., Chartered Engineer',
      firm: 'Takshashila Structural Consultants',
      location: 'Gujarat / D&NH',
    },
  },

  residential: {
    oneBhk: {
      type: '1-bhk',
      title: '1 BHK Premium Residence',
      carpetAreaSqFt: 511,
      carpetAreaSqM: 47.47,
      balconyWidth: "4'0\" Wide",
      washAreaWidth: "4'0\" Wide",
      bathrooms: 2,
      acPoints: 2,
      rooms: [
        { name: 'Living Hall', dimensions: "10'0\" × 15'9\"" },
        { name: 'Bedroom', dimensions: "10'0\" × 11'0\"" },
        { name: 'Modern Kitchen', dimensions: "8'9\" × 7'0\"" },
        { name: 'Foyer', dimensions: "4'0\" × 7'4½\"" },
        { name: 'Balcony', dimensions: "4'0\" Wide" },
        { name: 'Attached Toilet', dimensions: "6'0\" × 4'0\"" },
        { name: 'Common Toilet', dimensions: "6'0\" × 4'0\"" },
        { name: 'Dedicated Wash Area', dimensions: "4'0\" Wide" },
      ],
      keyFeatures: [
        'Spacious airy living hall with private foyer',
        'Cross-ventilated master bedroom',
        'Contemporary kitchen with polished granite platform',
        '2 full bathrooms (Attached & Common) for guest privacy',
        '2 dedicated AC electrical points pre-installed',
        'Full ceiling light points in all rooms',
        'Bigger sundeck balcony with clear roadside views',
        'Ample concealed utility storage space',
      ],
      renderPath: '/1bhk-layout.jpg',
      plan2DPath: '/1bhk-layout.jpg',
    } as UnitLayout,

    twoBhk: {
      type: '2-bhk',
      title: '2 BHK Luxury Residence',
      carpetAreaSqFt: 573,
      carpetAreaSqM: 53.23,
      balconyWidth: "5'6\" Wide",
      washAreaWidth: "3'6\" Wide",
      bathrooms: 2,
      acPoints: 3,
      rooms: [
        { name: 'Grand Living Hall', dimensions: "16'0\" × 10'6\"" },
        { name: 'Master Bedroom', dimensions: "10'9\" × 10'0\"" },
        { name: 'Second Bedroom', dimensions: "9'0\" × 10'0\"" },
        { name: 'Modular Kitchen', dimensions: "9'0\" × 7'0\"" },
        { name: 'Foyer', dimensions: "4'0\" × 4'4½\"" },
        { name: 'Wide Sundeck Balcony', dimensions: "5'6\" Wide" },
        { name: 'Attached Toilet', dimensions: "7'0\" × 4'0\"" },
        { name: 'Common Toilet', dimensions: "4'0\" × 6'0\"" },
        { name: 'Dedicated Wash Area', dimensions: "3'6\" Wide" },
      ],
      keyFeatures: [
        'Expansive 16-foot long grand living room',
        'Two spacious bedrooms with generous wardrobe recesses',
        '5\'6" wide panoramic sunset balcony',
        'Ergonomic kitchen layout with natural light',
        '3 dedicated AC points (Living + both bedrooms)',
        'Ceiling light points throughout',
        '2 premium tiled bathrooms with branded fixtures',
        'Separate private wash & utility balcony',
      ],
      renderPath: '/2bhk-layout.jpg',
      plan2DPath: '/2bhk-layout.jpg',
    } as UnitLayout,
  },

  commercial: {
    tagline: 'The New Edge of Commercial Opportunity',
    frontage: 'Direct high-visibility frontage on Naroli–Silvassa main road',
    levels: [
      {
        level: 'Ground Floor',
        description: 'Shops 1 to 20 with 5-foot wide customer otta, main-road frontage, grand foyer, high-speed elevators, fire escape staircase & meter room.',
      },
      {
        level: '1st Floor',
        description: 'Retail & commercial floor plate designed for high-density customer footfall and flexible showroom configurations.',
      },
      {
        level: '2nd Floor',
        description: 'Offices 1 to 6 with private attached balconies, peaceful executive environment, and elevator access.',
      },
    ],
    useCases: [
      { id: 'office', label: 'Corporate Office', icon: 'Briefcase' },
      { id: 'hospital', label: 'Clinic & Hospital', icon: 'Stethoscope' },
      { id: 'showroom', label: 'Automobile / Retail Showroom', icon: 'Store' },
      { id: 'restaurant', label: 'Fine Dine & Café', icon: 'Utensils' },
      { id: 'gym', label: 'Fitness Center / Gym', icon: 'Dumbbell' },
      { id: 'supermarket', label: 'Supermarket & Mart', icon: 'ShoppingBag' },
      { id: 'jewellery', label: 'Jewellery Showroom', icon: 'Gem' },
      { id: 'bank', label: 'Nationalized / Private Bank & ATM', icon: 'Landmark' },
      { id: 'tuition', label: 'Coaching & Tuition Institute', icon: 'GraduationCap' },
      { id: 'salon', label: 'Luxury Salon & Spa', icon: 'Scissors' },
      { id: 'dairy', label: 'Dairy & Specialty Gourmet', icon: 'Coffee' },
    ],
    complianceNotice: 'Commercial layouts, dimensions, and storefront specifications are subject to final architectural layout and RERA filings. Contact the sales team for current availability and allotment details.',
  },

  amenitiesHeroCount: '39+',
  amenities: [
    // --- SPORTS & FITNESS ---
    {
      id: 'swimming-pool',
      name: 'Swimming Pool',
      category: 'sports-fitness',
      confirmedInBrochure: true,
      tagline: 'Resort-Style Aquatic Sanctuary',
      description: 'Crystal-clear temperature-tempered pool complete with private poolside deck and separate toddler pool zone.',
      iconName: 'Waves',
      highlight: true,
    },
    {
      id: 'gym-male-female',
      name: 'Separate Gym (Male & Female)',
      category: 'sports-fitness',
      confirmedInBrochure: true,
      tagline: 'Dual-Wing Fitness Arena',
      description: 'Fully air-conditioned separate fitness wings for men and women equipped with commercial strength and cardio machines.',
      iconName: 'Dumbbell',
      highlight: true,
    },
    {
      id: 'basketball-court',
      name: 'Basketball Court',
      category: 'sports-fitness',
      confirmedInBrochure: true,
      tagline: 'Regulation Hardcourt Hoop',
      description: 'High-impact outdoor basketball court with perimeter safety netting and shock-absorbing sports flooring.',
      iconName: 'Trophy',
    },
    {
      id: 'box-cricket',
      name: 'Box Cricket Arena',
      category: 'sports-fitness',
      confirmedInBrochure: true,
      tagline: 'Turf Cricket Under Floodlights',
      description: 'Enclosed synthetic turf box cricket arena for weekend leagues, youth tournaments, and family matches.',
      iconName: 'Target',
      highlight: true,
    },
    {
      id: 'jogging-track',
      name: 'Jogging Track',
      category: 'sports-fitness',
      confirmedInBrochure: true,
      tagline: 'Paved Sunrise Running Circuit',
      description: 'Seamless perimeter jogging loop lined with foliage and gentle night illumination for morning and evening runners.',
      iconName: 'Footprints',
    },
    {
      id: 'yoga-space',
      name: 'Yoga & Meditation Space',
      category: 'sports-fitness',
      confirmedInBrochure: true,
      tagline: 'Zen Garden Deck',
      description: 'Open-air wooden-decked pavilion designed for sunrise pranayama, meditation sessions, and holistic well-being.',
      iconName: 'HeartPulse',
    },
    {
      id: 'indoor-games',
      name: 'Indoor Games Room',
      category: 'sports-fitness',
      confirmedInBrochure: true,
      tagline: 'Table Tennis, Carrom & Chess',
      description: 'Air-conditioned recreation lounge featuring tournament table tennis, carrom boards, chess tables, and billiards.',
      iconName: 'Gamepad2',
    },

    // --- LEISURE & SOCIAL ---
    {
      id: 'club-house',
      name: 'Grand Club House',
      category: 'leisure-social',
      confirmedInBrochure: true,
      tagline: 'Community Gathering Centerpiece',
      description: 'Double-height community center designed for private family functions, resident assemblies, and festive galas.',
      iconName: 'Building',
      highlight: true,
    },
    {
      id: 'mini-theater',
      name: 'Mini Theater',
      category: 'leisure-social',
      confirmedInBrochure: true,
      tagline: 'Fully Air-Conditioned Private Cinema',
      description: 'Acoustically insulated private screening auditorium with plush reclining seating and surround audio.',
      iconName: 'Film',
      highlight: true,
    },
    {
      id: 'library-lounge',
      name: 'Library & Reading Lounge',
      category: 'leisure-social',
      confirmedInBrochure: true,
      tagline: 'Quiet Intellectual Retreat',
      description: 'Curated book collection, high-speed Wi-Fi workstations, and comfortable wingback reading chairs.',
      iconName: 'BookOpen',
    },
    {
      id: 'party-lawn',
      name: 'Party Lawn & Open Plot',
      category: 'leisure-social',
      confirmedInBrochure: true,
      tagline: 'Manicured Celebration Turf',
      description: 'Expansive natural grass lawn fitted with event electrification and catering access for landmark milestone events.',
      iconName: 'Sparkles',
    },
    {
      id: 'temple',
      name: 'Ganesha Temple',
      category: 'leisure-social',
      confirmedInBrochure: true,
      tagline: 'Peaceful Spiritual Sanctum',
      description: 'Vastu-aligned marble temple situated in an auspicious garden corner for daily morning prayers and quiet reflection.',
      iconName: 'Flame',
    },

    // --- KIDS & FAMILY ---
    {
      id: 'children-play-area',
      name: "Children's Play Area",
      category: 'kids-family',
      confirmedInBrochure: true,
      tagline: 'Safe Multi-Activity Playground',
      description: 'Soft-padded safety surface with multi-play towers, slides, swings, and climbing frames.',
      iconName: 'Smile',
    },
    {
      id: 'toddler-play-zone',
      name: 'Toddler Play Zone',
      category: 'kids-family',
      confirmedInBrochure: true,
      tagline: 'Padded Soft Play for Little Ones',
      description: 'Low-height, impact-cushioned soft sensory play zone specifically created for toddlers under parental watch.',
      iconName: 'Baby',
    },
    {
      id: 'senior-citizen-sitting',
      name: 'Senior Citizen Sitting Area',
      category: 'kids-family',
      confirmedInBrochure: true,
      tagline: 'Shaded Ergonomic Garden Gazebos',
      description: 'Tranquil shaded gazebos with orthopedic backrest seating, handrails, and zero-stair step-free access.',
      iconName: 'Armchair',
    },

    // --- WELLNESS & NATURE ---
    {
      id: 'landscape-sitting',
      name: 'Landscape Sitting Area',
      category: 'wellness-nature',
      confirmedInBrochure: true,
      tagline: 'Curated Architectural Perches',
      description: 'Sculpted stone benches and timber decks nestled among indigenous flora and ornamental tree canopies.',
      iconName: 'Trees',
    },
    {
      id: 'garden-area',
      name: 'Botanical Garden Area',
      category: 'wellness-nature',
      confirmedInBrochure: true,
      tagline: 'Lush Green Canopy Oasis',
      description: 'Extensively landscaped garden beds planted with flowering native trees, oxygen-rich shrubs, and seasonal blooms.',
      iconName: 'Flower2',
    },
    {
      id: 'music-in-garden',
      name: 'Acoustic Garden Music',
      category: 'wellness-nature',
      confirmedInBrochure: true,
      tagline: 'Ambient Classical Harmony',
      description: 'Concealed weather-resistant sound system dispersing gentle instrumental rāgas and nature melodies at dawn and dusk.',
      iconName: 'Music',
    },

    // --- SAFETY & UTILITIES (Confirmed in Brochure) ---
    {
      id: 'cctv-surveillance',
      name: '24×7 CCTV Surveillance',
      category: 'safety-utilities',
      confirmedInBrochure: true,
      tagline: 'Complete Perimeter Guarding',
      description: 'HD night-vision cameras monitoring all entry gates, basement parking levels, lift lobbies, and boundary perimeters.',
      iconName: 'ShieldAlert',
    },
    {
      id: 'emergency-power-backup',
      name: 'Emergency Power Backup',
      category: 'safety-utilities',
      confirmedInBrochure: true,
      tagline: 'Auto-Switch Generator Grid',
      description: 'Heavy-duty silent DG genset ensuring continuous operation of common elevators, water pumps, and corridor lighting.',
      iconName: 'Zap',
    },
    {
      id: 'sewage-treatment-plant',
      name: 'Sewage Treatment Plant (STP)',
      category: 'safety-utilities',
      confirmedInBrochure: true,
      tagline: 'Sewage Treatment Plant as per EC Rules',
      description: 'Biological STP as per State Environmental Committee pollution control norms; supplies recycled flush and gardening water.',
      iconName: 'Recycle',
    },

    // --- AMENITIES 22 TO 39+ (Configured for 39+ Explorer; pending formal verification) ---
    {
      id: 'ev-charging',
      name: 'EV Charging Infrastructure',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Future-Ready Electric Mobility',
      description: 'Dedicated electric vehicle charging bays in the basement for 2-wheelers and 4-wheelers.',
      iconName: 'BatteryCharging',
    },
    {
      id: 'branded-elevators',
      name: 'High-Speed Branded Elevators',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Rapid Vertical Transport',
      description: 'Branded automated passenger elevators in each tower with ARD safety rescue device.',
      iconName: 'ArrowUpDown',
    },
    {
      id: 'stretcher-lift',
      name: 'Dedicated Stretcher & Service Lift',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Emergency Medical Mobility',
      description: 'Full-depth hospital stretcher elevator per wing for medical emergencies and heavy furniture carriage.',
      iconName: 'Activity',
    },
    {
      id: 'grand-entrance-gate',
      name: 'Grand Architectural Entrance Gate',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Boom-Barrier Access Control',
      description: 'Monumental security archway with boom barriers, digital visitor check-in, and intercom checkpoint.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'intercom-connectivity',
      name: 'Intercom Security Connectivity',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Direct Gate-to-Flat Link',
      description: 'Internal intercom system connecting every residential apartment directly to the main security post.',
      iconName: 'PhoneCall',
    },
    {
      id: 'rainwater-harvesting',
      name: 'Rainwater Harvesting System',
      category: 'wellness-nature',
      confirmedInBrochure: false,
      tagline: 'Groundwater Recharging Pits',
      description: 'Integrated rainwater collection network channeling roof runoff into subterranean percolation wells.',
      iconName: 'CloudRain',
    },
    {
      id: 'solar-lighting',
      name: 'Solar Common Area Lighting',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Clean Energy Campus Illumination',
      description: 'High-efficiency solar photovoltaic streetlights and campus walkway lamps reducing maintenance bills.',
      iconName: 'Sun',
    },
    {
      id: 'fire-fighting-system',
      name: 'Government-Norm Fire Safety',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Sprinklers, Hydrants & Smoke Sensors',
      description: 'Fire suppression system including wet risers, hose reels, fire alarms, and dedicated fire escape stairs.',
      iconName: 'FlameKindling',
    },
    {
      id: 'reflexology-walkway',
      name: 'Acupressure Reflexology Path',
      category: 'wellness-nature',
      confirmedInBrochure: false,
      tagline: 'Natural Stone Acupressure Walk',
      description: 'Pebble-embedded therapeutic barefoot pathway stimulating vital nerve centers during morning strolls.',
      iconName: 'Footprints',
    },
    {
      id: 'gazebo-sitting',
      name: 'Designer Garden Gazebos',
      category: 'wellness-nature',
      confirmedInBrochure: false,
      tagline: 'Weatherproof Outdoor Pavilions',
      description: 'Cast-iron and teak-finished architectural pavilions providing quiet conversation alcoves.',
      iconName: 'Tent',
    },
    {
      id: 'fountain-feature',
      name: 'Water Cascade & Fountain',
      category: 'wellness-nature',
      confirmedInBrochure: false,
      tagline: 'Refreshing Architectural Waterwall',
      description: 'Serene recirculating fountain at the podium arrival court creating ambient cooling.',
      iconName: 'Droplets',
    },
    {
      id: 'admin-office',
      name: 'Society Management & Admin Office',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Dedicated Facility Care Desk',
      description: 'On-site administrative cabin for building manager, accounts, maintenance staff, and resident queries.',
      iconName: 'Briefcase',
    },
    {
      id: 'basement-parking',
      name: 'Covered Multi-Level Basement Parking',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Spacious Weatherproof Parking',
      description: 'Wide, well-ventilated parking bays with epoxy flooring, directional signage, and gentle ramps.',
      iconName: 'Car',
    },
    {
      id: 'two-wheeler-parking',
      name: 'Dedicated Two-Wheeler Bays',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Organized Scooter & Bike Slots',
      description: 'Clearly marked individual slots keeping campus driveways open and hazard-free.',
      iconName: 'Bike',
    },
    {
      id: 'drivers-restroom',
      name: "Chauffeur & Drivers' Lounge",
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Respectful Facility Amenities',
      description: 'Dedicated restroom and waiting seating in the basement for visiting drivers and support staff.',
      iconName: 'Coffee',
    },
    {
      id: 'waste-management',
      name: 'Solid Waste Segregation System',
      category: 'wellness-nature',
      confirmedInBrochure: false,
      tagline: 'Dry & Wet Garbage Management',
      description: 'Color-coded recycling bins and organic composting facility for eco-friendly society waste disposal.',
      iconName: 'Trash2',
    },
    {
      id: 'solar-perimeter-fence',
      name: 'Perimeter Solar Security Fencing',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Monitored Campus Boundary',
      description: 'Full-boundary compound wall equipped with anti-intrusion safety lighting and monitored solar pulses.',
      iconName: 'Shield',
    },
    {
      id: 'paved-driveways',
      name: 'Wide Internal Paved Roads',
      category: 'safety-utilities',
      confirmedInBrochure: false,
      tagline: 'Heavy-Duty Interlocking Pavers',
      description: 'Dual-lane internal circulation roads engineered for emergency fire tender movement.',
      iconName: 'Milestone',
    },
    {
      id: 'wifi-clubhouse',
      name: 'Campus Wi-Fi Connectivity',
      category: 'leisure-social',
      confirmedInBrochure: false,
      tagline: 'High-Speed Broadband Common Zones',
      description: 'Complimentary fiber Wi-Fi coverage across the clubhouse, library, and pool deck for work-from-home residents.',
      iconName: 'Wifi',
    },
  ] as Amenity[],

  connectivity: [
    {
      name: 'Naroli–Bhilad Checkpost',
      category: 'civic',
      time: '1 min',
      distance: '200 m',
      approxNote: 'Immediate walking reach; prime junction connecting Gujarat & Dadra and Nagar Haveli.',
    },
    {
      name: 'Naroli High School',
      category: 'education',
      time: '4 min',
      distance: '2.4 km',
      approxNote: 'Reputed secondary education center in close residential proximity.',
    },
    {
      name: 'Banks (SBI / BOB / HDFC)',
      category: 'commercial',
      time: '3 min',
      distance: '2.5 km',
      approxNote: 'Naroli commercial banking hub with 24/7 ATM facilities.',
    },
    {
      name: 'Primary Health Centre (PHC)',
      category: 'healthcare',
      time: '5 min',
      distance: '3.0 km',
      approxNote: 'Government healthcare dispensary for quick emergency consultations.',
    },
    {
      name: 'Bhilad Railway Station',
      category: 'transit',
      time: '10 min',
      distance: '5.1 km',
      approxNote: 'Direct Western Railway main line connectivity toward Mumbai and Surat.',
    },
    {
      name: 'BAPS Shri Swaminarayan Mandir',
      category: 'civic',
      time: '9 min',
      distance: '7.2 km',
      approxNote: 'Landmark spiritual temple complex in tranquil settings.',
    },
    {
      name: 'Laxmi Vidyapeet Campus',
      category: 'education',
      time: '14 min (approx.)',
      distance: '9.0 km',
      approxNote: 'Premier multi-disciplinary engineering and academic educational campus.',
    },
    {
      name: 'Silvassa Sports Stadium',
      category: 'civic',
      time: '13 min',
      distance: '9.8 km',
      approxNote: 'Silvassa municipal athletic stadium and cultural exhibition grounds.',
    },
    {
      name: 'Namo Medical Education & Research Institute',
      category: 'healthcare',
      time: '21 min',
      distance: '14.0 km',
      approxNote: 'Flagship medical college and tertiary care multi-speciality hospital.',
    },
    {
      name: 'Vapi Railway Station & Commercial Center',
      category: 'transit',
      time: '25 min',
      distance: '16.0 km',
      approxNote: 'Major industrial rail junction connecting Vande Bharat, Rajdhani, and express lines.',
    },
  ] as ConnectivityPoint[],

  specifications: [
    {
      title: 'Structure',
      description: 'Quality-controlled earthquake-resistant RCC framed structural build designed by chartered structural engineers.',
      icon: 'Building2',
    },
    {
      title: 'Flooring',
      description: 'Premium double-charged vitrified floor tiles with matching skirting across living room, bedrooms, kitchen, and passage areas.',
      icon: 'LayoutGrid',
    },
    {
      title: 'Kitchen',
      description: 'Polished natural stone / granite platform fitted with high-grade stainless steel sink (S.S. sink) and designer glazed ceramic tile dado up to lintel height.',
      icon: 'ChefHat',
    },
    {
      title: 'Doors & Frames',
      description: 'Polished natural stone door frames fitted with high-durability waterproof laminated flush doors and premium cylindrical locks.',
      icon: 'DoorClosed',
    },
    {
      title: 'Windows',
      description: 'Powder-coated anodized aluminium sliding windows with high-grade clear float glass and safety grill protection.',
      icon: 'Grid3X3',
    },
    {
      title: 'Electrical & Wiring',
      description: 'Concealed copper wiring with Earth Leakage Circuit Breaker (ELCB) tripper, single-phase electric meter, and adequate points for ACs, TV, and kitchen appliances.',
      icon: 'Zap',
    },
    {
      title: 'Elevators / Lifts',
      description: 'Branded automated high-speed passenger elevators in each tower building plus one designated stretcher elevator for medical convenience.',
      icon: 'ArrowUpDown',
    },
    {
      title: 'Toilets & Plumbing',
      description: 'Glazed anti-skid ceramic tile flooring with designer wall dado up to lintel level, concealed internal CPVC/UPVC piping, and branded sanitaryware.',
      icon: 'Droplet',
    },
    {
      title: 'Wall Finish & Paint',
      description: 'Smooth double-coat cement putty finish on internal walls; long-lasting weather-shield acrylic emulsion paint on all exterior surfaces.',
      icon: 'Paintbrush',
    },
    {
      title: 'Fire Safety',
      description: 'Comprehensive fire safety installation compliant with government regulations, including wet riser system, external yard hydrants, and manual call points.',
      icon: 'Flame',
    },
  ],

  brandPartners: [
    { name: 'Varmora', category: 'Vitrified Tiles', pendingVerification: true },
    { name: 'Larsen & Toubro', category: 'Construction Components', pendingVerification: true },
    { name: 'RR Kabel', category: 'Electrical Cables', pendingVerification: true },
    { name: 'Aris', category: 'Fittings & Fixtures', pendingVerification: true },
    { name: 'Astral Pipes', category: 'Plumbing & Drainage', pendingVerification: true },
    { name: 'Havells', category: 'Switches & Electricals', pendingVerification: true },
    { name: 'Prince Pipes', category: 'Piping Solutions', pendingVerification: true },
  ],

  disclaimerText: 'Artistic Rendering — for information, presentation & guidance only. The specifications, amenities, plans, imagery, and dimensions shown on this website and in the project brochure are indicative and subject to change without prior notice as may be decided by the developer or competent authorities. All dimensions are approximate and measured plaster-to-plaster. This website does not constitute an offer, contract, or guarantee of any kind.',
} as const;
