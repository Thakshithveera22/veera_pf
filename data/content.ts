export const profile = {
  name: "Veera Venkata Thakshith Neerukonda",
  shortName: "Veera Neerukonda",
  role: "Software & ML Engineer",
  location: "Columbia, Missouri",
  email: "thakshith.nvv@gmail.com",
  phone: "+15715716586", // used for tel: link — digits only, no spaces/parens
  phoneDisplay: "+1 (571) 571-6586",
  linkedin: "https://linkedin.com/in/nvvthakshith",
  github: "https://github.com/Thakshithveera22",
};

export const heroStats = [
  { value: "3+", label: "Research & TA roles" },
  { value: "3.95", label: "M.S. GPA" },
  { value: "7", label: "Shipped projects" },
  { value: "10+", label: "Certifications" },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "TypeScript", "SQL"],
  },
  {
    category: "Machine Learning & AI",
    items: ["PyTorch", "scikit-learn", "YOLO", "Computer Vision", "OpenCV", "Model Training & Evaluation"],
    highlight: true,
  },
  {
    category: "Backend & APIs",
    items: ["Flask", "FastAPI", "REST APIs", "Django"],
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "NumPy", "Data Cleaning", "Visualization"],
  },
  {
    category: "Systems & Hardware",
    items: ["ESP32", "Raspberry Pi", "Arduino", "IoT Systems"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "Docker", "Jupyter", "Streamlit"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  current?: boolean;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "ML & IoT Research Engineer",
    org: "PAAL Lab, University of Missouri",
    dates: "May 2026 — Present",
    current: true,
    bullets: [
      "Developing AI-powered agricultural monitoring systems combining computer vision, IoT hardware, and field data collection.",
      "Designed and field-deployed ESP32-C3 firmware for battery-powered monitoring devices, including LiFePO4 state-of-charge estimation and low-power protection logic.",
      "Built computer vision pipelines using Python, YOLO, and OpenCV for image-based agricultural dataset annotation and analysis.",
      "Identified and resolved a hardware-level ADC saturation constraint through root-cause analysis, improving field measurement reliability.",
    ],
  },
  {
    role: "Teaching Assistant — Business Finance (FINANCE 2000)",
    org: "Trulaske College of Business, University of Missouri",
    dates: "Aug 2026 — Present",
    current: true,
    bullets: [
      "Support course delivery, grading, and student communication for an undergraduate finance course.",
    ],
  },
  {
    role: "Teaching Assistant — Business Communication (MGMT 4140W)",
    org: "Trulaske College of Business, University of Missouri",
    dates: "Jan 2026 — May 2026",
    bullets: [
      "Assisted with grading, student communication, and course activities.",
      "Supported students with course-related questions and maintained organized learning resources.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Vellore Institute of Technology",
    dates: "Aug 2024 — Dec 2025",
    bullets: [
      "Developed an ML-based gestational diabetes risk prediction tool — preprocessing, feature engineering, model training, and evaluation.",
      "Designed modular, object-oriented Python components to improve maintainability and reusability.",
      "Built an interactive Streamlit interface for real-time prediction and user input.",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "Ethnus, Remote (India)",
    dates: "Aug 2023 — Nov 2023",
    bullets: [
      "Built and maintained frontend/backend modules for a learning management system.",
      "Optimized SQL queries and backend logic, improving data retrieval and app responsiveness.",
      "Worked in Agile sprints with iterative delivery and peer code review.",
    ],
  },
];

export type Project = {
  title: string;
  dates: string;
  description: string;
  tags: string[];
  githubUrl?: string; // omit if private
  featured?: boolean;
  spec?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    title: "LiFePO4 Field Monitoring Firmware — ESP32-C3",
    dates: "PAAL Lab · Ongoing field deployment",
    description:
      "Production firmware for a solar/battery-powered agricultural field device. Monitors a 4S LiFePO4 pack with state-of-charge estimation, logs sensor data on schedule, and runs a hysteresis-based low-power cutoff — with a WiFi dashboard for live status and file access. In continuous field use.",
    tags: ["C++", "ESP32", "I2C", "WiFi/WebServer"],
    githubUrl: "https://github.com/Thakshithveera22/ESP32-C3_Mini_ssd1306_128x32_i2c_run",
    featured: true,
    spec: [
      { label: "battery", value: "4S LiFePO4" },
      { label: "ADC ceiling", value: "~12.6V (documented)" },
      { label: "modules", value: "7" },
      { label: "docs", value: "EN / ZH" },
    ],
  },
  {
    title: "Vision + Data Intelligence Chatbot Platform",
    dates: "2026",
    description:
      "Multimodal Q&A over images, video, and large-scale datasets — YOLOv8/OpenCV detection, FastAPI backend, conversational Streamlit interface. Architected for 25,000+ records across COCO, VisDrone, and Open Images.",
    tags: ["Python", "FastAPI", "YOLOv8", "OpenCV", "Docker"],
    githubUrl: "https://github.com/Thakshithveera22/vision-data-intelligence-chatbot",
  },
  {
    title: "Neural Signal Intelligence Platform",
    dates: "2026",
    description:
      "EEG analysis platform for seizure detection, built on the CHB-MIT Scalp EEG Database. Biomarker feature engineering, a Random Forest classifier, SHAP explainability, and a Streamlit dashboard with PDF reporting.",
    tags: ["Python", "scikit-learn", "SHAP", "FastAPI"],
    githubUrl: "https://github.com/Thakshithveera22/neural-signal-intelligence-platform",
  },
  {
    title: "ML Smart Assistant for Gestational Diabetes",
    dates: "Aug 2024 — Dec 2025",
    description:
      "A risk-prediction tool for gestational diabetes built during a research assistantship at VIT — modular Python backend, trained/evaluated models, and a Streamlit interface for real-time predictions.",
    tags: ["Python", "Machine Learning", "Streamlit", "OOP"],
    // no githubUrl — repo not confirmed public; card shows no repo button
  },
  {
    title: "WineWise — Wine Quality Prediction System",
    dates: "Jan 2025 — Mar 2025",
    description:
      "A Flask-based REST API serving a wine quality prediction model — input validation, preprocessing, and inference through a clean request-response pipeline.",
    tags: ["Python", "Flask", "REST API"],
  },
  {
    title: "IoT-Based Home Automation and Security",
    dates: "Jan 2024 — Apr 2024",
    description:
      "An IoT system using sensors and embedded devices for remote monitoring, automation scheduling, and secure device control.",
    tags: ["IoT", "Automation", "Embedded Systems"],
  },
  {
    title: "Image Caption Generation using NLP",
    dates: "Feb 2024 — May 2024",
    description:
      "An image captioning pipeline combining computer vision and NLP — feature extraction feeding a sequence-generation model for natural-language image descriptions.",
    tags: ["Python", "NLP", "Computer Vision"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  blurb: string;
  category: "Cloud & Systems" | "AI & Data" | "Foundational";
  credentialUrl?: string; // only set when a real, verifiable credential link exists — never fabricated
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    blurb: "Cloud fundamentals — deployment models, core services, and architecture basics.",
    category: "Cloud & Systems",
  },
  {
    name: "Introduction to Internet of Things",
    issuer: "Cisco Networking Academy",
    year: "2024",
    blurb: "Networking and connected-device fundamentals for embedded systems.",
    category: "Cloud & Systems",
  },
  {
    name: "Threat Modeling",
    issuer: "Infosys Springboard",
    year: "2024",
    blurb: "Security-first thinking applied to system and application design.",
    category: "Cloud & Systems",
  },
  {
    name: "Ethical AI",
    issuer: "Infosys Springboard",
    year: "2024",
    blurb: "Responsible AI principles applied alongside technical ML work.",
    category: "AI & Data",
  },
  {
    name: "Gemini for Google Workspace",
    issuer: "Google",
    year: "2024",
    blurb: "Applied AI tooling integrated into everyday workflows.",
    category: "AI & Data",
  },
  {
    name: "Big Data — 301",
    issuer: "Infosys Springboard",
    year: "2024",
    blurb: "Fundamentals of large-scale data processing.",
    category: "AI & Data",
  },
  {
    name: "Creating Responsive Web Pages using Bootstrap 4",
    issuer: "Infosys Springboard",
    year: "2024",
    blurb: "Frontend layout and responsive design fundamentals.",
    category: "Foundational",
  },
  {
    name: "Design Thinking",
    issuer: "Infosys Springboard",
    year: "2024",
    blurb: "A structured approach to problem framing and product thinking.",
    category: "Foundational",
  },
  {
    name: "Building an Agile Mindset",
    issuer: "Infosys Springboard",
    year: "2024",
    blurb: "Agile delivery principles and iterative workflow practices.",
    category: "Foundational",
  },
  {
    name: "Basic C# Programming",
    issuer: "Infosys Springboard",
    year: "2024",
    blurb: "Foundational C# syntax and object-oriented programming concepts.",
    category: "Foundational",
  },
];

export const education = [
  {
    degree: "M.S. in Computer Science",
    org: "University of Missouri, Columbia",
    dates: "Aug 2025 — May 2027 (Expected)",
    detail: "GPA: 3.95 / 4.00",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    org: "Vellore Institute of Technology, Vellore, India",
    dates: "2021 — 2025",
    detail: "GPA: 3.50 / 4.00",
  },
];

export const leadership = [
  {
    title: "Cross-domain engineering experience",
    detail: "Worked across both research-oriented and software-delivery-oriented environments — from lab research to Agile industry sprints.",
  },
  {
    title: "Broad project range",
    detail: "Built systems spanning ML prediction, API-driven applications, IoT workflows, and NLP pipelines.",
  },
  {
    title: "Community involvement",
    detail: "Active in the Telugu Literary Association (SAHITI) management team and the Youth Red Cross Association.",
  },
];
