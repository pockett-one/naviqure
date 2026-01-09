
export const BRAND_COLORS = {
  primary: "#2D39A3",      // Navi Indigo (Vibrant Navy)
  primaryHover: "#1E247D",  // Deep Indigo (Hover state)
  secondary: "#F0F7FF",    // Sky Bloom (Accent Blue)
  white: "#FFFFFF",
  background: "#FFFFFF",
  muted: "#F8FAFC",
  text: "#212B36",
} as const;

// Lucide imports removed in favor of Material Symbols

export const NAV_LINKS = [
  {
    href: "#our-offerings",
    label: "Our Offerings",
    subLinks: [
      { href: "#our-offerings", label: "Patient Empowerment" },
      { href: "#our-offerings", label: "Health Locker" },
      { href: "#our-offerings", label: "Caregiver Co-Pilot" },
    ]
  },
  {
    href: "#who-we-serve",
    label: "Who We Serve",
    subLinks: [
      { href: "#who-we-serve", label: "Patients & Families" },
      { href: "#who-we-serve", label: "Specialty Clinics" },
      { href: "#who-we-serve", label: "Enterprise Healthcare" },
    ]
  },
  {
    href: "#care-areas",
    label: "Care Areas",
    subLinks: [
      { href: "#care-areas", label: "Oncology" },
      { href: "#care-areas", label: "Neurological" },
      { href: "#care-areas", label: "Metabolic & CV" },
    ]
  },
  { href: "/#team", label: "About Us" },
] as const;

export const SOLUTIONS = [
  {
    title: "Patient Empowerment SaaS",
    description: "A self-service ecosystem giving patients and caregivers full control over their health data, treatment timelines, and daily care tasks.",
    icon: "pan_tool_alt",
  },
  {
    title: "Intelligent Health Locker",
    description: "A secure repository for all medical records, synced with ABHA to ensure longitudinal care across any hospital in India.",
    icon: "health_and_safety",
  },
  {
    title: "Caregiver Co-pilot",
    description: "Specialized tools for family members managing patients with cognitive or high-dependency needs (e.g., Alzheimer's/Parkinson's).",
    icon: "forum",
  },
] as const;

export const CARE_AREAS = [
  {
    title: "Oncology (Cancer Care)",
    description: "Streamlining chemotherapy schedules, symptom tracking, and medication adherence for complex multi-drug regimens.",
    icon: "biotech",
  },
  {
    title: "Neurological Care (Alzheimer’s & Parkinson’s)",
    description: "Specialized tracking for cognitive trends, motor function fluctuations, and safety alerts for caregivers.",
    icon: "neurology",
  },
  {
    title: "Metabolic & Cardiovascular",
    description: "Continued intelligent management for systemic chronic conditions like Diabetes and Hypertension.",
    icon: "monitor_heart",
  }
] as const;

export const WHO_WE_SERVE = [
  {
    title: "Patients & Families",
    description: "Focusing on autonomy and clarity during the most challenging health journeys.",
    icon: "groups",
  },
  {
    title: "Specialty Clinics",
    description: "Helping neurologists and oncologists stay connected to patients between visits.",
    icon: "stethoscope",
  },
  {
    title: "Enterprise Healthcare",
    description: "Providing the infrastructure for hospitals to meet national digital health standards.",
    icon: "hub",
  }
] as const;

export const COMPLIANCE_FEATURES = [
  {
    title: "Data Sovereignty",
    description: "Our commitment to keeping Indian patient data within national borders, hosted on local, secure cloud infrastructure.",
    icon: "database",
  },
  {
    title: "ABHA Integration (NDHM)",
    description: "Fully integrated with the Ayushman Bharat Digital Mission. We facilitate seamless health ID creation and record sharing within the national ecosystem.",
    icon: "badge",
  },
  {
    title: "Global Security Standards",
    description: "Adherence to HIPAA (USA) and DPDP Act (India) protocols to ensure the highest level of encryption and data privacy.",
    icon: "verified_user",
  }
] as const;

export const TRUSTED_BY = [
  "HealthCare Plus",
  "MediNet Systems",
  "Global Pharma",
  "Apex Clinics",
  "Vitality Groups"
];

export const CORE_TEAM = {
  founders: [
    {
      name: "Vikram J Pandey",
      role: "Founder & CEO",
      image: "", // Placeholder
      bio: "Engineering Leader\nex-Adobe, Novartis",
      detailedBio: "Vikram is a seasoned technology leader with over 25 years of experience architecting high-availability digital health and enterprise platforms. An expert P&L leader, he has delivered multi-year, multi-million dollar digital transformation programs for Fortune 1000 enterprises across the globe. He has worked in USA, UK, Germany, Singapore, and Dubai. He has a proven track record of building, scaling, and moving global software engineering organizations, ensuring production-grade reliability for complex, distributed systems.\n\nHis domain expertise is anchored in Clinical Informatics and Full Stack Architecture, having built a State-level Health Information Exchange (HIE) in the USA. Vikram specializes in the 'last mile' of secure clinical data liquidity using HL7 standards. With a deep background in AI & GenAI Strategy, MarTech, eCommerce Systems, Real-time systems, he provides the strategic and technical oversight necessary to manage mission-critical, end-to-end medical data infrastructures on a global scale.",
      visible: true,
    },
    {
      name: "Manoj Rawat",
      role: "Co-Founder",
      image: "",
      bio: "Data & AI Strategy Leader\nex-Microsoft, HP, Fractal",
      detailedBio: "Manoj Rawat is an accomplished Data & AI Strategy Leader with an extensive background in driving enterprise-wide digital transformation at global technology firms including Microsoft, HP, and Fractal. Based in the Washington DC area, he specializes in architecting high-performance Enterprise Data Warehouse (EDW) platforms and scalable AI frameworks, with a proven track record of managing systems processing over 80 million records daily and data volumes exceeding 1.2 PB.\n\nManoj combines deep technical roots in Database Administration (DBA) and systems architecture with a rigorous focus on global compliance standards such as ISO 42001, HIPAA, and FERPA/COPPA. His leadership is defined by a commitment to building secure, hyper-scalable SaaS ecosystems that transform complex data into responsible, high-impact AI outcomes.\n\nManoj holds an M.B.A. from the UCLA Anderson School of Management (Los Angeles, CA) and a B.Tech from the Indian Institute of Technology (IIT), New Delhi.",
      visible: true,
    }
  ],
  medicalPanel: [
    {
      name: "Pending Appointment",
      role: "Chief Medical Officer",
      image: "",
      visible: true,
      placeholder: true,
    },
    {
      name: "Pending Appointment",
      role: "Senior Oncologist",
      image: "",
      visible: true,
      placeholder: true,
    },
    {
      name: "Pending Appointment",
      role: "Onco Surgeon",
      image: "",
      visible: true,
      placeholder: true,
    },
    {
      name: "Pending Appointment",
      role: "Doctor 4",
      image: "",
      visible: true,
      placeholder: true,
    }
  ],
  advisoryPanel: [
    {
      name: "Dr. Kriti Hegde",
      role: "Clinical Advisor",
      image: "",
      bio: "Pediatric Oncology",
      detailedBio: "Dr. Kriti Hegde is a highly specialized Pediatric Hematologist and Oncologist based in Mumbai, dedicated to the comprehensive care of children and adolescents with cancers and blood disorders. She is currently serving as a Consultant at Narayana Health (SRCC Children's Hospital). Her clinical expertise is built on a strong international foundation, having spent significant time in the United Kingdom gaining advanced experience in specialized pediatric cancer care.\n\nHer core focus involves the comprehensive management of complex conditions, including Leukemias, Lymphomas, and Solid Tumors, alongside specialized treatments for benign hematological disorders such as Thalassemia and Sickle Cell Anemia. With a deep commitment to 'holistic healing,' Dr. Hegde emphasizes not only the clinical treatment of the disease but also the long-term emotional and nutritional well-being of the patient and their family.\n\nAt NaviQure AI, Dr. Hegde provides specialized domain expertise for the Oncology (Cancer Care) care area. She ensures that the platform's patient empowerment tools—such as chemotherapy scheduling, symptom tracking, and medication adherence—are tailored to the unique physiological and psychological needs of younger patients. Her clinical insight is instrumental in refining NaviQure's Caregiver Co-pilot, helping families navigate the complexities of pediatric multi-drug regimens and long-term survivorship monitoring.",
      visible: true,
    },
    {
      name: "Major (Dr.) Shrijit Nair",
      role: "Clinical Governance",
      image: "",
      bio: "Consultant Anaesthetist\nex-NHS, Indian Army",
      detailedBio: "Major (Dr.) Shrijit Nair is a distinguished clinical leader with over two decades of experience in high-stakes medicine across Ireland, the UK, and India. A substantive Consultant in Liver Transplant Anaesthesia at St. Vincent's University Hospital, Dublin, he brings world-class expertise in managing complex, multi-organ clinical pathways and perioperative care. His career is defined by a commitment to patient safety and clinical innovation, having served as a Senior Clinical Fellow at King's College Hospital, London—one of the world's leading centers for liver transplantation.\n\nPrior to his consultant roles, he served with distinction as a Medical Officer in the Indian Army Medical Corps, providing emergency care in extreme hypoxic conditions at Siachen, the world's highest battlefield. For his humanitarian services in Ladakh, he was awarded a Meritorious Commendation Medal from the Indian Army Chief of Staff.\n\nAt NaviQure AI, Dr. Nair leads Clinical Governance, ensuring all AI-driven solutions meet the highest international medical standards.",
      visible: true,
    },
    {
      name: "Advisor 3",
      role: "Strategic Advisor",
      image: "",
      visible: true,
      placeholder: true,
    },
    {
      name: "Advisor 4",
      role: "Tech Advisor",
      image: "",
      visible: true,
      placeholder: true,
    }
  ],
  hospitalPartners: [
    {
      name: "Jupiter Hospital",
      role: "Clinical Partner",
      image: "",
      visible: true,
    },
    {
      name: "Partner 2",
      role: "Research Partner",
      image: "",
      visible: true,
      placeholder: true, // Set to false to hide
    },
    {
      name: "Partner 3",
      role: "Deployment Partner",
      image: "",
      visible: true,
      placeholder: true,
    },
    {
      name: "Partner 4",
      role: "Data Partner",
      image: "",
      visible: true,
      placeholder: true,
    }
  ]
} as const;
