export const ACADEMY_INFO = {
  name: "RK Academy Karur",
  tagline: "Your Dreams Come True",
  motto: "Decide your future now, step up now or regret later !",
  phone: "+91 97905 70707",
  whatsappNumber: "919790570707",
  instagram: "@_rk_academy_",
  instagramUrl: "https://instagram.com/_rk_academy_",
  address: "No. 17, R. P. Muthu Plaza, Near to Thinnappa Theatre, Karur - 1",
  mapQuery: "No.17 RP Muthu Plaza Near Thinnappa Theatre Karur",
  timing: {
    days: "Monday – Saturday",
    hours: "6:00 PM – 9:00 PM",
    online: "24/7 Access to Live & Recorded Sessions"
  },
  stats: [
    { value: "500+", label: "Students Empowered" },
    { value: "10+", label: "Years of Academic Excellence" },
    { value: "98%", label: "Pass & Distinction Rate" },
    { value: "25% OFF", label: "Special Discount on Engg. Maths" }
  ]
};

export const COURSES = [
  {
    id: "engg-maths",
    title: "Engineering Maths (M1, M2, M3 & M4)",
    badge: "🔥 25% OFF SPECIAL OFFER",
    badgeColor: "bg-red-600 text-white",
    discountPercent: 25,
    boards: ["Anna University", "Deemed Varsities", "Autonomus Colleges"],
    category: "Engineering",
    iconName: "Calculator",
    summary: "Complete coaching for Engineering Mathematics M1, M2, M3, and M4. Master Matrices, Calculus, Transforms, PDE, and Statistics with exam-oriented problem solving.",
    modes: ["Online Live", "Offline Karur Center"],
    highlights: [
      "Step-by-step previous year question papers solved",
      "Formula memory tricks & shortcut methods",
      "Special arrears backlog recovery batches",
      "Individual problem-solving attention"
    ],
    syllabus: [
      "M1: Matrices, Differential Calculus & Functions of Several Variables",
      "M2: Vector Calculus, Complex Integration & Laplace Transforms",
      "M3: Fourier Series, Boundary Value Problems & PDE",
      "M4: Probability, Statistics, Queueing Theory & Numerical Methods"
    ],
    regularPrice: "₹6,000",
    offerPrice: "₹4,500",
    popular: true
  },
  {
    id: "neet-crash",
    title: "NEET Crash Course",
    badge: "⚡ MARCH 26 – APRIL 30 BATCH",
    badgeColor: "bg-amber-500 text-navy-900",
    category: "Medical Entrance",
    iconName: "Stethoscope",
    summary: "High-intensity crash course specially engineered for NEET aspirants. Focus on high-yield biology, physics, and chemistry topics with daily practice tests.",
    modes: ["Offline Intensive", "Online Live"],
    highlights: [
      "Focused Discussion & Daily Question Analysis",
      "Rapid Revision of 11th & 12th Syllabus",
      "High-yielding topics strategy & shortcut hacks",
      "Individual Attention with limited batch size"
    ],
    syllabus: [
      "Physics: Mechanics, Electrodynamics, Modern Physics & Optics",
      "Chemistry: Organic Mechanisms, Chemical Kinetics & Coordination Chemistry",
      "Biology: Human Physiology, Genetics, Biotechnology & Ecology",
      "Full Length NEET Pattern Mock Tests with detailed analysis"
    ],
    regularPrice: "₹12,000",
    offerPrice: "₹8,999",
    popular: true
  },
  {
    id: "grade-12",
    title: "Class XII — Physics, Chemistry & Maths",
    badge: "💯 BOARD EXAM TOPPERS",
    badgeColor: "bg-blue-600 text-white",
    category: "Higher Secondary",
    iconName: "BookOpenCheck",
    summary: "Comprehensive tuition for 12th Grade students covering Physics, Chemistry, and Mathematics for CBSE, ISC, and Tamil Nadu Matriculation boards.",
    modes: ["Offline Evening Batch", "Online Live Interactive"],
    highlights: [
      "Full Board Syllabus coverage before revisions",
      "Physics numericals and derivation practice",
      "Organic Chemistry reaction mechanisms decoded",
      "Weekly mock tests & progress tracking for parents"
    ],
    syllabus: [
      "Maths: Calculus, Vectors, 3D Geometry & Matrices",
      "Physics: Electrostatics, Magnetism, AC Current & Ray Optics",
      "Chemistry: Electrochemistry, Kinetics, Coordination & Biomolecules"
    ],
    regularPrice: "₹15,000 / year",
    offerPrice: "₹11,999 / year",
    popular: false
  },
  {
    id: "grade-10",
    title: "Class X — Mathematics & Physics",
    badge: "🎯 FOUNDATION MASTER",
    badgeColor: "bg-emerald-600 text-white",
    category: "Secondary",
    iconName: "Sparkles",
    summary: "Strong foundation tuition for 10th Grade students in CBSE, ICSE, and Matriculation. Ensuring 100% conceptual clarity for board exams.",
    modes: ["Offline Evening Batch", "Online Live"],
    highlights: [
      "Concept building from scratch",
      "NCERT & Board exemplar question practice",
      "Speed & accuracy training for maths problems",
      "Regular unit tests with chapterwise feedback"
    ],
    syllabus: [
      "Maths: Quadratic Equations, Trigonometry, Statistics & Surface Areas",
      "Physics: Light Reflection & Refraction, Human Eye, Electricity & Magnetic Effects"
    ],
    regularPrice: "₹10,000 / year",
    offerPrice: "₹7,999 / year",
    popular: false
  },
  {
    id: "iit-prep",
    title: "IIT JEE Maths & Physics Special",
    badge: "🚀 ADVANCED PROBLEM SOLVING",
    badgeColor: "bg-purple-600 text-white",
    category: "Engineering Entrance",
    iconName: "Target",
    summary: "Targeted problem-solving sessions for JEE Main & Advanced aspirants with emphasis on complex analytical questions in Maths & Physics.",
    modes: ["Offline Batch", "Online Weekend Batch"],
    highlights: [
      "Advanced problem-solving methodologies",
      "Speed solving techniques for JEE Main & Advanced",
      "Previous 15 years JEE Main/Advanced question breakdown",
      "Personalized doubt clearing sessions"
    ],
    syllabus: [
      "Advanced Physics: Rotational Mechanics, Thermodynamics & Modern Physics",
      "Advanced Maths: Coordinate Geometry, Calculus & Complex Numbers"
    ],
    regularPrice: "₹18,000 / year",
    offerPrice: "₹14,500 / year",
    popular: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Karthik R.",
    role: "Engineering Student, Anna University",
    course: "Engineering Maths M1 & M2",
    score: "Cleared with O Grade!",
    text: "I was struggling with M1 backlogs, but RK Sir's simplified step-by-step problem-solving methods made it super easy. I passed M1 and M2 with top grades!",
    avatar: "👨‍🎓"
  },
  {
    id: 2,
    name: "Priya S.",
    role: "NEET 2025 Qualifier",
    course: "NEET Crash Course & Class XII Physics",
    score: "Physics 160/180 in NEET",
    text: "The NEET crash course at RK Academy Karur gave me the exact rapid revision and high-yielding topic list I needed. Individual attention made a huge difference!",
    avatar: "👩‍⚕️"
  },
  {
    id: 3,
    name: "Vignesh M.",
    role: "12th CBSE Topper",
    course: "Class 12 Physics & Maths",
    score: "97% in Centum Batch",
    text: "RK Academy provides the best coaching in Karur. Regular tests and personal doubt sessions built my confidence before board exams.",
    avatar: "👨‍🏫"
  }
];

export const FAQS = [
  {
    q: "Where is RK Academy Karur located?",
    a: "We are located at No.17, R.P. Muthu Plaza, Near Thinnappa Theatre, Karur - 1. It is easily accessible from all parts of Karur city."
  },
  {
    q: "What are the class timings?",
    a: "Our regular offline evening batches run from Monday to Saturday, 6:00 PM to 9:00 PM. Online classes offer flexible live sessions and 24/7 recorded lecture access."
  },
  {
    q: "How can I claim the 25% discount on Engineering Maths?",
    a: "You can click 'Claim 25% Offer' on our interactive fee calculator or contact us directly on WhatsApp (+91 97905 70707) mentioning code 'ENGG25'."
  },
  {
    q: "Are both Online and Offline classes available?",
    a: "Yes! All our courses—Grade 10, Grade 12, Engineering Maths (M1-M4), and NEET Crash Course—are available in both Offline (at Karur center) and Online live modes."
  },
  {
    q: "Who can enroll in the NEET Crash Course?",
    a: "Students appearing for the upcoming NEET exam (Class 12 students and repeaters). Registration is required as seat capacity is strictly capped for individual attention."
  }
];
