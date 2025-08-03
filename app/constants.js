export const portfolioData = {
  personal: {
    name: "Noor Nimrat Kaur",
    title: "Software Engineer",
    bio: "Welcome to my digital garden! I'm a passionate developer who loves cultivating beautiful, functional web experiences. Like tending to a garden, I believe in nurturing code with patience, creativity, and attention to detail.",
    location: "Bengaluru, India",
    email: "noornimrat00@gmail.com",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    github: "https://github.com/noor1711",
  },

  // Add pixel art decorative elements
  pixelArt: {
    flowers: [
      { id: 1, type: "sunflower", color: "#FFD700" },
      { id: 2, type: "rose", color: "#FF69B4" },
      { id: 3, type: "tulip", color: "#FF6347" },
      { id: 4, type: "daisy", color: "#FFFFFF" },
    ],
    creatures: [
      { id: 1, type: "bunny", color: "#F5F5DC" },
      { id: 2, type: "butterfly", color: "#9370DB" },
      { id: 3, type: "bee", color: "#FFD700" },
    ],
    decorations: [
      { id: 1, type: "heart", color: "#FF69B4" },
      { id: 2, type: "star", color: "#FFD700" },
      { id: 3, type: "cloud", color: "#FFFFFF" },
    ],
  },

  workExperience: [
    {
      id: 1,
      company: "Intuit Inc.",
      position: "Software Engineer 2(Current)",
      duration: "2023 - Present",
      description:
        "Worked as a fullstack developer for Intuit's Platform team.",
      technologies: [
        "React",
        "Redux",
        "Java",
        "Springboot",
        "Cypress",
        "Karate",
        "CI/CD",
      ],
      roles: [
        { role: "Software Engineer 2", time: "Feb 2025 - Present" },
        { role: "Software Engineer 1", time: "Aug 2023 - Jan 2025" },
        { role: "Co-op Intern", time: "Jan 2023 - June 2023" },
      ],
      achievements: [
        "Worked on a complex data migration process and added custom monitoring",
        "Enhanced the account creation flow for TTbiz reducing user drop-off",
        "Implemented a centralized knowledge base, structured to facilitate effective querying by LLMs",
        "Developed a highly configurable and quick load widget for the sign-in experience for all Intuit products",
        "Modernised the settings page for Quickbooks",
        "Mentored 2 junior developers",
      ],
    },
    {
      id: 2,
      company: "Cisco",
      position: "SDE Intern",
      duration: "May 2022 - July 2022",
      description: "Worked as a fullstack-developer on an internal dashboard.",
      technologies: ["React", "Redux", "Django"],
      achievements: [
        "Built real-time data visualization tools",
        "Catering to more than 1000 users daily",
        "Achieved a low page load time by using lazy loading and client-side caching",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "pins2Things",
      description:
        "Convert your pinterest boards into products on the web in the click of a button.",
      image: "/pins2Things.png",
      technologies: ["React", "Next.js", "Redux", "Flask", "Google-GenAI"],
      features: [
        "Analyse your pinterest board",
        "Get product recommendations that match your aesthetic",
        "Only click pinterest authorisation",
      ],
      liveUrl: "https://pins2-things.vercel.app/",
      githubUrl: "https://github.com/noor1711/pins2Things/",
      status: "Live",
    },
    {
      id: 2,
      title: "Autimate",
      description:
        "Central platform to help people on the spectrum by offering real-time emotional analysis.",
      image: "/autimate.png",
      technologies: ["Django", "Python", "TensorFlow", "React"],
      features: [
        "Trained predictive models for emotional analysis",
        "Users can upload audio recordings and images to be analysed for emotion prediction",
        "Compare their analysis with the result and further utilise the quizzing module",
      ],
      githubUrl: "https://github.com/alexgarden/garden-planner",
      status: "Beta",
    },
    {
      id: 3,
      title: "Music Generator",
      description: "A web-based Auto Music Generator.",
      image: "/musicGeneration.png",
      technologies: ["Python", "TensorFlow", "React", "LSTM"],
      features: [
        "Used an LSTM to generate music from a single key note",
        "Explored multiple RNNs for music generation task",
      ],
      githubUrl: "https://github.com/noor1711/music_generation",
      status: "Beta",
    },
  ],
};
