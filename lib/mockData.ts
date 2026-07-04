// ---------------------------------------------------------------------------
// SITE CONTENT
// ---------------------------------------------------------------------------
// This is your content file. Edit the arrays below to change what shows up
// on the site — cohort dates, courses, trainers, team, and pricing.
// No database needed; this is a plain info site.
// ---------------------------------------------------------------------------

export type CohortStatus = 'open' | 'closing-soon' | 'closed' | 'upcoming';

export interface Cohort {
  id: string;
  name: string;
  month: 'January' | 'April' | 'August';
  startDate: string; // ISO date
  endDate: string; // ISO date
  status: CohortStatus;
  seatsTotal: number;
  seatsTaken: number;
}

export const cohorts: Cohort[] = [
  {
    id: 'january-cohort',
    name: 'January Cohort',
    month: 'January',
    startDate: '2027-01',
    endDate: '2027-01',
    status: 'closed',
    seatsTotal: 200,
    seatsTaken: 0,
  },
  {
    id: 'april-cohort',
    name: 'April Cohort',
    month: 'April',
    startDate: '2027-04',
    endDate: '2027-04',
    status: 'closed',
    seatsTotal: 200,
    seatsTaken: 0,
  },
  {
    id: 'august-cohort',
    name: 'August Cohort',
    month: 'August',
    startDate: '2026-08-24',
    endDate: '2026-08-30',
    status: 'upcoming',
    seatsTotal: 200,
    seatsTaken: 17,
  },
];

export interface Course {
  slug: string;
  title: string;
  icon: string; // lucide-react icon name
  overview: string;
  careerOpportunities: string[];
  tools: string[];
  outcomes: string[];
  assignments: string[];
}

export const courses: Course[] = [
  {
    slug: 'virtual-assistant-social-media',
    title: 'Virtual Assistant & Social Media Management',
    icon: 'LayoutGrid',
    overview: 'Learn to manage inboxes, calendars, and social media accounts for clients and businesses remotely.',
    careerOpportunities: ['Virtual Assistant', 'Social Media Manager', 'Community Manager'],
    tools: ['Notion', 'Trello', 'Canva', 'Meta Business Suite', 'Buffer'],
    outcomes: ['Manage a client inbox & calendar', 'Plan and schedule a content calendar', 'Handle basic client communication'],
    assignments: ['Build a sample content calendar', 'Draft a VA service proposal'],
  },
  {
    slug: 'customer-service',
    title: 'Customer Service',
    icon: 'Headset',
    overview: 'Master remote customer support — tone, tools, and conflict resolution for global clients.',
    careerOpportunities: ['Remote Customer Support Rep', 'Live Chat Agent', 'Support Team Lead'],
    tools: ['Zendesk', 'Intercom', 'Google Workspace'],
    outcomes: ['De-escalate a difficult customer conversation', 'Write clear, empathetic support replies'],
    assignments: ['Role-play three support tickets', 'Write a canned-response library'],
  },
  {
    slug: 'telemarketing-cold-calling',
    title: 'Telemarketing & Cold Calling',
    icon: 'Phone',
    overview: 'Build the confidence and scripts to sell and qualify leads over the phone.',
    careerOpportunities: ['Telemarketer', 'Appointment Setter', 'Sales Development Rep'],
    tools: ['CRM basics', 'Call scripts', 'Dialer software overview'],
    outcomes: ['Deliver a cold-call script naturally', 'Handle common sales objections'],
    assignments: ['Record a mock cold call', 'Build a 3-step follow-up sequence'],
  },
  {
    slug: 'ghostwriting',
    title: 'Ghostwriting',
    icon: 'PenTool',
    overview: 'Write in other people\u2019s voices for newsletters, LinkedIn, and books.',
    careerOpportunities: ['Ghostwriter', 'LinkedIn Content Writer', 'Newsletter Writer'],
    tools: ['Google Docs', 'Grammarly', 'Voice-matching frameworks'],
    outcomes: ['Match a client\u2019s tone of voice', 'Turn a voice note into a polished post'],
    assignments: ['Ghostwrite 3 LinkedIn posts from a sample brief'],
  },
  {
    slug: 'writing-for-online-platforms',
    title: 'Writing for Online Platforms',
    icon: 'FileText',
    overview: 'Blog posts, SEO articles, and platform-specific writing that gets read and ranked.',
    careerOpportunities: ['Content Writer', 'Blog Writer', 'SEO Writer'],
    tools: ['SEO basics', 'WordPress', 'Content briefs'],
    outcomes: ['Structure an SEO-friendly article', 'Write for a platform\u2019s specific audience'],
    assignments: ['Write one long-form article from a brief'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'PenSquare',
    overview: 'Design usable, attractive digital products from wireframe to prototype.',
    careerOpportunities: ['UI/UX Designer', 'Product Designer', 'Freelance Web Designer'],
    tools: ['Figma', 'Design systems basics'],
    outcomes: ['Wireframe a mobile app screen', 'Build a clickable Figma prototype'],
    assignments: ['Redesign an existing app screen', 'Present a mini case study'],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: 'Palette',
    overview: 'Create scroll-stopping visuals for brands and social media.',
    careerOpportunities: ['Graphic Designer', 'Brand Designer', 'Freelance Designer'],
    tools: ['Canva Pro', 'Adobe Photoshop basics'],
    outcomes: ['Design a cohesive brand mini-kit', 'Produce social media templates'],
    assignments: ['Design a 5-post Instagram carousel'],
  },
  {
    slug: 'video-editing',
    title: 'Video Editing',
    icon: 'Clapperboard',
    overview: 'Cut, pace, and polish short-form and long-form video for social and clients.',
    careerOpportunities: ['Video Editor', 'Reels/TikTok Editor', 'YouTube Editor'],
    tools: ['CapCut', 'Adobe Premiere Pro basics'],
    outcomes: ['Edit a short-form video with captions', 'Pace a story-driven cut'],
    assignments: ['Edit a 60-second reel from raw footage'],
  },
  {
    slug: 'landing-remote-jobs',
    title: 'Landing Remote Jobs',
    icon: 'Globe',
    overview: 'The job-hunting playbook for remote roles — CV, LinkedIn, interviews, and platforms.',
    careerOpportunities: ['Any remote-ready role'],
    tools: ['LinkedIn', 'CV templates', 'Job boards'],
    outcomes: ['Build a remote-ready CV', 'Ace a remote job interview'],
    assignments: ['Rewrite your CV for a remote role', 'Mock interview session'],
  },
  {
    slug: 'personal-branding',
    title: 'Personal Branding',
    icon: 'Sparkles',
    overview: 'Build an online presence that attracts opportunities before you apply for them.',
    careerOpportunities: ['Freelancer', 'Consultant', 'Content Creator'],
    tools: ['LinkedIn', 'Instagram', 'Bio & positioning frameworks'],
    outcomes: ['Write a positioning statement', 'Plan 30 days of personal-brand content'],
    assignments: ['Publish a personal-brand post', 'Audit and rewrite your bio'],
  },
];

export interface Trainer {
  name: string;
  photo: string;
  bio: string;
  specialization: string;
  skills: string[];
  linkedin: string;
  email: string;
}

export const trainers: Trainer[] = [
  {
    name: 'Nnadozie Nancy',
    photo: '/images/nancy.png',
    bio: 'Trainer focused on on demand remote roles - Virtual assitant, social media management, customer support, telemarketing, cold calling',
    specialization: 'Career Strategy & Remote Skills',
    skills: ['Virtual Assistant', 'Customer Support', 'Telemarketing'],
    linkedin: 'https://www.linkedin.com/in/nnadozie-nancy-4a0b3b1a6/',
    email: 'nnadozienancy@gmail.com',
  },
  {
    name: 'Abubakar Hannatu',
    photo: '/images/hannatu.jpeg',
    bio: 'Trainer focused on writing, design and technical skills — Ghostwriting, Online Platform Writing, UI/UX, graphic design, and video editing for beginners.',
    specialization: 'Writing, Design & Creative Skills',
    skills: ['UI/UX & Graphic Design', 'Writing', 'Video Editing'],
    linkedin: 'https://www.linkedin.com/in/hannatu-abubakar-5342922ba/',
    email: 'abuhannatu.va@gmail.com',
  },
];

export interface TeamMember {
  name: string;
  photo: string;
  role: string;
  bio?: string;
  contact?: string;
  socials?: { label: string; url: string }[];
}

export const team: TeamMember[] = [
  {
    name: 'Mshelia Nina Sikari',
    photo: '/images/nina.jpeg',
    role: 'Operations Manager',
    bio: 'Runs the day-to-day of the academy — cohort logistics, payments, and student support.',
    contact: 'mshelianina0@gmail.com',
  },
  {
    name: 'Chidozie Quincy Chiamaka',
    photo: '/images/amaka.jpeg',
    role: 'Social Media Manager',
    socials: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Facebook', url: 'https://www.facebook.com/share/1BgftgaJDF/' },
    ],
  },
  {
    name: 'David Bamidele',
    photo: '/images/dave.jpeg',
    role: 'Social Media Manager',
    socials: [
      { label: 'WhatsApp', url: 'https://wa.me/23489064469514' },
      { label: 'Tiktok', url: 'https://www.tiktok.com/@neymar_simp?_r=1&_t=ZS-97kyvjQldqa' },
    ],
  },
];

export const pricing = [
  { tier: 'Early Bird', price: '\u20a65,000', features: ['Full 7-day bootcamp access', 'Live sessions with trainers', 'Digital certificate'] },
  { tier: 'Regular', price: '\u20a610,000', features: ['Everything in Early Bird', 'Training manuals', 'Community access'] },
  {
    tier: 'VIP',
    price: '\u20a615,000',
    features: ['Everything in Regular', 'CV Review', 'LinkedIn Optimization', '1-on-1 Session', 'Personal Career Roadmap', 'Priority Support'],
    highlight: true,
  },
];

export const socialLinks = {
  whatsapp: 'https://chat.whatsapp.com/FlXEmixC5Uj86J0kdzYj14',
  instagram: 'https://www.instagram.com/coachlily_academy/?hl=en',
  facebook: 'https://facebook.com/coachlilyacademy',
  tiktok: 'https://tiktok.com/@coachlilyacademy',
  linkedin: 'https://linkedin.com/company/coachlilyacademy',
  youtube: 'https://youtube.com/@coachlilyacademy',
  x: 'https://x.com/coachlilyacademy',
  email: 'coachlilyacademy@gmail.com',
  phone: '+234 800 000 0000',
};


git add .
git commit
git push