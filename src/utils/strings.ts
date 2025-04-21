export const AUTH_STRINGS = {
  APP_NAME: "Traya.",
  TAGLINE: "Hair Loss Solution Backed by Science",
  LOGIN_SIGNUP: "Log in or Sign up",
  MOBILE_PLACEHOLDER: "Mobile number",
  COUNTRY_CODE: "+91",
  GET_OTP: "Get OTP",
  SENDING: "Sending...",
  TERMS_TEXT:
    "By proceeding, you consent to share your information with Traya and agree to Traya's",
  PRIVACY_POLICY: "Privacy Policy",
  TERMS_OF_SERVICE: "Terms of Service",
  AND: "and",

  // OTP Verification Screen
  VERIFY_OTP: "Verify OTP",
  NEED_HELP: "Need Help?",
  ENTER_OTP_PROMPT: "Enter the OTP we've sent to",
  VERIFY_OTP_BUTTON: "VERIFY OTP",
  DIDNT_RECEIVE_OTP: "Didn't receive OTP?",
  GET_ON_WHATSAPP: "Get it on Whatsapp",
  GET_ON_WHATSAPP_TIMER: "Get it on Whatsapp in",
};

export const HOME_STRINGS = {
  // Hero Section
  HERO_TITLE: "Know The Root Cause Of Your Hair Loss",
  HERO_SUBTITLE: "93% saw results* in 5 months",
  HERO_BUTTON: "Complete The Hair Test™",

  // Section Titles
  TRAYA_HEROES: "Traya Heroes",
  CAUSES_TITLE: "What Causes Hair Loss?",
  CAUSES_DESCRIPTION:
    "Hair loss reasons are internal and external. Traya helps treat these so you can achieve your desired hair goals.",
  HOW_TRAYA_WORKS: "How Traya Works",
  NEED_HELP: "Need Help?",
  MEET_DOCTORS: "Meet Our Team Of Doctors",
  REVIEWS_TITLE: "Google Reviews & Ratings",

  // Causes
  NUTRIENT_DEFICIENCY: "Nutrient Deficiency",
  STRESS_SLEEP: "Stress & Sleep",
  GENETICS: "Genetics",

  // Steps
  STEP_1_TITLE: "Take The Hair Test",
  STEP_1_DESCRIPTION:
    "An online test that determines the root cause of your hair loss",

  // Ratings
  RATING_NUMBER: "4.6",
  RATING_COUNT: "6272 ratings",

  // CTA
  FINAL_CTA: "Complete The Hair Test™",
};

export const PROFILE_STRINGS = {
  // Profile Header
  EDIT_PROFILE: "Edit Profile",

  // Root Cause Card
  ROOT_CAUSE_TITLE: "Finding the root cause",
  ROOT_CAUSE_DESCRIPTION: "is a key to finding the right treatment for you.",
  TAKE_HAIR_TEST: "Take The Hair Test",
  COMPLETE_HAIR_TEST: "Complete The Hair Test",

  // Action Cards
  HAIR_PROGRESS: "Hair Progress",
  HELP_SUPPORT: "Help & Support",
  CHAT_WITH_US: "Chat With Us",

  // Menu Items
  ALL_PRODUCTS: "All Products",
  TERMS_POLICIES: "Terms & Policies",
  READ_MORE: "Read More",
  LOGOUT: "Logout",

  // App Version
  VERSION: "Version 1.0.0",
};

export const TEST_STRINGS = {
  // Test Screen
  LOADING: "Loading your test...",
  SAVING: "Saving your progress...",
  RETRY: "Retry",

  // Test Completion
  TEST_COMPLETED: "Test Completed!",
  ANALYZING_RESULTS: "Analyzing your results...",

  // Error Messages
  ERROR_LOADING: "Error loading test data",
  ERROR_SAVING: "Error saving your progress",
};

// Question data moved to constants
export const TEST_QUESTIONS = [
  {
    id: "q1",
    title: "Which image best describes your hair loss?",
    type: "image-select",
    category: "HAIR LOSS",
    icon: "leaf-outline",
    options: [
      {
        id: "stage1",
        text: "Stage 1",
        imageUrl: "https://picsum.photos/200/300?random=1",
      },
      {
        id: "stage2",
        text: "Stage 2",
        imageUrl: "https://picsum.photos/200/300?random=2",
      },
      {
        id: "stage3",
        text: "Stage 3",
        imageUrl: "https://picsum.photos/200/300?random=3",
      },
      {
        id: "stage4",
        text: "Stage 4",
        imageUrl: "https://picsum.photos/200/300?random=4",
      },
      {
        id: "stage5",
        text: "Stage 5",
        imageUrl: "https://picsum.photos/200/300?random=5",
      },
    ],
  },
  {
    id: "q2",
    title: "How long have you been experiencing hair loss?",
    type: "radio",
    category: "TIMELINE",
    icon: "time-outline",
    options: [
      {id: "less6", text: "Less than 6 months"},
      {id: "6to12", text: "6-12 months"},
      {id: "1to3", text: "1-3 years"},
      {id: "3to5", text: "3-5 years"},
      {id: "more5", text: "More than 5 years"},
    ],
  },
  {
    id: "q3",
    title: "Do you have a family history of hair loss?",
    type: "radio",
    category: "GENETICS",
    icon: "people-outline",
    options: [
      {id: "yes-father", text: "Yes, from father's side"},
      {id: "yes-mother", text: "Yes, from mother's side"},
      {id: "yes-both", text: "Yes, from both sides"},
      {id: "no", text: "No"},
      {id: "not-sure", text: "Not sure"},
    ],
  },
  {
    id: "q4",
    title: "How would you describe your stress levels?",
    type: "radio",
    category: "LIFESTYLE",
    icon: "pulse-outline",
    options: [
      {id: "low", text: "Low - I rarely feel stressed"},
      {id: "moderate", text: "Moderate - I feel stressed occasionally"},
      {id: "high", text: "High - I feel stressed most days"},
      {id: "very-high", text: "Very high - I'm constantly stressed"},
    ],
  },
  {
    id: "q5",
    title: "How many hours of sleep do you get on average?",
    type: "radio",
    category: "SLEEP",
    icon: "moon-outline",
    options: [
      {id: "less5", text: "Less than 5 hours"},
      {id: "5to6", text: "5-6 hours"},
      {id: "7to8", text: "7-8 hours"},
      {id: "more8", text: "More than 8 hours"},
    ],
  },
  {
    id: "q6",
    title: "How would you describe your diet?",
    type: "radio",
    category: "NUTRITION",
    icon: "nutrition-outline",
    options: [
      {id: "veg", text: "Vegetarian"},
      {id: "vegan", text: "Vegan"},
      {id: "non-veg", text: "Non-vegetarian"},
      {id: "mixed", text: "Mixed diet"},
    ],
  },
  {
    id: "q7",
    title: "Have you tried any hair loss treatments before?",
    type: "radio",
    category: "TREATMENT HISTORY",
    icon: "medical-outline",
    options: [
      {id: "no", text: "No, this is my first time"},
      {id: "minoxidil", text: "Yes, Minoxidil (Rogaine)"},
      {id: "finasteride", text: "Yes, Finasteride (Propecia)"},
      {id: "natural", text: "Yes, natural remedies"},
      {id: "multiple", text: "Yes, multiple treatments"},
    ],
  },
  {
    id: "q8",
    title: "Do you have any scalp conditions?",
    type: "radio",
    category: "SCALP HEALTH",
    icon: "fitness-outline",
    options: [
      {id: "none", text: "None"},
      {id: "dandruff", text: "Dandruff"},
      {id: "itchy", text: "Itchy scalp"},
      {id: "oily", text: "Oily scalp"},
      {id: "dry", text: "Dry scalp"},
      {id: "psoriasis", text: "Psoriasis or eczema"},
    ],
  },
  {
    id: "q9",
    title: "How often do you wash your hair?",
    type: "radio",
    category: "HAIR CARE",
    icon: "water-outline",
    options: [
      {id: "daily", text: "Daily"},
      {id: "alternate", text: "Every other day"},
      {id: "twice", text: "Twice a week"},
      {id: "once", text: "Once a week"},
      {id: "less", text: "Less than once a week"},
    ],
  },
  {
    id: "q10",
    title: "What is your primary goal for hair treatment?",
    type: "radio",
    category: "GOALS",
    icon: "trophy-outline",
    options: [
      {id: "stop", text: "Stop further hair loss"},
      {id: "regrow", text: "Regrow lost hair"},
      {id: "thickness", text: "Improve hair thickness"},
      {id: "health", text: "Improve overall hair health"},
      {id: "all", text: "All of the above"},
    ],
  },
];

export const RESULTS_STRINGS = {
  // Results Header
  GREETING: "Hi",
  ANALYSIS_READY: "Your hair analysis is ready!",

  // Report Card
  ASSESSMENT_REPORT: "Assessment Report",
  DIAGNOSED_WITH: "You are diagnosed with",
  REGROWTH_POSSIBLE: "Regrowth Possible!",
  STAGE: "Stage -",

  // Treatment
  TREATMENT_DURATION: "Treatment duration:",
  MONTHS: "months",

  // Root Causes
  ROOT_CAUSES: "Root Causes",

  // Video
  VIDEO_DURATION: "1:22 min",
  VIDEO_TITLE: "Why will this plan work for me?",

  // Pricing
  PLAN_LABEL: "For your 1 month plan:",
  INCLUSIVE_TAXES: "Inclusive of all taxes",
  BUY_NOW: "BUY NOW",
};

// Mock data for test results
export const MOCK_TEST_RESULTS = {
  name: "Terence Dsouza",
  diagnosis: "Stage-1 male pattern hair loss",
  stage: 1,
  regrowthPossible: true,
  treatmentDuration: 5,
  rootCauses: [
    {id: "stress", name: "Stress", icon: "pulse-outline"},
    {id: "sleep", name: "Sleep", icon: "moon-outline"},
    {id: "genetics", name: "Genetics", icon: "git-branch-outline"},
    {id: "digestion", name: "Digestion", icon: "nutrition-outline"},
  ],
  planPrice: 2570,
};

export const VIDEOS_STRINGS = {
  // Screen Title
  INSIGHTS: "Insights",

  // Section Titles
  CUSTOMER_TESTIMONIALS: "Customer Testimonials",
  ABOUT_TREATMENT: "More About Your Treatment",
  HAIR_CARE_TIPS: "Hair Care Tips",
  NUTRITION_TIPS: "Simple Nutrition Tips",
  HEALTH_HACKS: "Health Hacks",

  // Video Player
  LOADING: "Loading video...",
  ERROR: "Error loading video",
  RETRY: "Retry",
  RELATED_VIDEOS: "Related Videos",
  SHARE: "Share",
  LIKE: "Like",
  SAVE: "Save",
  COMMENTS: "Comments",
  NO_COMMENTS: "No comments yet",
  ADD_COMMENT: "Add a comment...",
  POST: "Post",
};
