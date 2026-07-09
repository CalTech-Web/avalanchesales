export const company = {
  name: "Avalanche Marketing Agency",
  shortName: "Avalanche Sales",
  domain: "avalanchesales.com",
  phone: "877.499.9111",
  phoneHref: "tel:8774999111",
  email: "info@AvalancheSales.com",
  tagline: "Exclusive Opportunities. Real Buyers. Predictable Growth.",
  secondaryTagline: "Human Verified. AI Empowered. Results Driven.",
};

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions/",
    children: [
      { label: "Exclusive Customer Acquisition", href: "/solutions/#exclusive-customer-acquisition" },
      { label: "Purchase Intent Intelligence", href: "/solutions/#purchase-intent-intelligence" },
      { label: "Real-Time Opportunity Delivery", href: "/solutions/#real-time-opportunity-delivery" },
      { label: "CRM & Sales Automation", href: "/solutions/#crm-sales-automation" },
      { label: "Revenue Intelligence & Analytics", href: "/solutions/#revenue-intelligence-analytics" },
      { label: "AI Marketing Solutions", href: "/solutions/#ai-marketing-solutions" },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Home Improvement Contractors", href: "/industries/#home-improvement-contractors" },
      { label: "Home Service Companies", href: "/industries/#home-service-companies" },
      { label: "Insurance & Financial Services", href: "/industries/#insurance-financial-services" },
      { label: "Professional Services", href: "/industries/#professional-services" },
      { label: "Healthcare & Wellness", href: "/industries/#healthcare-wellness" },
      { label: "Automotive Services", href: "/industries/#automotive-services" },
      { label: "Business & Commercial Services", href: "/industries/#business-commercial-services" },
      { label: "View All Industries", href: "/industries/" },
    ],
  },
  { label: "How It Works", href: "/how-it-works/" },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Customer Acquisition Guide", href: "/resources/customer-acquisition-guide/" },
      { label: "Industry Insights", href: "/resources/industry-insights/" },
      { label: "Case Studies", href: "/resources/case-studies/" },
      { label: "Sales & Marketing Tips", href: "/resources/sales-marketing-tips/" },
    ],
  },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const footerColumns: { heading: string; links: NavChild[] }[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Exclusive Customer Acquisition", href: "/solutions/#exclusive-customer-acquisition" },
      { label: "Purchase Intent Intelligence", href: "/solutions/#purchase-intent-intelligence" },
      { label: "Real-Time Opportunity Delivery", href: "/solutions/#real-time-opportunity-delivery" },
      { label: "CRM & Sales Automation", href: "/solutions/#crm-sales-automation" },
      { label: "Revenue Intelligence & Analytics", href: "/solutions/#revenue-intelligence-analytics" },
      { label: "AI Marketing Solutions", href: "/solutions/#ai-marketing-solutions" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Home Services", href: "/industries/#home-service-companies" },
      { label: "Contractors", href: "/industries/#home-improvement-contractors" },
      { label: "Financial Services", href: "/industries/#insurance-financial-services" },
      { label: "Insurance", href: "/industries/#insurance-financial-services" },
      { label: "Healthcare", href: "/industries/#healthcare-wellness" },
      { label: "Legal", href: "/industries/#professional-services" },
      { label: "Automotive", href: "/industries/#automotive-services" },
      { label: "Business Services", href: "/industries/#business-commercial-services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "How It Works", href: "/how-it-works/" },
      { label: "Resources", href: "/resources/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Service", href: "/terms-and-conditions/" },
    ],
  },
];

export const leadOptions = [
  {
    title: "Exclusive Qualified Leads",
    description:
      "High intent inbound leads delivered in real time. 100% exclusive, never shared, never resold, and AI validated before they reach you.",
    bullets: [
      "100% exclusive, never shared, never resold",
      "AI validated prospects",
      "Delivered within minutes",
      "Scalable lead volume",
    ],
    bestFor: "Companies that want consistent deal flow",
    cta: "Start Getting Leads!",
    image: "/images/products/data-leads-image.jpg",
  },
  {
    title: "Ready to Buy Leads",
    description:
      "Immediate connection with customers who are ready to act, through real time transfers or rapid connection and pre-qualification for urgency.",
    bullets: [
      "Real-time transfers or rapid connection",
      "Pre-qualified for urgency",
      "Highest closing rates",
    ],
    bestFor: "Teams that want immediate revenue opportunities",
    cta: "Get Live Transfer Leads!",
    image: "/images/products/sales-graph.png",
  },
  {
    title: "Private Lead Generation System",
    description:
      "A custom built lead funnel under the client's own brand and pipeline, with no competition and AI powered qualification and tracking built in.",
    bullets: [
      "Exclusive pipeline, no competition",
      "AI powered qualification and tracking",
      "Built for long-term scalability",
    ],
    bestFor: "Companies scaling nationally or regionally",
    cta: "Build My Private System!",
    image: "/images/products/avalanche-service-image.png",
  },
];

export const processStages = [
  {
    stage: "Stage 1",
    title: "Attract",
    description:
      "AI driven strategies, targeted advertising, lead funnels, and content marketing draw in the right audience for your industry.",
    image: "/images/products/attract-image.png",
  },
  {
    stage: "Stage 2",
    title: "Engage",
    description:
      "AI tailored email and SMS sequences, interactive social media, and landing pages nurture prospects through every stage.",
    image: "/images/products/engage-image.png",
  },
  {
    stage: "Stage 3",
    title: "Convert",
    description:
      "Advanced qualification workflows and AI driven analysis optimize funnels to turn prospects into sales.",
    image: "/images/products/convert-image.png",
  },
];

export const platforms = [
  { name: "Google Ads", category: "Search / Display", reach: "Reaches 92% of internet users worldwide", icon: "/images/products/google-ads-icon.png" },
  { name: "LinkedIn Ads", category: "B2B / Professional Network", reach: "Reaches 920 million professionals, including 70 million executive level decision makers", icon: "/images/products/linkedin-ads-icon.png" },
  { name: "Facebook Ads", category: "Social", reach: "Reaches 2.9 billion monthly active users", icon: "/images/products/facebook-ads-icon.png" },
  { name: "Instagram Ads", category: "Social", reach: "Reaches 1.5 billion active users", icon: "/images/products/instagram-ads-icon.jpg" },
  { name: "Microsoft Advertising", category: "Search", reach: "Reaches 1.2 billion global unique users", icon: "/images/products/bing-ads-icon.jpg" },
  { name: "YouTube", category: "Video", reach: "Reaches 2.7 billion monthly active users with 1 billion hours watched daily", icon: "/images/products/youtube-icon.png" },
];

export const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "$1M+", label: "Proj 2026 Client Sales" },
  { value: "5,000+", label: "Monthly Leads Generated" },
  { value: "3 to 7 Days", label: "Campaign Launch Cycle" },
];

export const differentiators = [
  { text: "No monthly contracts, pay-per-lead model", icon: "dollar" },
  { text: "3 to 7 day launch cycle to get campaigns live", icon: "bolt" },
  { text: "Leads are 100% exclusive, never shared or resold to competitors", icon: "badge" },
  { text: "AI validated prospects delivered in real time, often within minutes", icon: "target" },
  { text: "Scalable, performance based pricing tied to client revenue", icon: "trending" },
  { text: "Single focused objective: lead generation and conversion", icon: "funnel" },
  { text: "25+ years of combined sales, marketing, and direct response experience dating to 1999", icon: "chart" },
  { text: "Multi-channel reach across Google, LinkedIn, Facebook, Instagram, Bing, and YouTube under one engagement", icon: "megaphone" },
];

export const coreServices = [
  {
    title: "Lead Generation & Prospecting",
    description: "AI driven targeting and multi-channel outreach to find your ideal prospects.",
    icon: "search",
  },
  {
    title: "Sales Engagement & Nurturing",
    description: "Multi-touch sequences across calls, emails, and social that advance prospects through every pipeline stage.",
    icon: "chat",
  },
  {
    title: "Sales Presentations & Consultations",
    description: "Discovery calls and product demos delivered on your behalf, by an experienced team.",
    icon: "presentation",
  },
  {
    title: "Closing & Conversion Management",
    description: "Proposal follow-up, negotiation, and deal closure handled with a focus on results.",
    icon: "handshake",
  },
  {
    title: "CRM Management, Analytics & Reporting",
    description: "CRM setup and automation paired with performance dashboards so you always know what is working.",
    icon: "chart",
  },
  {
    title: "Marketing Integration & Campaign Support",
    description: "Integrated campaigns that continuously feed new prospects into your funnel.",
    icon: "megaphone",
  },
];

export const customerAcquisitionPillars = [
  {
    title: "Sales Funnels",
    description: "AI optimized, high converting funnels deployed across multiple channels.",
    icon: "funnel",
  },
  {
    title: "Targeted Landing Pages",
    description: "Industry specific landing pages with AI driven validation and real-time lead routing.",
    icon: "target",
  },
  {
    title: "Sales Consulting",
    description: "In-house sales team training, AI system implementation, and CRM and software integration.",
    icon: "chat",
  },
  {
    title: "AI Automation",
    description: "Intelligent lead routing, real-time engagement, automated follow-ups, and pipeline optimization.",
    icon: "bolt",
  },
];

export const caseStudies = [
  {
    industry: "Healthcare",
    company: "Dr. Benson's Family Clinic",
    challenge: "Low patient acquisition and ineffective digital marketing in a competitive market",
    results: ["35% revenue growth", "55 new patient leads monthly", "74% consultation booking rate", "38% annual increase in appointments"],
    timeline: "6 months",
    image: "/images/gallery/case-study-healthcare.png",
  },
  {
    industry: "Finance",
    company: "Prime Wealth Advisors",
    challenge: "Struggled with lead generation and converting inquiries into high value clients",
    results: ["42% yearly revenue increase", "48 qualified leads monthly", "72% conversion to long-term clients", "52% AUM growth"],
    timeline: "12 months",
    image: "/images/gallery/case-study-finance.png",
  },
  {
    industry: "Business Coaching",
    company: "GrowthPath Consulting",
    challenge: "Inconsistent client acquisition and outdated marketing processes",
    results: ["50% revenue growth in 6 months", "30 new leads monthly", "75% webinar to client conversion", "Doubled active client base annually"],
    timeline: "12 months",
    image: "/images/gallery/case-study-coaching.png",
  },
  {
    industry: "Real Estate",
    company: "Oakview Realty",
    challenge: "Declining leads and limited online visibility",
    results: ["65% revenue increase", "70 property inquiries monthly", "73% lead to showing conversion", "55% increase in closed deals annually"],
    timeline: "8 months",
    image: "/images/gallery/case-study-real-estate.png",
  },
  {
    industry: "B2B SaaS",
    company: "TechSuite Solutions",
    challenge: "Ineffective lead generation and poor trial to paid conversion",
    results: ["92% ARR increase", "60 qualified trial sign ups monthly", "72% trial to paid conversion", "85% customer base expansion with 12% churn reduction"],
    timeline: "12 months",
    image: "/images/gallery/case-study-saas.jpg",
  },
  {
    industry: "Home Services / HVAC",
    company: "CoolComfort HVAC",
    challenge: "Stagnating growth and over reliance on word of mouth referrals",
    results: ["60% revenue increase", "65 new service inquiries monthly", "72% lead to appointment conversion", "48% increase in installations and repairs annually"],
    timeline: "10 months",
    image: "/images/gallery/case-study-hvac.png",
  },
];

export const outsourcingValue = [
  { title: "Lower Cost", description: "Avoid the overhead of hiring, training, and managing an in-house sales and marketing team.", icon: "dollar" },
  { title: "Professional Expertise", description: "25+ years of combined sales, marketing, and direct response experience working for you.", icon: "badge" },
  { title: "Focused Objectives", description: "One focus, to attract, engage, and convert leads into sales that drive revenue.", icon: "target" },
  { title: "Increased ROI", description: "Pay-per-lead and performance based pricing options keep spend tied to results.", icon: "trending" },
  { title: "Increased Leads & Sales", description: "AI validated, exclusive leads delivered in real time to grow your pipeline.", icon: "funnel" },
];

export const caseStudyDisclosure =
  "Representative results based on typical client outcomes.";

// Homepage: "NO" benefit tiles for the hero call-out banner
export const noFeeBenefits = [
  "NO Setup Fees",
  "NO Monthly Contracts",
  "NO Advertising Costs",
  "NO Marketing Retainers",
  "NO Ad Management Fees",
];

// Homepage: The Avalanche Growth Method
export const growthMethod = [
  {
    step: "1",
    title: "Attract",
    description:
      "We use AI-powered audience intelligence, predictive analytics, behavioral data, and digital marketing to identify high-intent buyers actively searching for your products and services in real time.",
    icon: "search",
  },
  {
    step: "2",
    title: "Engage",
    description:
      "We capture attention through personalized messaging, exclusive customer acquisition campaigns, automated outreach, and strategic follow-up that create meaningful conversations with qualified buyers.",
    icon: "chat",
  },
  {
    step: "3",
    title: "Convert",
    description:
      "Every sales opportunity is supported by proven sales processes, CRM automation, and conversion strategies designed to maximize appointments, estimates, and closed business.",
    icon: "handshake",
  },
  {
    step: "4",
    title: "Optimize",
    description:
      "Every campaign is continuously monitored and refined using real-time performance data, AI insights, and conversion analytics to improve efficiency and reduce acquisition costs.",
    icon: "chart",
  },
  {
    step: "5",
    title: "Scale",
    description:
      "Once a profitable customer acquisition model is established, we expand campaigns strategically to generate predictable, sustainable revenue growth without sacrificing quality.",
    icon: "trending",
  },
];

// Homepage: Why Our Data Performs Better
export const dataAdvantages = [
  "AI Audience Intelligence",
  "Purchase Intent Signals",
  "Human Verification",
  "Exclusive Delivery",
  "Real-Time Distribution",
];

// Homepage + shared: Industries We Serve icon grid
export const industriesGrid: { label: string; href: string; icon: string }[] = [
  { label: "Roofing", href: "/industries/#home-improvement-contractors", icon: "home" },
  { label: "HVAC", href: "/industries/#home-service-companies", icon: "bolt" },
  { label: "Solar", href: "/industries/#home-improvement-contractors", icon: "sun" },
  { label: "Insurance", href: "/industries/#insurance-financial-services", icon: "shield" },
  { label: "Financial", href: "/industries/#insurance-financial-services", icon: "dollar" },
  { label: "Legal", href: "/industries/#professional-services", icon: "scale" },
  { label: "Medical", href: "/industries/#healthcare-wellness", icon: "heart" },
  { label: "Home Services", href: "/industries/#home-service-companies", icon: "wrench" },
  { label: "Automotive", href: "/industries/#automotive-services", icon: "car" },
  { label: "Contractors", href: "/industries/#home-improvement-contractors", icon: "hardhat" },
  { label: "Business Services", href: "/industries/#business-commercial-services", icon: "briefcase" },
];

// Homepage: solution summary cards (link to /solutions anchors)
export const solutionCards: {
  title: string;
  summary: string;
  href: string;
  icon: string;
}[] = [
  {
    title: "Exclusive Customer Acquisition",
    summary:
      "Acquire qualified customers who are actively searching for your products and services through AI-powered audience intelligence and predictive buying signals. Every sales opportunity is exclusive to your business, never shared, never recycled, and never resold, giving your sales team the competitive advantage of being first to engage with high-intent buyers.",
    href: "/solutions/#exclusive-customer-acquisition",
    icon: "target",
  },
  {
    title: "Purchase Intent Intelligence",
    summary:
      "Know who is ready to buy before your competitors do. Our AI analyzes billions of online behavioral signals, search activity, demographic data, and digital engagement to identify consumers and businesses demonstrating genuine purchase intent, so you focus on prospects most likely to become customers.",
    href: "/solutions/#purchase-intent-intelligence",
    icon: "search",
  },
  {
    title: "Real-Time Opportunity Delivery",
    summary:
      "Timing is everything in sales. Our platform delivers exclusive customer acquisition opportunities directly to your business in real time through your CRM, email, or preferred workflow, so your team responds while buyer interest is at its peak.",
    href: "/solutions/#real-time-opportunity-delivery",
    icon: "bolt",
  },
  {
    title: "CRM & Sales Automation",
    summary:
      "Streamline your sales process through seamless CRM integration and intelligent automation. We connect with many of today's leading CRM platforms, automatically routing new opportunities to the right sales representatives while reducing manual tasks and improving response times.",
    href: "/solutions/#crm-sales-automation",
    icon: "chat",
  },
  {
    title: "Revenue Intelligence & Analytics",
    summary:
      "Make better business decisions with data-driven insights. Our reporting and analytics provide a comprehensive view of campaign performance, customer acquisition costs, conversion trends, sales activity, and return on investment, so you can continually optimize for greater profitability.",
    href: "/solutions/#revenue-intelligence-analytics",
    icon: "chart",
  },
  {
    title: "AI Marketing Solutions",
    summary:
      "Harness the power of artificial intelligence to attract, engage, and convert more qualified customers. Our AI-powered marketing solutions combine predictive analytics, audience modeling, campaign optimization, and behavioral intelligence to reach the right prospects at the right time with the right message.",
    href: "/solutions/#ai-marketing-solutions",
    icon: "megaphone",
  },
];

// Homepage: Why Avalanche Sales value items
export const whyAvalanche = [
  { title: "Exclusive Opportunities", description: "Every lead belongs only to you.", icon: "badge" },
  { title: "AI Audience Intelligence", description: "Find customers actively shopping today.", icon: "search" },
  { title: "Human Verified", description: "Accuracy you can trust.", icon: "check" },
  { title: "Real-Time Delivery", description: "Respond while buying intent is highest.", icon: "bolt" },
  { title: "No Long-Term Contracts", description: "Scale as your business grows.", icon: "trending" },
];

export const multiIndustryList = [
  "Residential Services",
  "Home Improvement",
  "Roofing",
  "HVAC",
  "Plumbing",
  "Insurance",
  "Financial Services",
  "Legal",
  "Healthcare",
  "Solar",
  "Automotive",
  "Commercial Services",
  "B2B",
];

// Homepage: stats band
export const homeStats = [
  { value: "95%", label: "Human Verified" },
  { value: "100%", label: "Exclusive Opportunities" },
  { value: "24/7", label: "AI Monitoring" },
  { value: "Real Time", label: "Delivery" },
  { value: "No Contracts", label: "Scale Anytime" },
];

// Solutions page: detailed sections
export const solutionSections: {
  id: string;
  title: string;
  headline: string;
  body: string[];
  benefits: string[];
}[] = [
  {
    id: "exclusive-customer-acquisition",
    title: "Exclusive Customer Acquisition",
    headline: "Connect With Customers Looking for Your Services",
    body: [
      "Your business doesn't need more random inquiries. You need qualified opportunities from people who have a genuine interest in what you offer.",
      "Avalanche Sales helps businesses acquire exclusive customer opportunities from consumers and companies actively searching for products and services.",
      "Unlike traditional lead providers that sell the same information to multiple businesses, our opportunities are exclusive to your company.",
      "This means less competition, faster response times, and more opportunities to close new business.",
    ],
    benefits: [
      "Exclusive opportunities delivered to your business",
      "No shared or recycled prospects",
      "Connect with customers actively seeking solutions",
      "Increase sales conversations and appointments",
      "Reduce wasted time chasing unqualified prospects",
    ],
  },
  {
    id: "purchase-intent-intelligence",
    title: "Purchase Intent Intelligence",
    headline: "Find Buyers Before They Find Your Competitors",
    body: [
      "The best customers are the ones already looking for what you sell.",
      "Our Purchase Intent Intelligence identifies consumers and businesses demonstrating real buying signals based on online activity, search behavior, and market demand.",
      "Instead of marketing blindly to large audiences and hoping someone responds, we help you focus on people who have already shown interest.",
      "Better targeting creates better opportunities.",
    ],
    benefits: [
      "Identify customers actively researching purchases",
      "Understand buying behavior and market demand",
      "Improve marketing efficiency",
      "Reduce wasted advertising spend",
      "Focus sales efforts on higher-quality opportunities",
    ],
  },
  {
    id: "real-time-opportunity-delivery",
    title: "Real-Time Opportunity Delivery",
    headline: "Reach Customers While Their Interest Is Highest",
    body: [
      "Timing can determine whether a sale is won or lost.",
      "When someone requests information, searches for a service, or demonstrates purchase intent, speed matters.",
      "Avalanche Sales delivers qualified opportunities directly to your business so your team can respond quickly while customer interest is at its highest.",
      "Opportunities can be delivered through email, CRM systems, or your preferred sales workflow.",
    ],
    benefits: [
      "Faster response times",
      "Immediate access to new opportunities",
      "Seamless delivery into your sales process",
      "Better customer engagement",
      "Increased conversion potential",
    ],
  },
  {
    id: "crm-sales-automation",
    title: "CRM & Sales Automation",
    headline: "Turn Opportunities Into Customers",
    body: [
      "Generating opportunities is only the first step. Having a process to manage and convert those opportunities is what creates growth.",
      "Avalanche Sales helps businesses organize their customer acquisition process through CRM integration, automated follow-up, and streamlined sales workflows.",
      "Whether you already have a CRM or need guidance implementing one, we help create a system that ensures opportunities are properly managed.",
    ],
    benefits: [
      "Organized sales pipelines",
      "Automated follow-up processes",
      "Improved customer response times",
      "Better visibility into sales activity",
      "More opportunities converted into revenue",
    ],
  },
  {
    id: "revenue-intelligence-analytics",
    title: "Revenue Intelligence & Analytics",
    headline: "Understand What Is Driving Your Growth",
    body: [
      "Successful businesses measure what works.",
      "Revenue Intelligence gives you insight into customer acquisition performance, opportunity quality, conversion rates, and sales results.",
      "By understanding where your best customers come from, you can make smarter decisions about where to invest your time and resources.",
    ],
    benefits: [
      "Track customer acquisition performance",
      "Identify your most profitable opportunities",
      "Improve sales conversion rates",
      "Make data-driven decisions",
      "Create a predictable growth strategy",
    ],
  },
  {
    id: "ai-marketing-solutions",
    title: "AI Marketing Solutions",
    headline: "Smarter Customer Acquisition Through Better Data",
    body: [
      "Modern marketing changes every day. Keeping up with advertising platforms, customer behavior, and digital trends can be overwhelming for business owners.",
      "Avalanche Sales uses AI-powered tools and advanced data intelligence to help identify the right customers, improve targeting, and create more efficient acquisition campaigns.",
      "Our goal is simple: use technology behind the scenes so you can focus on running your business.",
    ],
    benefits: [
      "Smarter audience targeting",
      "Improved campaign efficiency",
      "Better understanding of customer behavior",
      "Reduced marketing waste",
      "Scalable customer acquisition strategies",
    ],
  },
];

// Industries page: industry group sections
export const industryGroups: {
  id: string;
  title: string;
  body: string[];
  listIntro: string;
  items: string[];
  closer: string;
}[] = [
  {
    id: "home-improvement-contractors",
    title: "Home Improvement Contractors",
    body: [
      "Growing a home improvement business requires a steady flow of qualified homeowners looking for trusted professionals.",
      "We help contractors generate exclusive customer opportunities for projects including:",
    ],
    listIntro: "",
    items: [
      "Roofing",
      "Windows & Doors",
      "Siding",
      "Solar",
      "Painting",
      "Flooring",
      "Concrete & Masonry",
      "Remodeling",
      "Kitchen & Bath Renovations",
      "Fencing",
      "Decks & Outdoor Living",
    ],
    closer:
      "Whether your business focuses on repairs, replacements, or complete renovations, we'll help keep your sales pipeline full.",
  },
  {
    id: "home-service-companies",
    title: "Home Service Companies",
    body: [
      "Service businesses rely on consistent customer demand throughout the year.",
      "Avalanche Sales helps home service professionals connect with homeowners actively searching for dependable service providers.",
    ],
    listIntro: "Industries include:",
    items: [
      "HVAC",
      "Plumbing",
      "Electrical",
      "Garage Door Services",
      "Pest Control",
      "Landscaping",
      "Lawn Care",
      "Tree Services",
      "Pool & Spa Services",
      "Cleaning Services",
      "Restoration & Water Damage",
      "Appliance Repair",
    ],
    closer:
      "When customers need service, they're already searching. We help connect them with your business.",
  },
  {
    id: "insurance-financial-services",
    title: "Insurance & Financial Services",
    body: [
      "Consumers often spend weeks researching financial products before making a decision.",
      "Our customer acquisition solutions help connect financial professionals with consumers actively exploring their options.",
    ],
    listIntro: "We support businesses including:",
    items: [
      "Auto Insurance",
      "Homeowners Insurance",
      "Life Insurance",
      "Medicare & Health Insurance",
      "Commercial Insurance",
      "Financial Advisors",
      "Mortgage Professionals",
      "Business Financing",
      "Debt Resolution",
      "Tax Services",
    ],
    closer:
      "Helping financial professionals build relationships with qualified prospects starts with delivering better opportunities.",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    body: [
      "Professional service firms thrive by building trust and maintaining a consistent pipeline of new clients.",
      "We help firms generate opportunities while allowing them to focus on delivering exceptional service.",
    ],
    listIntro: "Industries include:",
    items: [
      "Law Firms",
      "Accounting Firms",
      "CPA Practices",
      "Business Consultants",
      "Marketing Agencies",
      "Real Estate Professionals",
      "Property Management",
      "Engineering Firms",
      "Architecture Firms",
    ],
    closer:
      "Our goal is simple: help professionals spend less time searching for clients and more time serving them.",
  },
  {
    id: "healthcare-wellness",
    title: "Healthcare & Wellness",
    body: [
      "Healthcare providers require a consistent flow of new patients while maintaining compliance and professionalism.",
      "We help healthcare organizations connect with individuals actively seeking care and professional services.",
    ],
    listIntro: "Industries include:",
    items: [
      "Dental Practices",
      "Chiropractic Clinics",
      "Medical Practices",
      "Physical Therapy",
      "Mental Health Services",
      "Vision Care",
      "Cosmetic Services",
      "Wellness Clinics",
    ],
    closer:
      "Building healthier communities begins by helping patients find the care they need.",
  },
  {
    id: "automotive-services",
    title: "Automotive Services",
    body: [
      "From repair shops to dealerships, automotive businesses rely on a consistent stream of new customers.",
      "We help automotive professionals connect with vehicle owners searching for trusted local service providers.",
    ],
    listIntro: "Industries include:",
    items: [
      "Auto Repair",
      "Collision Repair",
      "Auto Glass",
      "Tire & Wheel Services",
      "Dealerships",
      "Towing Services",
      "Window Tinting",
      "Vehicle Wraps",
      "Detailing Services",
    ],
    closer:
      "Our customer acquisition solutions help keep your service bays busy and your business growing.",
  },
  {
    id: "business-commercial-services",
    title: "Business & Commercial Services",
    body: [
      "Businesses serving other businesses need qualified decision-makers, not cold prospecting lists.",
      "We help B2B organizations generate opportunities with companies actively researching products and services.",
    ],
    listIntro: "Industries include:",
    items: [
      "Commercial Contractors",
      "Managed IT Services",
      "Office Equipment",
      "Commercial Cleaning",
      "Security Services",
      "Payroll & HR",
      "Business Software",
      "Telecommunications",
      "Printing & Promotional Products",
    ],
    closer:
      "Whether you're selling locally or nationally, we help connect you with businesses looking for solutions.",
  },
];

export const industryChallenges = [
  "Finding qualified customers",
  "Generating consistent revenue",
  "Reducing marketing costs",
  "Growing without hiring a large marketing team",
  "Improving return on investment",
];

// How It Works page: five steps
export const howItWorksSteps: {
  step: string;
  title: string;
  body: string[];
}[] = [
  {
    step: "Step 1",
    title: "Tell Us About Your Business",
    body: [
      "Every successful customer acquisition campaign begins with understanding your business.",
      "During your complimentary consultation, we'll learn about your services, service areas, ideal customers, sales goals, and current marketing efforts. This allows us to develop a strategy specifically designed for your business instead of relying on generic marketing tactics.",
      "Whether you're looking for ten new customers each month or one hundred, we'll help determine the best approach for your goals and budget.",
    ],
  },
  {
    step: "Step 2",
    title: "We Find Customers Already Looking for You",
    body: [
      "Instead of interrupting people with advertising they may not want, our system identifies consumers and businesses already searching for the products and services you provide.",
      "Behind the scenes, we use advanced technology and data intelligence to locate people actively demonstrating buying intent online.",
      "Our team then validates each opportunity before it's delivered to your business.",
      "The result is better-quality opportunities and less time spent chasing people who were never serious buyers.",
    ],
  },
  {
    step: "Step 3",
    title: "Opportunities Delivered Directly to You",
    body: [
      "When a qualified customer is identified, the opportunity is delivered directly to your business in real time.",
      "Depending on your preferred workflow, opportunities can be sent directly to your email, CRM, sales software, or other systems so your team can respond quickly while customer interest is at its highest.",
      "Every opportunity is delivered exclusively to your business.",
      "We never share, recycle, or resell your opportunities to multiple companies.",
    ],
  },
  {
    step: "Step 4",
    title: "You Focus on Closing the Sale",
    body: [
      "Once a qualified opportunity reaches your business, it's time to do what you do best. Meet with the customer, provide an estimate, answer their questions, and close the sale.",
      "If your business needs additional assistance, Avalanche Sales also offers sales support and customer engagement solutions to help improve response times and conversion rates.",
      "Our goal isn't simply to deliver opportunities. It's to help you generate more revenue.",
    ],
  },
  {
    step: "Step 5",
    title: "Grow with Confidence",
    body: [
      "As your business grows, we help you grow with it.",
      "Whether you're expanding into new markets, increasing your monthly customer acquisition goals, or adding new services, our system can scale alongside your business.",
      "The more consistently you acquire qualified customers, the more predictable your revenue becomes. That's the foundation of sustainable business growth.",
    ],
  },
];

export const whyChooseChecklist = [
  "No setup fees",
  "No monthly contracts",
  "No advertising costs",
  "Exclusive customer opportunities",
  "Human-verified quality",
  "Real-time delivery",
  "Predictable business growth",
];

// Shared FAQ items (short set on How It Works, full set on FAQ page)
export const howItWorksFaq: { question: string; answer: string }[] = [
  {
    question: "Are the opportunities exclusive?",
    answer:
      "Yes. Every opportunity is delivered exclusively to your business and is never shared or resold.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. We believe our results should earn your business. There are no long-term contracts or monthly commitments.",
  },
  {
    question: "Do I have to manage advertising campaigns?",
    answer:
      "No. We handle the customer acquisition process so you can focus on serving your customers and growing your business.",
  },
  {
    question: "How quickly will I receive opportunities?",
    answer:
      "Qualified opportunities are delivered in real time as they become available in your selected market and service area.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We partner with businesses across a wide range of industries, including home services, professional services, insurance, legal, healthcare, financial services, automotive, contractors, and many other local businesses looking to consistently grow their customer base.",
  },
];

// Full FAQ page items
export const faqItems: { question: string; answer: string[] }[] = [
  {
    question: "What is Avalanche Sales?",
    answer: [
      "Avalanche Sales is a customer acquisition company that helps small and medium-sized businesses connect with qualified customers actively looking for their products and services.",
      "We provide exclusive customer acquisition opportunities using advanced data intelligence, audience insights, and proven sales strategies to help businesses generate more conversations, appointments, and revenue.",
    ],
  },
  {
    question: "What makes Avalanche Sales different from traditional lead providers?",
    answer: [
      "Many lead providers sell the same opportunity to multiple businesses.",
      "Avalanche Sales focuses on delivering exclusive customer acquisition opportunities designed specifically for your business.",
      "Our goal is not to provide more names and phone numbers. Our goal is to help you connect with real prospects who have demonstrated interest in your products or services.",
    ],
  },
  {
    question: "Are your opportunities exclusive?",
    answer: [
      "Yes.",
      "Our customer acquisition opportunities are delivered exclusively to your business and are never shared, recycled, or resold to multiple companies competing for the same customer.",
    ],
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer: [
      "No.",
      "Avalanche Sales believes our results should earn your continued partnership.",
      "Our goal is to provide value and generate opportunities that make sense for your business without locking you into unnecessary long-term commitments.",
    ],
  },
  {
    question: "Do I have to pay setup fees or monthly marketing fees?",
    answer: [
      "No.",
      "Avalanche Sales operates differently from traditional marketing agencies. There are no setup fees, no monthly retainers, and no advertising costs.",
      "You simply pay for qualified customer acquisition opportunities delivered to your business.",
    ],
  },
  {
    question: "How quickly will I receive opportunities?",
    answer: [
      "Delivery times vary depending on your industry, location, service area, and customer demand.",
      "Once your campaign is established, opportunities are delivered as qualified prospects become available.",
    ],
  },
  {
    question: "What industries does Avalanche Sales work with?",
    answer: [
      "We work with a variety of industries including roofing, HVAC, plumbing, solar, insurance, financial services, legal services, healthcare, home improvement, automotive, professional services, and business services.",
      "If your business relies on acquiring new customers, we can discuss whether our solutions are a good fit.",
    ],
  },
  {
    question: "Do I need a sales team to use Avalanche Sales?",
    answer: [
      "No.",
      "Many of our clients are business owners who do not have dedicated marketing or sales departments.",
      "Our goal is to simplify customer acquisition so you can focus on running your business. If needed, we can also provide guidance on sales processes, follow-up strategies, and automation.",
    ],
  },
  {
    question: "How do opportunities get delivered?",
    answer: [
      "Customer opportunities can be delivered through email, CRM systems, sales platforms, or other preferred workflows.",
      "Our goal is to make receiving and managing opportunities as simple as possible.",
    ],
  },
  {
    question: "What happens after I receive an opportunity?",
    answer: [
      "Your team follows up, communicates with the customer, provides your service, and closes the sale.",
      "Avalanche Sales helps create the opportunity. Your expertise turns that opportunity into revenue.",
    ],
  },
  {
    question: "How do I get started?",
    answer: [
      "The first step is scheduling a free customer acquisition strategy session.",
      "During this conversation, we will learn about your business, your goals, your market, and determine whether Avalanche Sales is the right partner for your growth.",
    ],
  },
];

// Resources hub cards
export const resourceCards: {
  title: string;
  headline: string;
  description: string;
  topics: string[];
  cta: string;
  href: string;
  icon: string;
}[] = [
  {
    title: "Frequently Asked Questions",
    headline: "Get Answers Before You Get Started",
    description:
      "Choosing a customer acquisition partner is an important decision. Our FAQ section provides answers to the most common questions businesses ask about our process, opportunities, pricing model, delivery methods, and how Avalanche Sales helps companies grow.",
    topics: [
      "How customer acquisition opportunities work",
      "What makes our opportunities different",
      "Exclusivity and quality verification",
      "Pricing and payment structure",
      "Contracts and commitments",
      "Industries we serve",
      "CRM integration",
      "Getting started",
    ],
    cta: "Explore FAQs",
    href: "/resources/faq/",
    icon: "chat",
  },
  {
    title: "Customer Acquisition Guide",
    headline: "The Business Owner's Guide to Finding More Customers",
    description:
      "Growing businesses need a reliable way to generate opportunities without wasting time and money on marketing that doesn't work.",
    topics: [
      "Why traditional marketing approaches often fail",
      "The difference between leads and qualified opportunities",
      "How buying intent impacts sales success",
      "Why speed-to-contact matters",
      "How businesses can build predictable growth systems",
    ],
    cta: "Download the Guide",
    href: "/resources/customer-acquisition-guide/",
    icon: "presentation",
  },
  {
    title: "Industry Insights",
    headline: "Understanding How Customers Find and Choose Businesses",
    description:
      "Customer behavior is constantly changing. Our industry insights provide practical information about trends, challenges, and opportunities affecting businesses across home services, professional services, financial services, and other industries.",
    topics: [
      "Customer acquisition trends",
      "Digital marketing changes",
      "Consumer buying behavior",
      "Sales optimization strategies",
      "Industry-specific insights",
    ],
    cta: "Explore Insights",
    href: "/resources/industry-insights/",
    icon: "chart",
  },
  {
    title: "Case Studies",
    headline: "Real Businesses. Real Growth.",
    description:
      "The best proof of a strategy is measurable results. Our case studies highlight how businesses use Avalanche Sales to improve customer acquisition, increase opportunities, and create stronger sales pipelines.",
    topics: [
      "Industry",
      "Business challenge",
      "Customer acquisition strategy",
      "Results achieved",
      "Lessons learned",
    ],
    cta: "View Case Studies",
    href: "/resources/case-studies/",
    icon: "trending",
  },
  {
    title: "Sales & Marketing Tips",
    headline: "Practical Advice For Growing Businesses",
    description:
      "You shouldn't need to become a marketing expert to grow your business. Our articles provide practical strategies and insights for growing businesses.",
    topics: [
      "Improving sales follow-up",
      "Increasing conversions",
      "Understanding digital marketing",
      "Managing customer acquisition costs",
      "Building better sales processes",
    ],
    cta: "Read Articles",
    href: "/resources/sales-marketing-tips/",
    icon: "megaphone",
  },
];

export const strategySessionReview = [
  "Your current customer acquisition process",
  "Your biggest growth challenges",
  "Your target customers",
  "Opportunities to improve your sales pipeline",
  "How Avalanche Sales can help you generate more qualified opportunities",
];
