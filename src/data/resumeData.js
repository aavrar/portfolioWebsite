/**
 * @typedef {Object} ResumeEntry
 * @property {string} id - Unique identifier for the entry
 * @property {string} title - Job title or education degree
 * @property {string} subtitle - Company/institution name
 * @property {string} icon - FontAwesome icon class name
 * @property {string} shortDescription - Brief description shown in card
 * @property {string} fullDescription - Detailed description shown in modal
 * @property {string} startDate - Start date in ISO format (YYYY-MM-DD)
 * @property {string} endDate - End date in ISO format (YYYY-MM-DD) or null for present
 * @property {string} [companyLogo] - URL to company/institution logo
 * @property {string[]} tags - Array of skills or technologies
 * @property {string} type - Type of entry: 'work', 'education', or 'project'
 */

/**
 * @type {ResumeEntry[]}
 */
export const resumeData = [
  {
    id: 'work-1',
    title: 'Information Technology Intern',
    subtitle: 'DePauw University',
    icon: '💻',
    shortDescription: 'Providing technical support and troubleshooting for campus-wide IT infrastructure.',
    fullDescription: `
      • Provide technical support and troubleshooting for campus-wide IT infrastructure
      • Manage and maintain computer labs, network equipment, and software systems
      • Assist in implementing new technology solutions and upgrades
      • Document technical procedures and create user guides
      • Collaborate with team members to resolve complex technical issues
    `,
    startDate: '2024-05-01',
    endDate: null,
    companyLogo: 'logos/depauw-logo.jpg',
    tags: ['IT Support', 'Network Management', 'Technical Documentation', 'System Administration'],
    type: 'work'
  },
  {
    id: 'work-2',
    title: 'Resident Assistant',
    subtitle: 'DePauw University',
    icon: '🏫',
    shortDescription: 'Foster a supportive and inclusive residential community for 40+ students.',
    fullDescription: `
      • Foster a supportive and inclusive residential community for 40+ students
      • Plan and execute educational and social programming events
      • Mediate conflicts and provide crisis response when needed
      • Enforce university policies and maintain safety protocols
      • Develop and implement community-building initiatives
    `,
    startDate: '2024-01-01',
    endDate: null,
    companyLogo: 'logos/depauw-logo.jpg',
    tags: ['Leadership', 'Event Planning', 'Conflict Resolution', 'Community Building'],
    type: 'work'
  },
  {
    id: 'edu-1',
    title: 'Bachelor of Arts in Computer Science',
    subtitle: 'DePauw University',
    icon: '🎓',
    shortDescription: 'Pursuing a comprehensive computer science education with a focus on artificial intelligence and software development.',
    fullDescription: `
      • Major in Computer Science with focus on AI and Machine Learning
      • Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI, Software Development
      • Active member of Computer Science Club and AI Research Group
      • Dean's List recipient
      • Expected Graduation: May 2026
    `,
    startDate: '2022-08-01',
    endDate: '2026-05-30',
    companyLogo: 'logos/depauw-logo.jpg',
    tags: ['Computer Science', 'AI/ML', 'Software Development', 'Data Structures', 'Algorithms'],
    type: 'education'
  },
  {
    id: 'edu-2',
    title: 'Bachelor of Arts in English Writing',
    subtitle: 'DePauw University',
    icon: '🎓',
    shortDescription: 'Pursuing a comprehensive English education with courses on fiction, non-fiction, and playwriting among other forms.',
    fullDescription: `
      • Major in English Writing with focus on fiction, non-fiction, and playwriting
      • Honors Courses
      • Dean's List recipient
      • Expected Graduation: May 2026
    `,
    startDate: '2022-08-01',
    endDate: '2026-05-30',
    companyLogo: 'logos/depauw-logo.jpg',
    tags: ['English Writing', 'Prose', 'Poetry', 'Fiction', 'Non-Fiction', 'Playwriting'],
    type: 'education'
  },
  {
    id: 'proj-1',
    title: 'AI-Powered Task Management System',
    subtitle: 'Personal Project',
    icon: '🤖',
    shortDescription: 'Developed an intelligent task management system using AI to automate task breakdown and prioritization.',
    fullDescription: `
      • Built a sophisticated task management system with AI integration
      • Implemented natural language processing for task analysis
      • Created an intuitive user interface using React and styled-components
      • Integrated with OpenAI's API for intelligent task processing
      • Developed RESTful APIs using Node.js and Express
    `,
    startDate: '2024-01-01',
    endDate: '2024-03-01',
    tags: ['React', 'Node.js', 'AI/ML', 'OpenAI', 'REST APIs', 'TypeScript'],
    type: 'project'
  },
  {
    id: 'proj-2',
    title: 'Portfolio Website',
    subtitle: 'Personal Project',
    icon: '🌐',
    shortDescription: 'Designed and developed a modern, responsive portfolio website showcasing projects and skills.',
    fullDescription: `
      • Created a responsive portfolio website using React and styled-components
      • Implemented modern UI/UX design principles and animations
      • Integrated dark/light theme support
      • Optimized performance and accessibility
      • Added interactive components and smooth transitions
    `,
    startDate: '2024-02-01',
    endDate: '2024-03-01',
    tags: ['React', 'Styled Components', 'UI/UX Design', 'Responsive Design', 'Web Development'],
    type: 'project'
  }
];

/**
 * Get resume entries filtered by type
 * @param {string} type - Type of entries to filter by ('work', 'education', or 'project')
 * @returns {ResumeEntry[]} Filtered resume entries
 */
export const getEntriesByType = (type) => {
  return resumeData.filter(entry => entry.type === type);
};

/**
 * Get all unique tags from resume entries
 * @returns {string[]} Array of unique tags
 */
export const getAllTags = () => {
  const tags = new Set();
  resumeData.forEach(entry => {
    entry.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

/**
 * Get entries by tag
 * @param {string} tag - Tag to filter by
 * @returns {ResumeEntry[]} Entries that include the specified tag
 */
export const getEntriesByTag = (tag) => {
  return resumeData.filter(entry => entry.tags.includes(tag));
};

/**
 * Sort entries by date
 * @param {ResumeEntry[]} entries - Array of resume entries to sort
 * @param {boolean} [ascending=false] - Sort in ascending order if true, descending if false
 * @returns {ResumeEntry[]} Sorted entries
 */
export const sortEntriesByDate = (entries, ascending = false) => {
  return [...entries].sort((a, b) => {
    const dateA = a.endDate || new Date().toISOString();
    const dateB = b.endDate || new Date().toISOString();
    return ascending
      ? new Date(dateA) - new Date(dateB)
      : new Date(dateB) - new Date(dateA);
  });
}; 