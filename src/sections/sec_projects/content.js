const projectsContent = {
  id: "projects",
  bg: "#ffffff",
  title: "Projects",
  type: "projects",
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

export default projectsContent;
