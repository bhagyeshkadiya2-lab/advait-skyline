import type { Metadata } from 'next';
import { PROJECT_DATA } from './project-data';

export const BASE_URL = 'https://www.advaitskyline.com';

export interface PageMetadataProps {
  locale: string;
  path?: string; // e.g. '/1-bhk-flats-naroli'
  customTitle?: string;
  customDescription?: string;
  keywords?: string[];
  ogImage?: string;
}

interface MetaInfo {
  title: string;
  description: string;
}

const ROUTE_METADATA: Record<string, Record<string, MetaInfo>> = {
  '/': {
    en: {
      title: 'Advait Skyline | 1 & 2 BHK Flats & Shops in Naroli–Bhilad by Dhanasvi Infra',
      description: 'Explore Advait Skyline: G+14 residential and commercial landmark on Naroli–Silvassa main road, 200m from Naroli–Bhilad Checkpost. 39+ amenities, 1 & 2 BHK luxury flats and prime commercial shops.',
    },
    hi: {
      title: 'अद्वैत स्काईलाइन | नरोली–भिलाड़ में 1 व 2 बीएचके फ्लैट्स और दुकानें — धनस्वी इन्फ्रा',
      description: 'अद्वैत स्काईलाइन: नरोली–सिलवासा मेन रोड, नरोली–भिलाड़ चेकपोस्ट से 200 मी. दूर G+14 आवासीय एवं कमर्शियल प्रोजेक्ट। 39+ एमिनिटीज, 1 और 2 बीएचके लक्जरी फ्लैट्स।',
    },
    gu: {
      title: 'અદ્વૈત સ્કાયલાઇન | નરોલી–ભિલાડ ખાતે 1 અને 2 BHK ફ્લેટ્સ અને દુકાનો — ધનસ્વી ઇન્ફ્રા',
      description: 'અદ્વૈત સ્કાયલાઇન: નરોલી–સેલવાસ મેઇન રોડ, નરોલી–ભિલાડ ચેકપોસ્ટથી 200 મીટર દૂર G+14 રહેણાંક અને કોમર્શિયલ લેન્ડમાર્ક. 39+ સુવિધાઓ, 1 અને 2 BHK લક્ઝરી ફ્લેટ્સ.',
    },
  },
  '/1-bhk-flats-naroli': {
    en: {
      title: '1 BHK Flats in Naroli–Bhilad | 511 Sq. Ft. at Advait Skyline',
      description: '511 sq. ft. carpet 1 BHK luxury apartments at Naroli–Bhilad Checkpost, Dadra & Nagar Haveli. 2 bathrooms, private balcony, modern kitchen, 39+ lifestyle amenities.',
    },
    hi: {
      title: 'नरोली–भिलाड़ में 1 बीएचके फ्लैट्स | 511 वर्ग फुट — अद्वैत स्काईलाइन',
      description: '511 वर्ग फुट कारपेट 1 बीएचके लक्जरी अपार्टमेंट्स नरोली–भिलाड़ चेकपोस्ट के पास। 2 बाथरूम, प्राइवेट बालकनी, आधुनिक किचन और 39+ एमिनिटीज।',
    },
    gu: {
      title: 'નરોલી–ભિલાડ ખાતે 1 BHK ફ્લેટ્સ | 511 ચો.ફૂટ — અદ્વૈત સ્કાયલાઇન',
      description: '511 ચોરસ ફૂટ કાર્પેટ 1 BHK લક્ઝરી એપાર્ટમેન્ટ્સ નરોલી–ભિલાડ ચેકપોસ્ટ નજીક. 2 બાથરૂમ, પ્રાઇવેટ બાલ્કની, આધુનિક કિચન અને 39+ સુવિધાઓ.',
    },
  },
  '/2-bhk-flats-naroli': {
    en: {
      title: '2 BHK Flats in Naroli–Bhilad | 573 Sq. Ft. Luxury Residences — Advait Skyline',
      description: '573 sq. ft. carpet 2 BHK luxury residences on Naroli–Silvassa main road, 200m from Naroli–Bhilad Checkpost. 16ft living hall, 5\'6" sunset balcony, 2 bathrooms, 3 AC points.',
    },
    hi: {
      title: 'नरोली–भिलाड़ में 2 बीएचके लक्जरी फ्लैट्स | 573 वर्ग फुट — अद्वैत स्काईलाइन',
      description: '573 वर्ग फुट कारपेट 2 बीएचके लक्जरी फ्लैट्स नरोली–सिलवासा मेन रोड पर। 16 फुट का हॉल, 5\'6" चौड़ी बालकनी, 2 बाथरूम, 3 एसी पॉइंट्स।',
    },
    gu: {
      title: 'નરોલી–ભિલાડ ખાતે 2 BHK લક્ઝરી ફ્લેટ્સ | 573 ચો.ફૂટ — અદ્વૈત સ્કાયલાઇન',
      description: '573 ચોરસ ફૂટ કાર્પેટ 2 BHK લક્ઝરી રેસિડેન્સ નરોલી–સેલવાસ મેઇન રોડ પર. 16 ફૂટ લિવિંગ હોલ, 5\'6" બાલ્કની, 2 બાથરૂમ, 3 એસી પોઇન્ટ્સ.',
    },
  },
  '/commercial-shops-naroli': {
    en: {
      title: 'Commercial Shops & Offices in Naroli–Silvassa Main Road | Advait Skyline',
      description: 'Prime ground & 1st floor retail shops (1–20) and 2nd floor office spaces with 5\' otta and high footfall on Naroli–Silvassa highway near Bhilad.',
    },
    hi: {
      title: 'नरोली–सिलवासा मेन रोड पर कमर्शियल दुकानें व ऑफिस — अद्वैत स्काईलाइन',
      description: 'नरोली–सिलवासा मुख्य मार्ग पर ग्राउंड व फर्स्ट फ्लोर की रीटेल दुकानें एवं सेकंड फ्लोर ऑफिस स्पेस। 5\' चौड़ा ओटा, विशाल पार्किंग और उत्कृष्ट कनेक्टिविटी।',
    },
    gu: {
      title: 'નરોલી–સેલવાસ મેઇન રોડ પર કોમર્શિયલ દુકાનો અને ઓફિસ — અદ્વૈત સ્કાયલાઇન',
      description: 'નરોલી–સેલવાસ હાઇવે પર ગ્રાઉન્ડ અને 1લા માળે રીટેલ શોપ્સ તેમજ 2જા માળે પ્રીમિયમ ઓફિસ સ્પેસ. 5 ફૂટ પહોળો ઓટો અને હાઇ વિઝિબિલિટી.',
    },
  },
  '/amenities': {
    en: {
      title: '39+ Luxury Amenities | Advait Skyline Naroli–Bhilad',
      description: 'Experience 39+ world-class amenities at Advait Skyline: rooftop infinity pool, sky gym, landscaped gardens, banquet hall, children play area, indoor games and 24x7 security.',
    },
    hi: {
      title: '39+ लक्जरी सुविधाएं व एमिनिटीज | अद्वैत स्काईलाइन नरोली',
      description: 'अद्वैत स्काईलाइन में 39+ आधुनिक जीवनशैली सुविधाएं: रूफटॉप स्विमिंग पूल, जिम, बैंक्वेट हॉल, लैंडस्केप गार्डन, चिल्ड्रन्स प्ले एरिया और 24x7 सुरक्षा।',
    },
    gu: {
      title: '39+ લક્ઝરી સુવિધાઓ અને ક્લબહાઉસ | અદ્વૈત સ્કાયલાઇન નરોલી',
      description: 'અદ્વૈત સ્કાયલાઇનમાં 39+ પ્રીમિયમ એમિનિટીઝ: સ્વિમિંગ પૂલ, સ્કાય જિમ, બેન્ક્વેટ હોલ, બગીચો, ચિલ્ડ્રન પ્લે એરિયા અને 24 કલાક સુરક્ષા.',
    },
  },
  '/floor-plans': {
    en: {
      title: 'Floor Plans & Layouts | 1 BHK, 2 BHK & Shops — Advait Skyline',
      description: 'Explore detailed 2D architectural drawings and 3D isometric layout plans for 1 BHK (511 sq ft), 2 BHK (573 sq ft), and commercial retail shops.',
    },
    hi: {
      title: 'फ्लोर प्लान व लेआउट्स | 1 बीएचके, 2 बीएचके व दुकानें — अद्वैत स्काईलाइन',
      description: 'अद्वैत स्काईलाइन के 1 BHK (511 वर्ग फुट), 2 BHK (573 वर्ग फुट) और कमर्शियल दुकानों के 2D व 3D आर्किटेक्चरल लेआउट्स देखें।',
    },
    gu: {
      title: 'ફ્લોર પ્લાન અને લેઆઉટ | 1 BHK, 2 BHK અને દુકાનો — અદ્વૈત સ્કાયલાઇન',
      description: 'અદ્વૈત સ્કાયલાઇન 1 BHK (511 ચો.ફૂટ), 2 BHK (573 ચો.ફૂટ) તેમજ કોમર્શિયલ શોપ્સના વિગતવાર 2D અને 3D ફ્લોર પ્લાન જુઓ.',
    },
  },
  '/project-location': {
    en: {
      title: 'Project Location & Connectivity | Naroli–Bhilad Checkpost — Advait Skyline',
      description: 'Strategically situated on Naroli–Silvassa main road, 200m from Naroli–Bhilad Checkpost. 5 mins to Bhilad Rly Station, 10 mins to NH-48, 15 mins to Silvassa.',
    },
    hi: {
      title: 'प्रोजेक्ट लोकेशन एवं कनेक्टिविटी | नरोली–भिलाड़ चेकपोस्ट — अद्वैत स्काईलाइन',
      description: 'नरोली–सिलवासा मुख्य मार्ग, नरोली–भिलाड़ चेकपोस्ट से मात्र 200 मीटर। भिलाड़ रेलवे स्टेशन 5 मिनट, NH-48 10 मिनट और सिलवासा शहर 15 मिनट की दूरी पर।',
    },
    gu: {
      title: 'પ્રોજેક્ટ લોકેશન અને કનેક્ટિવિટી | નરોલી–ભિલાડ ચેકપોસ્ટ — અદ્વૈત સ્કાયલાઇન',
      description: 'નરોલી–સેલવાસ મેઇન રોડ પર સ્થિત, નરોલી–ભિલાડ ચેકપોસ્ટથી માત્ર 200 મીટર. ભિલાડ સ્ટેશન 5 મિનિટ, NH-48 10 મિનિટ અને સેલવાસ 15 મિનિટ.',
    },
  },
  '/gallery': {
    en: {
      title: 'Photo & Architecture Gallery | Advait Skyline Naroli',
      description: 'Browse architectural elevations, 3D renderings, luxury amenities, interior concepts and on-site views of Advait Skyline by Dhanasvi Infra.',
    },
    hi: {
      title: 'फोटो व आर्किटेक्चर गैलरी | अद्वैत स्काईलाइन नरोली',
      description: 'अद्वैत स्काईलाइन के 3D एलिवेशन, आधुनिक सुविधाएं, इंटीरियर डिजाइन्स और निर्माण तस्वीरों की आधिकारिक फोटो गैलरी।',
    },
    gu: {
      title: 'ફોટો અને આર્કિટેક્ચર ગેલેરી | અદ્વૈત સ્કાયલાઇન નરોલી',
      description: 'અદ્વૈત સ્કાયલાઇનના એલિવેશન, 3D રેન્ડરિંગ્સ, પ્રીમિયમ સુવિધાઓ અને સાઇટ ફોટોઝની અધિકૃત ગેલેરી.',
    },
  },
  '/construction-updates': {
    en: {
      title: 'Construction Updates & Milestone Progress | Advait Skyline',
      description: 'Track the latest verified construction milestones, structural progress and site developments at Advait Skyline, Naroli–Bhilad Checkpost.',
    },
    hi: {
      title: 'निर्माण प्रगति एवं साइट अपडेट्स | अद्वैत स्काईलाइन',
      description: 'अद्वैत स्काईलाइन नरोली की नवीनतम निर्माण प्रगति, स्ट्रक्चरल कार्य एवं समयबद्ध अपडेट्स देखें।',
    },
    gu: {
      title: 'બાંધકામ પ્રગતિ અને સાઇટ અપડેટ્સ | અદ્વૈત સ્કાયલાઇન',
      description: 'અદ્વૈત સ્કાયલાઇન નરોલી સાઇટનું ચાલુ બાંધકામ, સ્ટ્રક્ચરલ પ્રગતિ અને અધિકૃત અપડેટ્સ.',
    },
  },
  '/about-dhanasvi-infra': {
    en: {
      title: 'About Dhanasvi Infra | Builders & Developers in Dadra & Nagar Haveli',
      description: 'Learn about Dhanasvi Infra: commitment to quality, trust, architectural excellence and on-time delivery across residential and commercial developments.',
    },
    hi: {
      title: 'धनस्वी इन्फ्रा के बारे में | दादरा एवं नगर हवेली के प्रतिष्ठित डेवलपर्स',
      description: 'धनस्वी इन्फ्रा: गुणवत्ता, विश्वास और आधुनिक निर्माण का प्रतीक। दादरा एवं नगर हवेली में आवासीय एवं वाणिज्यिक परियोजनाओं के विश्वसनीय निर्माता।',
    },
    gu: {
      title: 'ધનસ્વી ઇન્ફ્રા વિશે | દાદરા અને નગર હવેલીના વિશ્વસનીય ડેવલપર્સ',
      description: 'ધનસ્વી ઇન્ફ્રા: ગુણવત્તા, વિશ્વાસ અને શ્રેષ્ઠ આર્કિટેક્ચર સાથે રહેણાંક અને વ્યાપારી પ્રોજેક્ટ્સનું નિર્માણ કરતી અગ્રણી કંપની.',
    },
  },
  '/contact': {
    en: {
      title: 'Contact Sales Office & Book Site Visit | Advait Skyline Naroli',
      description: 'Get in touch with Dhanasvi Infra sales team. Schedule your personalized site visit at Advait Skyline, Naroli–Bhilad Checkpost, or connect on WhatsApp.',
    },
    hi: {
      title: 'सेल्स ऑफिस से संपर्क करें एवं साइट विजिट बुक करें | अद्वैत स्काईलाइन',
      description: 'धनस्वी इन्फ्रा सेल्स टीम से सीधे संपर्क करें। अद्वैत स्काईलाइन साइट विजिट बुक करें या व्हाट्सएप पर तत्काल विवरण प्राप्त करें।',
    },
    gu: {
      title: 'સેલ્સ ઓફિસ સંપર્ક અને સાઇટ વિઝિટ બુકિંગ | અદ્વૈત સ્કાયલાઇન',
      description: 'ધનસ્વી ઇન્ફ્રા સેલ્સ ટીમ સાથે વાત કરો. અદ્વૈત સ્કાયલાઇન સાઇટ વિઝિટ શેડ્યૂલ કરો અથવા WhatsApp પર માહિતી મેળવો.',
    },
  },
  '/guides': {
    en: {
      title: 'Property Buying Guides | Naroli Real Estate & RERA — Advait Skyline',
      description: 'Comprehensive property guides for home buyers and investors in Naroli, Bhilad, and Silvassa. Explore home loan tips, RERA compliance, and locality insights.',
    },
    hi: {
      title: 'प्रॉपर्टी खरीद गाइड | नरोली रियल एस्टेट एवं रेरा गाइड',
      description: 'नरोली, भिलाड़ और सिलवासा में घर खरीदने वालों के लिए महत्वपूर्ण गाइड। होम लोन, रेरा नियम और इलाके का निवेश विश्लेषण।',
    },
    gu: {
      title: 'પ્રોપર્ટી ખરીદી ગાઇડ્સ | નરોલી રિયલ એસ્ટેટ અને રેરા માહિતી',
      description: 'નરોલી, ભિલાડ અને સેલવાસમાં ફ્લેટ કે દુકાન ખરીદવા માટે જરૂરી માહિતી, હોમ લોન ટિપ્સ અને રેરા ગાઇડ.',
    },
  },
  '/guides/buying-flat-in-naroli': {
    en: {
      title: 'Guide to Buying a Flat in Naroli & Bhilad | Industrial Hub Living',
      description: 'Everything you need to know about purchasing residential property in the thriving industrial belt of Naroli and Bhilad, Dadra & Nagar Haveli.',
    },
    hi: {
      title: 'नरोली व भिलाड़ में फ्लैट खरीदने की सम्पूर्ण गाइड | अद्वैत स्काईलाइन',
      description: 'दादरा एवं नगर हवेली के प्रमुख औद्योगिक केंद्र नरोली व भिलाड़ में आवासीय फ्लैट खरीदने की सम्पूर्ण जानकारी एवं लाभ।',
    },
    gu: {
      title: 'નરોલી અને ભિલાડમાં ફ્લેટ ખરીદવા માટેની સંપૂર્ણ માર્ગદર્શિકા',
      description: 'નરોલી-ભિલાડ ઔદ્યોગિક વિસ્તારમાં રહેણાંક મિલકત ખરીદવાના ફાયદા, કનેક્ટિવિટી અને જીવનશૈલીની માહિતી.',
    },
  },
  '/guides/rera-property-guide': {
    en: {
      title: 'D&NH RERA Property Guide | Advait Skyline PM3000002600013',
      description: 'Understanding RERA consumer protections, buyer rights, carpet area definitions, and verification for Advait Skyline under RERA PM3000002600013.',
    },
    hi: {
      title: 'दादरा एवं नगर हवेली रेरा गाइड | अद्वैत स्काईलाइन रेरा',
      description: 'रेरा के तहत खरीदारों के अधिकार, कारपेट एरिया के नियम और अद्वैत स्काईलाइन रेरा पंजीकरण PM3000002600013 की सम्पूर्ण जानकारी।',
    },
    gu: {
      title: 'દાદરા અને નગર હવેલી રેરા માર્ગદર્શિકા | અદ્વૈત સ્કાયલાઇન',
      description: 'રેરા કાયદા હેઠળ ગ્રાહક અધિકારો, કાર્પેટ એરિયાની સ્પષ્ટતા અને અદ્વૈત સ્કાયલાઇન રેરા નંબર PM3000002600013 ની ચકાસણી.',
    },
  },
  '/guides/home-loan-guide': {
    en: {
      title: 'Home Loan & Bank Approval Guide | Advait Skyline',
      description: 'Step-by-step home loan approval guide for Advait Skyline flats: required documents, leading bank tie-ups, EMI calculations and PMAY benefits.',
    },
    hi: {
      title: 'होम लोन एवं बैंक अप्रूवल गाइड | अद्वैत स्काईलाइन',
      description: 'अद्वैत स्काईलाइन फ्लैट्स के लिए बैंक लोन प्रक्रिया, आवश्यक दस्तावेज, ब्याज दरें और ईएमआई प्लानिंग की गाइड।',
    },
    gu: {
      title: 'હોમ લોન અને બેંક મંજૂરી ગાઇડ | અદ્વૈત સ્કાયલાઇન',
      description: 'અદ્વૈત સ્કાયલાઇનમાં ફ્લેટ ખરીદવા માટે હોમ લોનની સરળ પ્રક્રિયા, જરૂરી દસ્તાવેજો અને બેંક માર્ગદર્શન.',
    },
  },
  '/privacy-policy': {
    en: {
      title: 'Privacy Policy | DPDP Act 2023 Compliant — Advait Skyline',
      description: 'Privacy policy and personal data protection practices for Advait Skyline and Dhanasvi Infra under the Digital Personal Data Protection Act 2023.',
    },
    hi: {
      title: 'गोपनीयता नीति | अद्वैत स्काईलाइन — धनस्वी इन्फ्रा',
      description: 'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम 2023 (DPDP Act) के अनुरूप अद्वैत स्काईलाइन की गोपनीयता नीति।',
    },
    gu: {
      title: 'ગોપનીયતા નીતિ | અદ્વૈત સ્કાયલાઇન — ધનસ્વી ઇન્ફ્રા',
      description: 'ડિજિટલ પર્સનલ ડેટા પ્રોટેક્શન એક્ટ 2023 હેઠળ અદ્વૈત સ્કાયલાઇન અને ધનસ્વી ઇન્ફ્રાની પ્રાઇવસી પોલિસી.',
    },
  },
  '/terms-and-disclaimer': {
    en: {
      title: 'Terms & RERA Legal Disclaimer | Advait Skyline',
      description: 'Legal disclaimer, architectural representations, and RERA compliance terms for Advait Skyline by Dhanasvi Infra (RERA: PM3000002600013).',
    },
    hi: {
      title: 'नियम एवं रेरा कानूनी अस्वीकरण | अद्वैत स्काईलाइन',
      description: 'अद्वैत स्काईलाइन और धनस्वी इन्फ्रा के कानूनी नियम, आर्किटेक्चरल रेंडरिंग सूचना एवं रेरा अस्वीकरण।',
    },
    gu: {
      title: 'શરતો અને રેરા કાનૂની ડિસ્ક્લેમર | અદ્વૈત સ્કાયલાઇન',
      description: 'અદ્વૈત સ્કાયલાઇન ધનસ્વી ઇન્ફ્રા (રેરા PM3000002600013) ના કાનૂની નિયમો અને ડિસ્ક્લેમર.',
    },
  },
};

export function createPageMetadata({
  locale,
  path = '',
  customTitle,
  customDescription,
  keywords = [],
  ogImage = '/hero-bg.jpg',
}: PageMetadataProps): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const routeMatch = ROUTE_METADATA[normalizedPath];
  
  // Prefer route-specific localized metadata, fallback to custom, fallback to home default
  let title = customTitle;
  let description = customDescription;

  if (routeMatch) {
    const locMeta = routeMatch[locale] || routeMatch.en;
    // Only use customTitle if in English, otherwise prefer the localized dictionary title
    title = locale === 'en' && customTitle ? customTitle : locMeta.title;
    description = locale === 'en' && customDescription ? customDescription : locMeta.description;
  } else if (!title || !description) {
    const fallback = ROUTE_METADATA['/'][locale] || ROUTE_METADATA['/'].en;
    title = title || fallback.title;
    description = description || fallback.description;
  }

  const canonicalUrl = `${BASE_URL}${locale === 'en' ? '' : `/${locale}`}${normalizedPath === '/' ? '' : normalizedPath}`;

  const defaultKeywords = [
    'Advait Skyline',
    'Dhanasvi Infra',
    'Flats in Naroli',
    'Flats near Bhilad',
    '1 BHK flat Naroli',
    '2 BHK flat Naroli',
    'Commercial shops Naroli Silvassa',
    'Naroli Bhilad Checkpost',
    'Dadra and Nagar Haveli real estate',
    'Advait Skyline RERA PM3000002600013',
    'નરોલી માં ફ્લેટ',
    'નરોલી ભિલાડ પ્રોપર્ટી',
    'नरोली में 1 BHK फ्लैट',
    'नरोली भिलाड़ रियल एस्टेट',
  ];

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-IN': `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`,
        'hi-IN': `${BASE_URL}/hi${normalizedPath === '/' ? '' : normalizedPath}`,
        'gu-IN': `${BASE_URL}/gu${normalizedPath === '/' ? '' : normalizedPath}`,
        'x-default': `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: PROJECT_DATA.identity.name,
      locale: locale === 'hi' ? 'hi_IN' : locale === 'gu' ? 'gu_IN' : 'en_IN',
      type: 'website',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${PROJECT_DATA.identity.name} - ${PROJECT_DATA.identity.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
        { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}
