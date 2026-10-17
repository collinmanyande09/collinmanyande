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
    market: 'Two-sided marketplace · Urban mobility',
    stage: 'Live pilot · One route',
    headline: 'Build a route-first product that helps passengers discover trusted drivers already travelling their way.',
    cats: ['Product', 'Mobile'],
    image: rideoImage,
    evidence: 'Pilot research with 5 participants: 2 drivers and 3 passengers.',
    outcome: 'Pilot live on one route, with driver onboarding, passenger activation and route testing underway.',
    overview: 'A route-based mobility company in Zimbabwe, connecting passengers with trusted drivers travelling their way.',
    problem: 'Everyday commuters face unpredictable transport availability, long waiting times and limited visibility of rides along established routes.',
    role: 'Product strategy and UX/UI across the Passenger App, Driver App, Operations Dashboard and website.',
    approach: 'We treated established routes, kombi drivers and cash payment as product constraints. Drivers publish routes they already travel; passengers discover rides along those routes. To validate the model before expanding, we started with one beachhead, Warren Park - Town CBD, and tested with 5 participants: 2 drivers and 3 passengers.',
    link: { label: 'Visit Rideo', href: 'https://rideoapp.com' },
  },
  {
    key: 'pinghie',
    title: 'PingHie',
    market: 'B2B SaaS · Team workflows',
    stage: 'Mobile MVP',
    headline: 'Keep a request’s discussion, approval decision, and latest document version in one workflow.',
    cats: ['Product', 'Mobile'],
    image: pinghieImage,
    evidence: 'Mobile MVP developed; desktop experience is planned.',
    outcome: 'A mobile v1 for companies and NGOs that brings team conversations, approvals, and document version management together.',
    overview: 'A workplace platform that brings conversations, approvals, and document management into one place.',
    problem: 'Work gets fragmented across chats, emails, and different tools. Requests get buried, approval statuses become unclear, and accountability is easily lost.',
    role: 'Product designer.',
    approach: 'Rather than splitting chat, approvals and files across disconnected tools, we shaped one request flow: team conversation leads into review and a decision, with approval status and document versions kept in context. The mobile MVP is developed, with a desktop experience planned.',
    link: { label: 'Visit PingHie', href: 'https://pinghie-site.vercel.app' },
  },
  {
    key: 'oak',
    title: 'OAK Foundation',
    market: 'Event operations · Web',
    stage: 'Designed for a partner convening',
    headline: 'Give participants a clear path from registration to check-in while helping organizers manage attendance.',
    cats: ['Product', 'Web'],
    image: oakImage,
    evidence: 'Designed registration, QR check-in, programme information, and a partner directory.',
    outcome: 'Designed a participant registration and attendance platform spanning registration, QR check-in, programme information, and partner discovery.',
    overview: 'A participant registration and attendance platform for a partner convening.',
    problem: 'Participants need to register, find programme information, check in and discover partners. Organisers need attendance handled reliably.',
    role: 'Product designer.',
    approach: 'We organized the experience around the participant journey: register, find programme details, check in by QR code, and discover partner organizations. The design also covers success and error states so participants and organizers have clear next steps.',
    link: null,
  },
];

export const startups = [
  {
    key: 'rideo',
    tag: 'Product Design Engineer',
    title: 'Rideo',
    market: 'Two-sided marketplace · Urban mobility',
    stage: 'Live pilot · One route',
    image: rideoImage,
    role: 'Product Design Engineer · Product Strategy',
    desc: 'A route-based mobility startup connecting passengers with trusted drivers along established routes. I lead strategy, product design, and pilot operations across the rider and driver apps, operations dashboard, and website.',
    problem: 'Everyday commuters face unpredictable transport availability, long waiting times and limited visibility of rides along established routes.',
    focus: 'Passenger activation, driver onboarding, and validating the route-based model.',
    evidence: 'One-route pilot; research with 2 drivers and 3 passengers.',
    building: 'Rideo’s route-based mobility platform',
    link: { label: 'Visit Rideo', href: 'https://rideoapp.com' },
  },
  {
    key: 'pinghie',
    tag: 'Product Designer',
    title: 'PingHie',
    market: 'B2B SaaS · Team workflows',
    stage: 'Mobile MVP',
    image: pinghieImage,
    role: 'Product Designer',
    desc: 'A mobile-first platform for companies and NGOs that brings team conversations, approvals, and document version history together.',
    problem: 'Work gets fragmented across chats, emails, and different tools. Requests get buried, approval statuses become unclear, document versions get confusing, and accountability is easily lost.',
    focus: 'Keep each request’s status and latest file clear from team discussion through approval.',
    evidence: 'Mobile MVP developed; desktop experience planned.',
    building: 'PingHie',
    link: { label: 'Visit PingHie', href: 'https://pinghie-site.vercel.app' },
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

export const copyrightYear = Math.max(2027, new Date().getFullYear()).toString();

export const footer = {
  year: copyrightYear,
  links: [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ],
};
