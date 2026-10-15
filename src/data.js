export const experience = [
  {
    title: 'Product Designer',
    company: 'OAK Foundation',
    dates: 'Sep 2026 – Oct 2026',
    points: ['Designed a participant registration and attendance platform.'],
  },
  {
    title: 'Product Design Engineer',
    company: 'Rideo ZW',
    dates: 'Aug 2026 – Present',
    points: [
      'Lead Rideo’s business strategy, vision and growth direction, keeping the company focused on real transportation challenges.',
      'Lead product strategy and UX/UI design across the Passenger App, Driver App, Operations Dashboard and website.',
      'Conduct customer and market research with passengers and drivers to identify problems, validate ideas and guide product decisions.',
      'Coordinate product development, testing and iteration, turning user feedback into practical improvements.',
      'Lead pilot operations, including driver onboarding, passenger activation, route testing, customer support and performance tracking.',
      'Build relationships with drivers, partners, communities and investors to support growth.',
      'Lead business development, fundraising and commercial strategy, including customer acquisition, partnerships and revenue.',
    ],
  },
  {
    title: 'Product Designer',
    company: 'PingHie',
    dates: 'Jul 2026 – Present',
    points: [
      'Founded a workplace messaging app that brings team communication, document approval and file version management into one place.',
      'Mobile MVP developed; desktop experience planned.',
    ],
  },
  {
    title: 'Product Design Instructor',
    company: 'Uncommon.org',
    dates: 'Feb 2025 – Present',
    points: [
      'Teach product design courses covering UX research, user flows, wireframing, prototyping, design systems and usability testing.',
      'Provide 1:1 feedback on student projects, portfolios and case studies, and lead design sprints and portfolio reviews.',
      'Assess student work, provide actionable critique and continuously improve course content.',
      'Host design critiques, portfolio reviews and career sessions to prepare students for roles in startups and tech companies.',
    ],
  },
  {
    title: 'Mobile App Designer',
    company: 'Upick',
    dates: 'Sep 2024 – Feb 2025',
    points: [
      'Owned the design of iOS and Android app experiences, from user research and flows to high-fidelity UI and interactive prototypes.',
      'Conducted user interviews, usability testing and app analytics analysis to improve retention and conversion.',
      'Built and maintained a scalable mobile design system and component library in Figma.',
      'Partnered with PMs, developers and stakeholders to turn product requirements into shippable app experiences.',
    ],
  },
];

// Images are imported so Vite hashes them and rewrites the URLs for the configured base path.
import rideoImage from './assets/images/Frame_755.svg';
import pinghieImage from './assets/images/pinghie_hero.jpg';
import oakImage from './assets/images/Register_Web_version.svg';

export const cases = [
  {
    key: 'rideo',
    title: 'Rideo',
    cats: ['Product', 'Mobile'],
    image: rideoImage,
    outcome: 'Pilot live on one route, with driver onboarding, passenger activation and route testing underway.',
    overview: 'A route-based mobility company in Zimbabwe, connecting passengers with trusted drivers travelling their way.',
    problem: 'Everyday commuters face unpredictable transport availability, long waiting times and limited visibility of rides along established routes.',
    role: 'Product strategy and UX/UI across the Passenger App, Driver App, Operations Dashboard and website.',
    approach: 'We built around established routes, kombi drivers and cash payment. The route is the core unit: drivers publish the routes they travel and passengers discover them. We started with one beachhead, Warren Park - Town CBD, and tested with 5 participants (2 drivers, 3 passengers).',
    link: { label: 'Visit Rideo', href: 'https://rideoapp.com' },
  },
  {
    key: 'pinghie',
    title: 'PingHie',
    cats: ['Product', 'Mobile'],
    image: pinghieImage,
    outcome: 'Built a v1 app for companies and NGOs.',
    overview: 'A workplace platform that brings conversations, approvals, and document management into one place.',
    problem: 'Work gets fragmented across chats, emails, and different tools. Requests get buried, approval statuses become unclear, and accountability is easily lost.',
    role: 'Product designer.',
    approach: 'Chat, approve and deliver in one flow: requests move from conversation to review to decision, with clear document versions and approval status.',
    link: { label: 'Visit PingHie', href: 'https://pinghie.netlify.app' },
  },
  {
    key: 'oak',
    title: 'OAK Foundation',
    cats: ['Product', 'Web'],
    image: oakImage,
    outcome: 'Built a participant registration and attendance platform.',
    overview: 'A participant registration and attendance platform for a partner convening.',
    problem: 'Participants need to register, find programme information, check in and discover partners. Organisers need attendance handled reliably.',
    role: 'Product designer.',
    approach: 'Designed registration, QR check-in, the programme and a partner directory, including success and error states.',
    link: null,
  },
];

export const startups = [
  {
    key: 'rideo',
    tag: 'Product Design Engineer',
    title: 'Rideo',
    role: 'Product Design Engineer · Product Strategy',
    desc: 'A route-based mobility company in Zimbabwe, connecting passengers with trusted drivers travelling their way.',
    problem: 'Everyday commuters face unpredictable transport availability, long waiting times and limited visibility of rides along established routes.',
    building: 'Rideo’s route-based mobility platform',
    link: { label: 'Visit Rideo', href: 'https://rideoapp.com' },
  },
  {
    key: 'pinghie',
    tag: 'Product Designer',
    title: 'PingHie',
    role: 'Product Designer',
    desc: 'A workplace platform that brings conversations, approvals, and document management into one place.',
    problem: 'Work gets fragmented across chats, emails, and different tools. Requests get buried, approval statuses become unclear, document versions get confusing, and accountability is easily lost.',
    building: 'PingHie',
    link: { label: 'Visit PingHie', href: 'https://pinghie.netlify.app' },
  },
];

export const principles = [
  { tag: 'Start', text: 'Begin with the person and the problem, then define the business model that makes it last.' },
  { tag: 'Build', text: 'Ship a working version early, and test it with real users in real conditions.' },
  { tag: 'Keep', text: 'Measure what changes, cut what doesn’t, and keep the product simple enough to run.' },
];

export const views = {
  about: { label: 'About me', title: 'Designer who builds the <span class="hl-dark">business too.</span>', dark: false },
  startups: { label: 'Startups', title: 'Building <span class="hl-dark">Rideo</span> and PingHie.', dark: true },
  work: { label: 'Selected work', title: 'Products shipped <span class="hl-dark">end to end.</span>', dark: true },
  contact: { label: 'Contact', title: 'Let’s build something <span class="hl-dark">useful.</span>', dark: true },
};

export const orderViews = ['about', 'startups', 'work', 'contact'];
export const defaultHero = {
  label: 'Product Design Engineer · UI/UX Developer',
  title: 'Human-centered products. <span class="hl-dark">Built to work.</span>',
};

export const thinking = [
  { quote: 'Build for the problem, not just the product.' },
  { quote: 'A good business starts with an eager want, then builds a repeatable way to deliver it.' },
  { quote: 'Design for how people actually behave, not how we assume they should behave.' },
];

export const stripMetrics = [
  { label: 'projects', value: '3 projects', sub: 'products shipped' },
  { label: 'years', value: '2 years', sub: 'since September 2024' },
  { label: 'roles', value: '5 roles', sub: 'across various companies and teams' },
];

export const stripNote = 'Currently building Rideo’s route-based mobility platform and PingHie.';

export const footer = {
  year: new Date().getFullYear().toString(),
  links: [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ],
};
