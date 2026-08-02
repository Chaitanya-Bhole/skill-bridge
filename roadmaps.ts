export type RoadmapCategory = "highschool" | "degree";

export interface NextStep {
  emoji: string;
  title: string;
  description: string;
  options: string[];
}

export interface Roadmap {
  id: string;
  label: string;
  category: RoadmapCategory;
  prompt: string;
  nextSteps: NextStep[];
}

export const roadmaps: Roadmap[] = [
  // ── HIGH SCHOOL & ENTRANCE ──────────────────────────────────────────────
  {
    id: "10th-ssc",
    label: "10th SSC Board",
    category: "highschool",
    prompt:
      "Create a detailed 10th SSC Board exam preparation roadmap for Maharashtra students. Include subject-wise weekly study schedule for Maths, Science, English, Social Studies, Hindi. Cover important topics, exam pattern, revision strategy, and last-minute tips.",
    nextSteps: [
      {
        emoji: "🔬",
        title: "Science Stream (11th PCM)",
        description: "Choose PCM if you want to become an Engineer or go for JEE/MHT-CET",
        options: [
          "Physics + Chemistry + Maths → JEE Main/Advanced → IIT/NIT",
          "PCM → MHT-CET → B.E./B.Tech Maharashtra colleges",
          "PCM + Computer Science → Software Engineering path",
        ],
      },
      {
        emoji: "🏥",
        title: "Science Stream (11th PCB)",
        description: "Choose PCB if you want to become a Doctor or work in Medical field",
        options: [
          "Physics + Chemistry + Biology → NEET → MBBS/BDS",
          "PCB → BAMS/BHMS (Ayurveda/Homeopathy)",
          "PCB → B.Sc Nursing / B.Pharm",
        ],
      },
      {
        emoji: "📊",
        title: "Commerce Stream (11th)",
        description: "Choose Commerce for Business, Finance, CA, or Management careers",
        options: [
          "Accounts + Economics + Maths → CA Foundation → Chartered Accountant",
          "Commerce → BBA/BMS → MBA",
          "Commerce → CS Foundation → Company Secretary",
        ],
      },
      {
        emoji: "🎨",
        title: "Arts / Humanities Stream (11th)",
        description: "Choose Arts for Law, Psychology, Civil Services, Media, or Design",
        options: [
          "Political Science + History → CLAT → Law / LLB",
          "Psychology + Sociology → BA Psychology → Counseling",
          "Fine Arts / Media → Design / Journalism career",
        ],
      },
    ],
  },
  {
    id: "10th-cbse",
    label: "10th CBSE Board",
    category: "highschool",
    prompt:
      "Create a detailed 10th CBSE Board preparation roadmap. Include chapter-wise study plan for Maths, Science, Social Science, English, Hindi. Cover NCERT importance, important topics, exam pattern, revision strategy, and practical exam tips.",
    nextSteps: [
      {
        emoji: "🔬",
        title: "Science Stream — PCM",
        description: "Engineering path via JEE Main and JEE Advanced",
        options: [
          "PCM → JEE Main → NIT/IIIT/State engineering colleges",
          "PCM → JEE Advanced (top 2.5L JEE rank) → IITs",
          "PCM → BITSAT → BITS Pilani/Goa/Hyderabad",
        ],
      },
      {
        emoji: "🏥",
        title: "Science Stream — PCB",
        description: "Medical path via NEET",
        options: [
          "PCB → NEET UG → MBBS/BDS at government medical colleges",
          "PCB → NEET → BAMS/BHMS/BUMS",
          "PCB → B.Sc Nursing / B.Pharm (no entrance needed)",
        ],
      },
      {
        emoji: "📊",
        title: "Commerce Stream",
        description: "Finance, business, and professional certifications",
        options: [
          "Accountancy + Business Studies + Economics → CA/CMA",
          "Commerce + Maths → B.Com Hons → MBA Finance",
          "Commerce → BBA → MBA from IIMs",
        ],
      },
      {
        emoji: "🎨",
        title: "Arts / Humanities Stream",
        description: "Civil services, law, media, or social sciences",
        options: [
          "History + Political Science + Geography → UPSC Civil Services",
          "Political Science → CLAT → National Law Universities",
          "Psychology + Sociology → BA → M.Sc Psychology",
        ],
      },
    ],
  },
  {
    id: "12th-hsc",
    label: "12th HSC Board",
    category: "highschool",
    prompt:
      "Create a comprehensive 12th HSC Board preparation roadmap for Maharashtra students. Cover subject-wise strategy for PCM/PCB/Commerce streams, chapter weightage, HSC pattern, time management during exams, revision schedule for 3 months, 1 month, and 1 week before exam.",
    nextSteps: [
      {
        emoji: "⚙️",
        title: "Engineering Entrances (PCM)",
        description: "Apply for these after or during 12th",
        options: [
          "JEE Main (Jan + April) → NIT/IIIT/State colleges",
          "MHT-CET (April-May) → Maharashtra engineering quota",
          "JEE Advanced → IITs (need top 2.5L in JEE Main)",
        ],
      },
      {
        emoji: "🏥",
        title: "Medical Entrances (PCB)",
        description: "NEET is the only gateway to all medical degrees",
        options: [
          "NEET UG (May) → Government MBBS/BDS seats",
          "NEET → State quota seats via MCC/State counseling",
          "AIIMS/JIPMER included in NEET from 2020",
        ],
      },
      {
        emoji: "💼",
        title: "Direct Admissions (No Entrance)",
        description: "Many good degrees don't need an entrance exam",
        options: [
          "BCA / B.Sc CS → Direct merit-based admission",
          "BBA / BMS → Management institutes via 12th marks",
          "B.Com → Commerce colleges, then pursue CA/MBA",
        ],
      },
    ],
  },
  {
    id: "jee",
    label: "JEE Prep",
    category: "highschool",
    prompt:
      "Create a complete JEE Main and Advanced preparation roadmap. Include topic-wise priority for Physics (Mechanics, Electrostatics, Modern Physics), Chemistry (Organic, Physical, Inorganic), Mathematics (Calculus, Algebra, Coordinate Geometry). Cover study schedule, mock test frequency, important books, and revision strategy.",
    nextSteps: [
      {
        emoji: "🏛️",
        title: "IITs — via JEE Advanced",
        description: "Top 2.5 lakh JEE Main qualifiers can attempt JEE Advanced",
        options: [
          "IIT Bombay, IIT Delhi, IIT Madras — most sought after",
          "B.Tech CS/EE/ME — highest placement packages",
          "IIT Kharagpur, Roorkee, Kanpur — equally excellent",
        ],
      },
      {
        emoji: "🏫",
        title: "NITs & IIITs — via JEE Main",
        description: "31 NITs and 25 IIITs accept JEE Main scores",
        options: [
          "NIT Trichy, NIT Warangal, NIT Surathkal — top NITs",
          "IIIT Hyderabad, IIIT Delhi — for CS/AI specializations",
          "BITS Pilani via BITSAT (separate exam, no JEE needed)",
        ],
      },
      {
        emoji: "📍",
        title: "State Engineering Colleges",
        description: "Maharashtra students can also use MHT-CET score",
        options: [
          "VJTI Mumbai, COEP Pune — top Maharashtra colleges",
          "ICT Mumbai for Chemical/Pharmaceutical Engineering",
          "Private colleges (PICT, SPIT, DJ Sanghvi) via CAP rounds",
        ],
      },
    ],
  },
  {
    id: "mht-cet",
    label: "MHT-CET Prep",
    category: "highschool",
    prompt:
      "Create a complete MHT-CET preparation roadmap. Cover Physics, Chemistry, Mathematics chapter weights (Class 11 counts for 20%, Class 12 for 80%). Include topic-wise priority, MCQ solving strategy, time management for 3-hour paper, important chapters, and revision plan for last 60 days.",
    nextSteps: [
      {
        emoji: "🏫",
        title: "Top Maharashtra Engineering Colleges",
        description: "MHT-CET score used for all Maharashtra state quota seats",
        options: [
          "VJTI Mumbai — Rank 1 Maharashtra (Civil/Mech/CS)",
          "COEP Technological University Pune",
          "ICT Mumbai, PICT Pune, SPIT Mumbai, DJ Sanghvi",
        ],
      },
      {
        emoji: "📋",
        title: "CAP Round Process",
        description: "Centralized Admission Process after MHT-CET",
        options: [
          "Step 1: Document verification at facilitation center",
          "Step 2: Fill preference list (college + branch combo)",
          "Step 3: Multiple rounds → Seat allotment → Confirm admission",
        ],
      },
      {
        emoji: "💡",
        title: "Backup Entrance Exams",
        description: "Appear for these alongside MHT-CET for more options",
        options: [
          "JEE Main — gives access to NITs pan-India",
          "BITSAT — BITS Pilani, Goa, Hyderabad campuses",
          "Manipal / VIT / SRM entrance — top private colleges",
        ],
      },
    ],
  },

  // ── COLLEGE DEGREES ────────────────────────────────────────────────────
  {
    id: "be-4year",
    label: "B.E. 4-Year",
    category: "degree",
    prompt:
      "Create a complete 4-year B.E. (Bachelor of Engineering) academic roadmap. Provide semester-wise subjects for a typical CS/IT branch. Include technical skills to build each year, internship timeline, project ideas for final year, and placement preparation strategy starting from 3rd year.",
    nextSteps: [
      {
        emoji: "💼",
        title: "Placements (On-Campus)",
        description: "Start placement prep from 3rd year, 2nd semester",
        options: [
          "Product companies (Amazon/Google) → DSA (LeetCode) + System Design",
          "Core engineering companies → Domain knowledge + major projects",
          "Service companies (TCS/Infosys/Wipro) → Aptitude + Communication",
        ],
      },
      {
        emoji: "🎓",
        title: "Higher Studies",
        description: "Postgraduate options after B.E.",
        options: [
          "M.Tech / M.E. → GATE exam → IITs/NITs + PSU jobs",
          "MBA → CAT/GMAT → IIMs/ISB",
          "MS abroad → GRE + IELTS → USA/Canada/Germany",
        ],
      },
      {
        emoji: "🚀",
        title: "Startup / Freelancing",
        description: "Build something of your own",
        options: [
          "Work 1-2 years → Save capital → Start your startup",
          "Apply to IIT/IIM incubators or Y Combinator",
          "Freelancing on Upwork/Toptal during final year → Scale to agency",
        ],
      },
    ],
  },
  {
    id: "btech-4year",
    label: "B.Tech 4-Year",
    category: "degree",
    prompt:
      "Create a complete 4-year B.Tech roadmap with detailed semester-wise subjects. Include technical skills to learn each year, when to do internships, how to build a strong GitHub portfolio, and placement preparation strategy with timeline.",
    nextSteps: [
      {
        emoji: "💻",
        title: "Software Development Career",
        description: "Most popular path for B.Tech graduates",
        options: [
          "Full Stack Dev → React + Node.js or Django → 8-20 LPA entry",
          "Mobile Dev → Flutter or React Native → 7-15 LPA",
          "DevOps/Cloud → AWS/GCP certifications → 10-25 LPA",
        ],
      },
      {
        emoji: "🧠",
        title: "Data Science & AI/ML",
        description: "High-growth field with excellent salaries",
        options: [
          "Python + Pandas + Scikit-learn → ML Engineer",
          "Deep Learning (PyTorch/TensorFlow) → AI Researcher",
          "Data Analyst → Business Intelligence → 6-18 LPA",
        ],
      },
      {
        emoji: "📜",
        title: "Certifications That Matter",
        description: "Add these to your resume while studying",
        options: [
          "AWS Certified Solutions Architect — most valued cloud cert",
          "Google Professional Data Engineer / ML Engineer",
          "Meta Front-End / Back-End Developer (Coursera)",
        ],
      },
    ],
  },
  {
    id: "bca-3year",
    label: "BCA 3-Year",
    category: "degree",
    prompt:
      "Create a comprehensive 3-year BCA (Bachelor of Computer Applications) roadmap. Include semester-wise subjects, programming skills to build (C → Java → Python → Web Dev), which certifications to pursue, internship strategy, final year project ideas, and career opportunities after BCA.",
    nextSteps: [
      {
        emoji: "📚",
        title: "Higher Studies After BCA",
        description: "Upgrade your qualification for better roles",
        options: [
          "MCA (Master of Computer Applications) — best upgrade, NIMCET exam",
          "M.Sc IT / M.Sc CS from good universities",
          "MBA in IT / Information Systems — management + tech combo",
        ],
      },
      {
        emoji: "💼",
        title: "Direct Career After BCA",
        description: "Jobs you can apply for right after graduation",
        options: [
          "Junior Software Developer → Full Stack with portfolio projects",
          "Web Developer → Build 3-5 projects, apply to startups",
          "System Analyst / IT Support → Service industry entry",
        ],
      },
      {
        emoji: "🎓",
        title: "Professional Certifications",
        description: "Boost your resume while still in BCA",
        options: [
          "AWS Cloud Practitioner → Cloud computing foundation",
          "Google IT Support (Coursera) → IT support roles",
          "Full Stack Web Dev bootcamp (Udemy) + GitHub portfolio",
        ],
      },
    ],
  },
  {
    id: "bsc-data-ai",
    label: "B.Sc Data Science/AI",
    category: "degree",
    prompt:
      "Create a detailed 3-year B.Sc Data Science and AI roadmap. Include mathematics foundation (Linear Algebra, Statistics, Calculus), Python learning path, important ML/DL libraries, project ideas for portfolio, Kaggle competitions, and career opportunities.",
    nextSteps: [
      {
        emoji: "🎓",
        title: "Higher Studies After B.Sc DS/AI",
        description: "Specialization options for better roles",
        options: [
          "M.Tech AI/ML at IITs/NITs via GATE DA paper",
          "M.Sc Data Science — IIT Madras, IIT Hyderabad",
          "MS in CS / Data Science abroad (GRE + IELTS) → USA/Canada",
        ],
      },
      {
        emoji: "🚀",
        title: "Career Paths",
        description: "Roles you can target after B.Sc DS/AI",
        options: [
          "Data Scientist → 8-25 LPA at tech/fintech companies",
          "ML Engineer → Building AI products → 10-30 LPA",
          "Data Analyst → Business analytics → 5-12 LPA entry level",
        ],
      },
      {
        emoji: "🏆",
        title: "Competitions & Portfolio",
        description: "Differentiate yourself with these",
        options: [
          "Kaggle competitions → aim for top 10% → put on resume",
          "Open source contributions to ML libraries",
          "Publish research paper during final year project",
        ],
      },
    ],
  },
  {
    id: "bba-bms-3year",
    label: "BBA/BMS 3-Year",
    category: "degree",
    prompt:
      "Create a complete 3-year BBA/BMS roadmap. Include semester-wise management subjects, business skills to develop (Excel, Financial Modeling, Public Speaking), internship timeline, relevant certifications, and career tracks after graduation.",
    nextSteps: [
      {
        emoji: "📈",
        title: "MBA After BBA/BMS",
        description: "Most popular and high-ROI path",
        options: [
          "CAT exam → IIM Ahmedabad/Bangalore/Calcutta → 25-50 LPA",
          "SNAP → SIBM Pune, SCMHRD → 10-20 LPA",
          "XAT → XLRI Jamshedpur → HR/Finance specialization",
        ],
      },
      {
        emoji: "💼",
        title: "Direct Career After BBA",
        description: "Start working right after graduation",
        options: [
          "Marketing Executive / Brand Manager at FMCG/startups",
          "Business Development Associate → Sales / Client Management",
          "HR Executive / Talent Acquisition → 3-5 LPA entry",
        ],
      },
      {
        emoji: "🌍",
        title: "International Options",
        description: "Study or work abroad after BBA",
        options: [
          "GMAT → International MBA (UK/USA/Canada) in 1-2 years",
          "ACCA (UK accounting certification) — global finance career",
          "Work in Middle East / Singapore for management roles",
        ],
      },
    ],
  },
  {
    id: "bcom-3year",
    label: "B.Com 3-Year",
    category: "degree",
    prompt:
      "Create a comprehensive 3-year B.Com roadmap. Include semester-wise subjects (Financial Accounting, Cost Accounting, Taxation, Business Law, Auditing). Cover the CA/CMA pathway alongside B.Com, important Excel/Tally skills, and career opportunities after B.Com.",
    nextSteps: [
      {
        emoji: "📊",
        title: "Chartered Accountant (CA) Path",
        description: "Most prestigious finance qualification in India",
        options: [
          "CA Foundation (after 12th) → CA Intermediate → CA Final",
          "3-year articleship with CA firm while studying",
          "Qualified CA → 7-25 LPA starting, Big 4 firms prefer CAs",
        ],
      },
      {
        emoji: "🏅",
        title: "Other Professional Certifications",
        description: "High-value certifications alongside B.Com",
        options: [
          "CMA (Cost & Management Accountant) — ICMAI",
          "CS (Company Secretary) — ICSI, legal + compliance roles",
          "CFA Level 1 → Investment Banking / Equity Research",
        ],
      },
      {
        emoji: "🎓",
        title: "Higher Studies After B.Com",
        description: "Postgraduate options for better roles",
        options: [
          "M.Com → then NET/SET for lectureship or Ph.D",
          "MBA Finance → IIMs via CAT → Investment Banking/Consulting",
          "M.Sc Finance / Financial Economics → Research + Analytics",
        ],
      },
    ],
  },
  {
    id: "ba-digital-psych",
    label: "B.A. Digital Media/Psychology",
    category: "degree",
    prompt:
      "Create a detailed 3-year B.A. roadmap for Digital Media and Psychology. Include semester-wise subjects, portfolio building for Digital Media, clinical skills for Psychology, internship opportunities, and career paths for each.",
    nextSteps: [
      {
        emoji: "🎨",
        title: "Digital Media Careers",
        description: "Creative and technical roles in media",
        options: [
          "Content Creator / YouTuber / Podcaster → personal brand",
          "Social Media Manager / Digital Marketer → 4-12 LPA",
          "UX/UI Designer (learn Figma) → 6-18 LPA tech companies",
        ],
      },
      {
        emoji: "🧠",
        title: "Psychology Careers",
        description: "Helping and research-oriented roles",
        options: [
          "Clinical Psychologist → M.Sc Psychology + RCI registration → 5-15 LPA",
          "School / College Counselor → Education sector → 3-8 LPA",
          "HR & Organizational Psychology → Corporate roles → 5-12 LPA",
        ],
      },
      {
        emoji: "📚",
        title: "Higher Studies",
        description: "Specialization and research paths",
        options: [
          "M.A. Psychology → M.Phil → Licensed Clinical Practice",
          "Masters in Mass Communication / Journalism",
          "MBA Marketing → Combine business + media skills",
        ],
      },
    ],
  },
];

export function getRoadmapById(id: string): Roadmap | undefined {
  return roadmaps.find((r) => r.id === id);
}

export const highSchoolRoadmaps = roadmaps.filter((r) => r.category === "highschool");
export const degreeRoadmaps = roadmaps.filter((r) => r.category === "degree");