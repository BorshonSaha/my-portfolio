import type {
  Certificate,
  EducationItem,
  ExperienceItem,
  NavLink,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
} from "@/types";

export const profile: Profile = {
  name: "Borshon Saha",
  role: "Software Developer · Backend & Web Developer",
  taglines: [
    "I design REST APIs that stay readable as they grow.",
    "I ship full-stack features from database to browser.",
  ],
  email: "saha11borshon@gmail.com",
  resumes: [
    { lang: "en", label: "English", driveFileId: "1CrCIhYROrjZX5kki3c7f5sAuaBZyqPQ1" },
    { lang: "de", label: "Deutsch", driveFileId: "1f4q0q5hFkf46_layamX3Cs9F79THFVvy" },
  ],
  api: {
    endpoint: "GET /v1/developers/borshon",
    focus: ["api-design", "service-integration", "scalable-architecture"],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Next.js"],
  },
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { platform: "github", label: "GitHub", href: "https://github.com/borshonsaha" },
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/borshonsaha/" },
  { platform: "xing", label: "Xing", href: "https://www.xing.com/profile/Borshon_Saha" },
];


export const projects: Project[] = [
  {
    id: "booking_buddy_app",
    title: "Booking Buddy App",
    problem: "",
    solution: "",
    stack: ["Spring Boot", "PostgreSQL", "JWT Authentication", "Stripe API"],
    highlights: [
      "Developed a hotel booking backend using Java Spring Boot and PostgreSQL, complete with secure JWT user authentication",
      "Implemented pessimistic lock to prevent double bookings during high traffic",
      "Implemented dynamic pricing strategy using the decorator design pattern",
      "Integrated Stripe to handle payment confirmations and refunds via webhooks",
    ],
    repoUrl: "https://github.com/BorshonSaha/booking-buddy",
    demoUrl: "",
  },
  {
    id: "hungerzz_kitchen",
    title: "Hungerzz Kitchen",
    problem: "",
    solution: "",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Firebase", "Stripe"],
    highlights: [
      "Developed a full-stack food ordering and restaurant management web application using the MERN stack (MongoDB, Express, React, Node.js)",
      "Integrated Firebase authentication for secure user access",
      "Integrated Stripe to handle online payments",
      "Implemented an admin dashboard to add, update, and manage menu items and customer orders",
    ],
    repos: [
      { label: "Client", url: "https://github.com/BorshonSaha/restaurant-client" },
      { label: "Server", url: "https://github.com/BorshonSaha/restaurant-server-2" },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    description: "Where I spend most of my working day.",
    skills: [
      { name: "Java", core: true },
      { name: "Spring Boot", core: true },
      { name: "REST APIs", core: true },
      { name: "JPA / Hibernate", core: true },
      { name: "Spring Security", core: true },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Typed, accessible interfaces on top of those APIs.",
    skills: [
      { name: "TypeScript", core: true },
      { name: "Next.js", core: true },
      { name: "React", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "HTML & CSS" },
    ],
  },
  {
    id: "data-tools",
    title: "Databases & Tools",
    description: "Storage, delivery and day-to-day tooling.",
    skills: [
      { name: "PostgreSQL", core: true },
      { name: "Git", core: true },
      { name: "GitHub", core: true },
      { name: "IntelliJ IDEA", core: true },
      { name: "VS Code", core: true },
      { name: "Postman", core: true },
      { name: "Maven" },
    ],
  },
];


export const experience: ExperienceItem[] = [
  {
    id: "walton",
    role: "Software Developer (Full-Time)",
    company: "Walton Hi-Tech Industries PLC (Walton Group)",
    period: "May 2025 – July 2026",
    summary: "Building and maintaining a point-of-sale platform used across retail operations.",
    impact: [
      "Developed product, customer and sales management modules for POS platform used across 700+ Walton retail outlets, using Java, Spring Boot and PostgreSQL",
      "Built 25+ REST APIs with Spring Boot and JPA/Hibernate, optimizing slow queries and indexes to improve response time",
      "Developed 50+ web interfaces using Next.js and TypeScript for sales workflows, product and asset management, improving page load times with Server Components",
      "Collaborated with a team of 6 developers in Scrum sprints, using Git and code reviews to ship 5+ features per release",
      "Around 100+ tickets closed including features and bugs",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Next.js"],
  },
  {
    id: "walton_internship",
    role: "Software Developer Intern",
    company: "Walton Plaza (Walton Group)",
    period: "November 2024 – April 2025",
    summary: "",
    impact: [
      "Learned Java, Spring Boot and Next.js through hands-on training and began implementing basic features in the POS platform",
      "Gained hands-on experience with Git and GitHub, managing branches, pull requests, and merge conflicts in a collaborative POS development environment",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Next.js"],
  },
];

export const education: EducationItem[] = [
  {
    id: "msc",
    degree: "M.Sc. in Applied Computer Science",
    major: "Applied Computer Science",
    institution: "Schmalkalden University of Applied Sciences",
    location: "Schmalkalden, Thuringen, Germany",
    period: "From Winter Semester 2026/27 - Present",
    focus: ["Distributed systems", "Web App", "Computer Graphics"],
  },
  {
    id: "bsc",
    degree: "B.Sc. in Computer Science & Engineering",
    major: "Computer Science & Engineering",
    institution: "Bangladesh Army University of Science and Technology (BAUST)",
    location: "Bangladesh",
    period: "January 2019 – January 2023",
    focus: ["Data structures & algorithms", "Databases", "Software engineering", "Computer networks"],
  },
];


export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Internship Certificate",
    issuer: "Walton Plaza",
    issued: "May 2025",
    credentialId: "",
    skills: ["Spring Boot", "PostgreSQL", "Next.js"],
    driveLink: "https://drive.google.com/file/d/1mbYfKUiwpj57K7soMAek2PTaa9UfPGLf/view",
  },
  {
    id: "cert-2",
    title: "ICPC Regional Contest",
    issuer: "ICPC Foundation",
    issued: "September 2022",
    skills: ["Problem Solving"],
    driveLink: "https://drive.google.com/file/d/1KyOBvJtqu7r4MyjDkpbcP1rXoEfm4VfF/view",
  },
  {
    id: "cert-3",
    title: "Problem Solving Certificate",
    issuer: "HackerRank",
    issued: "December 2024",
    skills: ["Problem Solving"],
    driveLink: "https://drive.google.com/file/d/1iQLIpdgGDrN_yqLIEfjzBy4-W_uFJQaC/view",
  },
  {
    id: "cert-4",
    title: "Python Basic Certificate",
    issuer: "HackerRank",
    issued: "May 2024",
    skills: ["Programming Language"],
    driveLink: "https://drive.google.com/file/d/1Ra8nnkHzJ_tTOTbJhjggkQj4rq35PzIM/view",
  },
  {
    id: "cert-5",
    title: "Web Development Certificate",
    issuer: "Programming Hero",
    issued: "June 2021",
    skills: ["Web Dev Skill"],
    driveLink: "https://drive.google.com/file/d/1rHALTf33rFmoaRjkHGklFfWz6s-X3E4N/view",
  },
];
