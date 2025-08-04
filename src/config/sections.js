import { SECTION_TYPES } from '../components/SectionFactory';

// Hero Section Content
const heroContent = {
  id: "company-name",
  bg: "linear-gradient(rgba(139, 115, 85, 0.9), rgba(109, 90, 67, 0.85)), url('/images/hero-bg.jpg')",
  title: "BuildMaster Construction",
  subtitle: "Building Tomorrow's Legacy Today",
  type: SECTION_TYPES.HERO
};

// History Section Content
const historyContent = {
  id: "history",
  bg: "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/images/history-bg.jpg')",
  title: "Our Legacy Since 1995",
  subtitle: "Founded in 1995, BuildMaster Construction has grown from a small family business to one of the region's most trusted construction companies. With over 25 years of experience, we've maintained our commitment to quality, innovation, and customer satisfaction throughout our journey.",
  type: SECTION_TYPES.CONTENT
};

// Projects Section Content
const projectsContent = {
  id: "projects",
  bg: "#ffffff",
  title: "Projects",
  type: SECTION_TYPES.PROJECTS,
  projects: [
    {
      id: "crystal-tower",
      title: "Crystal Tower Office Complex",
      year: "2023",
      shortDescription: "45-story commercial building in the heart of downtown",
      image: "/images/projects/crystal-tower.jpg",
      fullDescription: `
        The Crystal Tower stands as our most ambitious project to date. This 45-story commercial building features:
        • State-of-the-art smart building technology
        • LEED Platinum certification
        • 1.2 million square feet of premium office space
        • Rooftop garden and recreational areas
        • Underground parking for 1000+ vehicles
      `,
      specs: {
        duration: "36 months",
        value: "$420M",
        size: "1.2M sq ft",
        location: "Downtown Business District"
      }
    },
    {
      id: "green-valley",
      title: "Green Valley Residences",
      year: "2022",
      shortDescription: "Sustainable housing development with 200+ units",
      image: "/images/projects/green-valley.jpg",
      fullDescription: `
        A revolutionary sustainable housing project that sets new standards:
        • 200+ eco-friendly residential units
        • Solar power integration
        • Rainwater harvesting systems
        • Community gardens
        • Zero-emission design
      `,
      specs: {
        duration: "24 months",
        value: "$180M",
        size: "15 acres",
        location: "Green Valley District"
      }
    },
    {
      id: "metro-station",
      title: "Metro Station Renovation",
      year: "2021",
      shortDescription: "Major infrastructure project revitalizing public transport",
      image: "/images/projects/metro-station.jpg",
      fullDescription: `
        Complete overhaul of the city's busiest transit hub:
        • Expanded platform capacity
        • Modern safety systems
        • Digital information displays
        • Accessibility improvements
        • Art installations
      `,
      specs: {
        duration: "18 months",
        value: "$95M",
        size: "120,000 sq ft",
        location: "Central Station"
      }
    },
    {
      id: "healthcare-center",
      title: "Healthcare Center",
      year: "2020",
      shortDescription: "State-of-the-art medical facility",
      image: "/images/projects/healthcare.jpg",
      fullDescription: `
        Modern healthcare facility designed for optimal patient care:
        • 250 patient rooms
        • Advanced surgical suites
        • Emergency department
        • Specialized care units
        • Helipad
      `,
      specs: {
        duration: "30 months",
        value: "$280M",
        size: "400,000 sq ft",
        location: "Medical District"
      }
    }
  ]
};

// Numbers Section Content
const numbersContent = {
  id: "numbers",
  bg: "linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97)), url('/images/numbers-bg.jpg')",
  title: "Our Growth in Numbers",
  type: SECTION_TYPES.NUMBERS,
  stats: [
    { icon: '🏗️', number: '500+', label: 'Completed Projects' },
    { icon: '⭐', number: '98%', label: 'Client Satisfaction' },
    { icon: '💰', number: '$250M+', label: 'Annual Revenue' },
    { icon: '📈', number: '45%', label: 'Project Margin' },
    { icon: '👥', number: '1000+', label: 'Professionals' }
    // Easy to add more stats:
    // { icon: '🏆', number: '25+', label: 'Industry Awards' },
    // { icon: '🌍', number: '15+', label: 'Countries Served' }
  ]
};

// Contact Section Content
const contactContent = {
  id: "contact",
  bg: "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/images/contact-bg.jpg')",
  title: "Contact Us",
  type: SECTION_TYPES.CONTACT,
  contactMethods: [
    { icon: '📍', label: 'Address', value: '123 Construction Avenue, Building City, BC 12345' },
    { icon: '📞', label: 'Phone', value: '(555) 123-4567' },
    { icon: '📧', label: 'Email', value: 'info@buildmaster.com' },
    { icon: '🕒', label: 'Hours', value: 'Mon-Fri: 8AM-6PM' }
  ],
  cta: {
    title: "Start Your Project",
    description: "Ready to build something amazing? Let's discuss your next project and bring your vision to life.",
    buttonText: "📧 Send Message"
  }
};

// All sections configuration
const sectionsConfig = [
  { content: heroContent, type: SECTION_TYPES.HERO },
  { content: historyContent, type: SECTION_TYPES.CONTENT },
  { content: projectsContent, type: SECTION_TYPES.PROJECTS },
  { content: numbersContent, type: SECTION_TYPES.NUMBERS },
  { content: contactContent, type: SECTION_TYPES.CONTACT }
];

export {
  heroContent,
  historyContent,
  projectsContent,
  numbersContent,
  contactContent,
  sectionsConfig
};

export default sectionsConfig; 