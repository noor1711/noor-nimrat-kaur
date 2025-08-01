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
      company: "GreenTech Solutions",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description:
        "Lead developer for sustainable technology platforms. Built scalable web applications serving 100k+ users, focusing on environmental impact tracking and green energy solutions.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      id: 2,
      company: "Digital Harvest Co.",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description:
        "Developed responsive web applications for agricultural technology startup. Created intuitive dashboards for farmers to monitor crop health and optimize growing conditions.",
      technologies: ["Vue.js", "TypeScript", "D3.js", "Firebase"],
      achievements: [
        "Built real-time data visualization tools",
        "Improved user engagement by 60%",
        "Mentored 3 junior developers",
      ],
    },
    {
      id: 3,
      company: "Pixel Studios",
      position: "Junior Web Developer",
      duration: "2019 - 2020",
      description:
        "Started my journey in web development creating pixel-perfect websites and interactive experiences. Gained expertise in modern web technologies and agile development practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      achievements: [
        "Delivered 15+ client projects",
        "Achieved 98% client satisfaction rate",
        "Learned full development lifecycle",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "EcoTracker Dashboard",
      description:
        "A comprehensive environmental impact tracking application that helps users monitor their carbon footprint and discover sustainable alternatives.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
      features: [
        "Real-time carbon footprint calculation",
        "Personalized sustainability recommendations",
        "Social sharing and challenges",
        "Integration with IoT devices",
      ],
      liveUrl: "https://ecotracker-demo.vercel.app",
      githubUrl: "https://github.com/alexgarden/ecotracker",
      status: "Live",
    },
    {
      id: 2,
      title: "Garden Planner AI",
      description:
        "An intelligent garden planning tool that uses machine learning to recommend optimal plant combinations and growing schedules based on location and preferences.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      features: [
        "AI-powered plant recommendations",
        "Weather integration",
        "Growth timeline visualization",
        "Community garden sharing",
      ],
      liveUrl: "https://garden-planner-ai.vercel.app",
      githubUrl: "https://github.com/alexgarden/garden-planner",
      status: "Live",
    },
    {
      id: 3,
      title: "Pixel Art Creator",
      description:
        "A web-based pixel art editor with collaborative features, inspired by classic 8-bit graphics. Perfect for creating game sprites and digital art.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Canvas API", "WebSockets", "Redis"],
      features: [
        "Real-time collaborative editing",
        "Animation timeline",
        "Export to multiple formats",
        "Community gallery",
      ],
      liveUrl: "https://pixel-creator.vercel.app",
      githubUrl: "https://github.com/alexgarden/pixel-creator",
      status: "Beta",
    },
    {
      id: 4,
      title: "Smart Irrigation System",
      description:
        "IoT-based irrigation system with web dashboard for monitoring soil moisture, weather conditions, and automated watering schedules.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Arduino", "MQTT", "InfluxDB"],
      features: [
        "Real-time sensor monitoring",
        "Automated watering schedules",
        "Weather API integration",
        "Mobile notifications",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/alexgarden/smart-irrigation",
      status: "In Development",
    },
  ],
};
