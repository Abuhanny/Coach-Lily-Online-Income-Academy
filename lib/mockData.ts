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
    bio: 'Trainer focused on on demand remote roles - Virtual assistant, social media management, customer support, telemarketing, cold calling',
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
  youtube: 'https://www.youtube.com/channel/UCC7cIf1aee7zKyN6rGpH5Ig',
  x: 'https://x.com/coachlilyacademy',
  email: 'coachlilyacademy@gmail.com',
  phone: '+234 915 930 0225',
};

// ---------------------------------------------------------------------------
// BLOG
// ---------------------------------------------------------------------------
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // e.g. '2026-06-12'
  author: string;
  readTime: string;
  content: string[]; // array of paragraphs
}

export const blogPosts: BlogPost[] = [
  {
    slug: '5-online-skills-anyone-can-learn-in-7-days',
    title: '5 Online Skills Anyone Can Learn in 7 Days',
    excerpt: 'A look at the fastest career paths to a first online income, and why 7 focused days beats 7 months of scattered YouTube videos.',
    date: '2026-05-14',
    author: 'Coach Lily',
    readTime: '4 min read',
    content: [
      'Every cohort, we get the same question in the first hour: "Which skill should I actually learn?" The honest answer is that most online skills are learnable in a week if you focus on one thing instead of ten tabs open at once.',
      'Here are five that consistently get our students their first paying gig fastest: virtual assistance, content writing, graphic design with Canva, social media management, and customer service. None of them require a laptop worth more than your rent, and all five have real, ongoing demand from small businesses who don\u2019t have time to do it themselves.',
      'What makes the difference isn\u2019t talent — it\u2019s structure. Most people trying to self-teach online spend their first month just deciding what to learn. A live, 7-day cohort removes that decision paralysis: you show up, you\u2019re told exactly what to practice each day, and by day 7 you have a real deliverable to show a client, not just a certificate.',
      'If you\u2019re still deciding which of the five fits you, that\u2019s exactly what our career quiz on the homepage is for — two minutes, and you\u2019ll get a track recommendation based on how you actually answer, not just what sounds impressive.',
    ],
  },
  {
    slug: 'how-our-last-cohort-landed-their-first-clients',
    title: 'How Our Last Cohort Landed Their First Clients',
    excerpt: 'Real patterns from the January cohort — what the students who got hired fastest actually did differently.',
    date: '2026-02-02',
    author: 'David Chukwu',
    readTime: '5 min read',
    content: [
      'After every cohort, we check in with students 30 days later to see who\u2019s landed paid work and who\u2019s still looking. The January cohort gave us a clear pattern worth sharing.',
      'The students who landed clients fastest didn\u2019t wait until they felt "ready." They started reaching out on Day 5 of the bootcamp, while the material was still fresh, using the exact outreach scripts from the manual — barely edited. Waiting to "polish" the pitch cost people weeks, not results.',
      'Second pattern: they picked one platform and went deep instead of spreading across five. Whether it was Upwork, LinkedIn, or Instagram DMs, focus beat spread every single time.',
      'Third, and maybe most important: they treated the cohort\u2019s WhatsApp community as a resource, not just a chat group — asking for feedback on their first pitch before sending it, which caught obvious mistakes early.',
      'None of this required special talent. It required starting before feeling ready, which is really what the whole bootcamp is designed to force.',
    ],
  },
  {
    slug: 'cv-mistakes-that-cost-you-remote-jobs',
    title: 'CV Mistakes That Cost You Remote Jobs',
    excerpt: 'What we tell every VIP student during CV review — the small things that get remote applications rejected in seconds.',
    date: '2026-03-20',
    author: 'Coach Lily',
    readTime: '3 min read',
    content: [
      'Remote hiring managers skim. Most spend under 10 seconds on a first pass of your CV, which means small formatting and framing issues cost you before anyone reads your actual experience.',
      'The most common mistake: leading with duties instead of results. "Managed social media accounts" tells a hiring manager nothing. "Grew an Instagram account from 200 to 4,000 followers in 3 months" tells them everything.',
      'Second: no mention of remote-specific skills. Async communication, tools like Notion or Slack, and self-management aren\u2019t assumed — they need to be visible on the page, because remote employers are specifically screening for them.',
      'Third: a generic CV sent to every application. It takes ten minutes to reorder your bullet points to match a specific job description, and it\u2019s usually the difference between a reply and silence.',
      'We walk through a full CV rebuild during the VIP 1-on-1 session, but even fixing just these three things before your next application will change your response rate.',
    ],
  },
];

// ---------------------------------------------------------------------------
// CAREER QUIZ
// ---------------------------------------------------------------------------
// Each option maps to one or more course slugs (from `courses` above) with a
// weight. The quiz sums weights per track across all answers and recommends
// the highest-scoring course at the end.
export interface QuizOption {
  label: string;
  weights: Record<string, number>; // courseSlug -> points
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'Which of these sounds most like a good afternoon to you?',
    options: [
      { label: 'Organizing someone\u2019s messy schedule until it makes sense', weights: { 'virtual-assistant-social-media': 2 } },
      { label: 'Writing captions and picking the perfect photo for a post', weights: { 'personal-branding': 1, 'virtual-assistant-social-media': 1 } },
      { label: 'Designing a poster or flyer that actually looks good', weights: { 'graphic-design': 2 } },
      { label: 'Cutting a video down until every second earns its place', weights: { 'video-editing': 2 } },
    ],
  },
  {
    question: 'A friend says "I don\u2019t know what to charge for my work." You\u2019d rather help them by:',
    options: [
      { label: 'Writing a script for how to pitch their price on a call', weights: { 'telemarketing-cold-calling': 2 } },
      { label: 'Helping them write a clear, convincing offer message', weights: { 'writing-for-online-platforms': 2 } },
      { label: 'Helping them build a portfolio that justifies the price', weights: { 'personal-branding': 2, 'ui-ux-design': 1 } },
      { label: 'Just telling them calmly and firmly what they\u2019re worth', weights: { 'customer-service': 1, 'telemarketing-cold-calling': 1 } },
    ],
  },
  {
    question: 'Which complaint from a customer would you handle best?',
    options: [
      { label: '"My order is late and I\u2019m frustrated" — over live chat', weights: { 'customer-service': 2 } },
      { label: '"I\u2019m not sure this app is worth paying for" — over the phone', weights: { 'telemarketing-cold-calling': 2 } },
      { label: '"This app is confusing to use" — you\u2019d redesign the flow', weights: { 'ui-ux-design': 2 } },
      { label: '"Your emails don\u2019t explain the product well" — you\u2019d rewrite them', weights: { 'writing-for-online-platforms': 2, ghostwriting: 1 } },
    ],
  },
  {
    question: 'Pick the tool you\u2019d most enjoy getting really good at:',
    options: [
      { label: 'Canva or Photoshop', weights: { 'graphic-design': 2 } },
      { label: 'Figma', weights: { 'ui-ux-design': 2 } },
      { label: 'CapCut or Premiere Pro', weights: { 'video-editing': 2 } },
      { label: 'Notion and a calendar app', weights: { 'virtual-assistant-social-media': 2 } },
    ],
  },
  {
    question: 'Which sentence sounds most like something you\u2019d actually say?',
    options: [
      { label: '"Let me just rewrite that so it actually makes sense."', weights: { ghostwriting: 2, 'writing-for-online-platforms': 1 } },
      { label: '"I could make this look ten times better in five minutes."', weights: { 'graphic-design': 1, 'ui-ux-design': 1 } },
      { label: '"Just give me the calendar, I\u2019ll sort the whole week out."', weights: { 'virtual-assistant-social-media': 2 } },
      { label: '"Trust me, I can get them on the phone and get a yes."', weights: { 'telemarketing-cold-calling': 2 } },
    ],
  },
];

