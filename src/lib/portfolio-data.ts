import { getAllPosts } from './blog'

// Core portfolio data interfaces
export interface PortfolioProject {
  id: number
  title: string
  category: string
  technologies: string[]
  shortDescription: string
  duration: string
  status: string
  currentState?: string
}

export interface PortfolioExperience {
  title: string
  company: string
  location: string
  duration: string
  type: string
  achievements: string[]
  technologies: string[]
}

export interface PortfolioSkills {
  frontend: string[]
  backend: string[]
  database: string[]
  tools: string[]
  languages: string[]
  mlData: string[]
}

export interface ContactInfo {
  email: string
  academicEmail: string
  location: string
  linkedin: string
  github: string
  portfolio: string
  calendly: string
  spotify: string
}

export interface PersonalInfo {
  name: string
  tagline: string
  bio: string
  graduationDate: string
  degree: string
  university: string
  yearOfExperience: string
  projectCount: string
  nationality: string
  honors: string[]
  availability: string
  preferences: string
}

// Project data - extracted from interactive-projects.tsx
export const getProjectsData = (): PortfolioProject[] => {
  return [
    {
      id: 1,
      title: "SwitchBoard - Code-Switching Corpus Platform",
      category: "Full-Stack",
      technologies: [
        "React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", 
        "Prisma ORM", "Supabase", "Tailwind CSS", "Radix UI", "Recharts"
      ],
      shortDescription: "A community-driven platform for collecting, analyzing, and sharing code-switching examples across multiple languages, providing comprehensive analytics for linguistic research.",
      duration: "1.5 months",
      status: "✅ Completed (Phase 1 of 3)",
      currentState: "Fully functional backend API with complete frontend UI. All core features implemented including data submission, search, filtering. Analytics dashboard is still buggy."
    },
    {
      id: 2,
      title: "Procedural Story Adventure Engine",
      category: "Full-Stack / AI",
      technologies: [
        "Python", "FastAPI", "React", "TypeScript", "SQLite", "Natural Language Processing",
        "Intent Classification", "RESTful APIs", "CLI Development"
      ],
      shortDescription: "Developed a full-stack interactive storytelling engine with procedural content generation. Designed a RESTful FastAPI backend, a responsive React frontend, and implemented intent classification for natural language commands.",
      duration: "2 months",
      status: "✅ Completed",
      currentState: "Full-featured interactive storytelling platform with both web and CLI interfaces."
    },
    {
      id: 3,
      title: "WrestleStats: Pro Stats & Profiles",
      category: "Web Development",
      technologies: [
        "React", "Next.js", "Node.js", "Express", "Axios", "Cheerio", "Tailwind CSS",
        "Web Scraping", "Data Visualization"
      ],
      shortDescription: "Built a web app for wrestling fans to search, analyze, and view stats, matches, and title reigns using modern web technologies.",
      duration: "1 month",
      status: "✅ Completed",
      currentState: "Fully functional wrestling statistics and profiles web application."
    },
    {
      id: 4,
      title: "Machine Learning & Data Analysis Projects",
      category: "ML/Data Science",
      technologies: [
        "Python", "scikit-learn", "pandas", "matplotlib", "PyTorch", "TensorFlow",
        "KNN", "Random Forest", "SVM", "MLP", "PCA", "Cross-validation"
      ],
      shortDescription: "Implemented various ML models (KNN, RF, SVM, MLP, etc.) to classify and analyze text/image data, with k-fold cross-validation and comprehensive visualization.",
      duration: "Ongoing",
      status: "✅ Multiple Completed Projects",
      currentState: "Portfolio of machine learning implementations with focus on classification and data analysis."
    }
  ]
}

// Experience data - extracted from experience-timeline.tsx
export const getExperienceData = (): PortfolioExperience[] => {
  return [
    {
      title: "Information Technology Intern",
      company: "DePauw University",
      location: "Greencastle, IN",
      duration: "May 2024 – Present",
      type: "Internship",
      achievements: [
        "Automated IT workflows and internal mail sorting, improving ticket resolution speed by 20%",
        "Developed systems to route network issues to appropriate teams",
        "Supported the university's SSO (Single Sign-On) transition, improving user experience",
        "Prepared and deployed hardware to faculty/staff, ensuring continuity of service"
      ],
      technologies: ["IT Support", "Network Management", "Technical Documentation", "System Administration", "SSO Implementation"]
    },
    {
      title: "Resident Assistant",
      company: "DePauw University", 
      location: "Greencastle, IN",
      duration: "Jan 2025 – Present",
      type: "Leadership Role",
      achievements: [
        "Supported crisis management and peer mentorship for 80+ students",
        "Facilitated conflict resolution and community-building in diverse residential settings",
        "Analyzed survey data to inform residential IT needs"
      ],
      technologies: ["Leadership", "Crisis Management", "Data Analysis", "Community Building"]
    },
    {
      title: "First Year Mentor",
      company: "DePauw University",
      location: "Greencastle, IN", 
      duration: "Aug 2024 – Present",
      type: "Mentorship Role",
      achievements: [
        "Coordinated academic, career, and tech resource access for 300+ new students"
      ],
      technologies: ["Mentorship", "Academic Coordination", "Resource Management"]
    }
  ]
}

// Education data
export const getEducationData = (): PortfolioExperience => {
  return {
    title: "Bachelor of Arts in Computer Science and English Writing",
    company: "DePauw University",
    location: "Greencastle, IN",
    duration: "Aug 2022 - May 2026",
    type: "Education",
    achievements: [
      "Dual B.A. degrees in Computer Science and English Writing",
      "Relevant coursework: Data Structures, Theory of Computation, Machine Learning, Object-Oriented Software Development, Data Mining, Calculus II",
      "Honor's Program and Dean's List recipient",
      "Presidential Ambassador",
      "Active member of Computer Science Club and AI Research Group"
    ],
    technologies: ["Computer Science", "AI/ML", "Software Development", "Data Structures", "Algorithms", "Academic Writing"]
  }
}

// Skills data - centralized from various components
export const getSkillsData = (): PortfolioSkills => {
  return {
    languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "Bash", "HTML", "CSS"],
    frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Modern CSS", "HTML5"],
    backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Serverless"],
    database: ["PostgreSQL", "MongoDB", "Supabase", "AWS", "Vercel", "Docker", "SQLite", "JSON-based file I/O"],
    tools: ["Git", "GitHub", "Agile", "Testing", "CI/CD", "Figma", "Embedded Linux", "RTOS (theoretical)"],
    mlData: ["scikit-learn", "matplotlib", "pandas", "GridSearchCV", "PyTorch", "TensorFlow"]
  }
}

// Contact information - centralized
export const getContactInfo = (): ContactInfo => {
  return {
    email: "aahadvakani@gmail.com",
    academicEmail: "avakani_2026@depauw.edu", 
    location: "Greencastle, IN",
    linkedin: "https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/",
    github: "https://github.com/aavrar",
    portfolio: "https://aahadv.com",
    calendly: "https://calendly.com/avakani_2026-depauw",
    spotify: "https://open.spotify.com/user/ezhvk6bv0gwachsr7ukw7u99u?si=be37301c485a4dd1"
  }
}

// Personal information - centralized
export const getPersonalInfo = (): PersonalInfo => {
  return {
    name: "Aahad Vakani",
    tagline: "The Developer you will regret not hiring.",
    bio: "I am a undergraduate software developer with over 2 years of specialization in Python and React. I build Full-Stack apps and AI-native tools, from CLI agents to procedural narratives. With a dual background in computer science and writing, I combine logic and language to make systems that think like you do (or at least pretend to).",
    graduationDate: "May 2026",
    degree: "B.A. in Computer Science and English Writing",
    university: "DePauw University",
    yearOfExperience: "2+",
    projectCount: "50+",
    nationality: "International student from Pakistan",
    honors: ["Honor's Program", "Dean's List", "Presidential Ambassador"],
    availability: "Available for immediate interviews, full-time preferred",
    preferences: "Open to both remote and in-person roles, but would prefer in-person roles"
  }
}

// Recent blog posts for context
export const getRecentBlogPosts = () => {
  const allPosts = getAllPosts()
  return allPosts.slice(0, 3) // Get the 3 most recent posts
}

// Fun facts for personality
export const getFunFacts = (): string[] => {
  return [
    "Aahad is a big fan of wrestling and has a passion for the sport.",
    "Aahad is a big fan of video games; the most recent game he played was 'The Elder Scrolls IV: Oblivion Remastered'.",
    "Aahad loves movies; his favorite movie is 'About Time'.",
    "Aahad has consumed too much caffeine this year and has lost track of how much."
  ]
}

// Writing samples and research
export const getWritingSamples = () => {
  return [
    {
      title: "Tweets and Tags: A Study of Code-Switching in Online Contexts",
      date: "June 2025",
      description: "Examines code-switching in bilingual communities, especially on Twitter."
    },
    {
      title: "Enjambment through Exile", 
      date: "April 2025",
      description: "Analyzes Kedarnath Singh's poem 'Mother Tongue' and the emotional complexities of immigration."
    },
    {
      title: "The Never-Ending Western Exit",
      date: "April 2025", 
      description: "Explores Mohsin Hamid's 'Exit West' and the refugee experience through magical realism."
    }
  ]
}