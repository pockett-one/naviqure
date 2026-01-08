
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
    href: "#solutions",
    label: "Solutions",
    subLinks: [
      { href: "#solutions", label: "Patient Empowerment" },
      { href: "#solutions", label: "Health Locker" },
      { href: "#solutions", label: "Caregiver Co-Pilot" },
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
  { href: "#team", label: "About Us" },
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
      role: "Founder",
      image: "", // Placeholder
      bio: "Visionary leader with deep expertise in health-tech innovation.",
      visible: true,
    },
    {
      name: "Manoj Rawat",
      role: "Co-Founder",
      image: "",
      bio: "Driving operational excellence and strategic growth.",
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
      name: "Dr. Shreejit Nair",
      role: "ER Advisory",
      image: "",
      visible: true,
    },
    {
      name: "Advisor 2",
      role: "Strategic Advisor",
      image: "",
      visible: true,
      placeholder: true,
    },
    {
      name: "Advisor 3",
      role: "Clinical Advisor",
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
