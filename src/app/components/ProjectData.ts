export const projects = [
  {
    id: 1,
    title: "Bazar-dor",
    subtitle: "Daily Market Price Tracker",
    image: "/bazardor.png", 
    description: "A web application that tracks daily market prices of essential goods in Bangladesh, allowing users to compare today's prices with previous days and view price trends.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    liveLink: "https://bazardor-online-grocery-store-1.vercel.app/",
    githubLink: "https://github.com/SUMAYAAKTERDANA/Bazar-dor",
    challenges: "Handling real-time data updates and ensuring the app remains fast while fetching large amounts of market data. Implementing secure authentication with BetterAuth was also a learning curve.",
    improvements: "Plan to add a mobile app version, integrate a map to show local market locations, and implement a feature for users to add missing products manually."
  },
  {
    id: 2,
    title: "Fit-flow",
    subtitle: "Fitness Tracking Application",
    image: "/fitflog.png", 
    tech: ["React", "TypeScript", "Tailwind CSS"],
    description: "A modern fitness tracking application designed to help users manage their workouts, track their progress, and stay motivated towards their fitness goals.",
    liveLink: "https://fit-flow-gamma-seven.vercel.app/",
    githubLink: "https://github.com/SUMAYAAKTERDANA/fit-flow",
    challenges: "Creating a responsive dashboard that looks good on both mobile and desktop. Managing complex state for different workout routines was the biggest challenge.",
    improvements: "Future updates will include a community feed where users can share their progress, integration with wearable devices (like smartwatches), and personalized AI diet plans."
  },
  {
    id: 3,
    title: "MINDGUARD",
    subtitle: "AI-Powered Smart Assistant",
    image: "/mangrad.png", 
    tech: ["Machine Learning", "AI", "IoT"],
    description: "An AI + IoT based smartwatch platform for Alzheimer's patients using Voice Recognition (MFCC + CNN) to help patients recognize family members and alert caregivers.",
    liveLink: "https://ijcaonline.org/archives/volume187/number86/mindguard-an-ai-powered-smart-assistant-for-alzheimers-patients-using-voice-and-activity-recognition/",
    githubLink: "#",
    challenges: "Training the CNN model with a limited dataset of voice samples. Integrating IoT sensors with the AI model in real-time without latency was technically demanding.",
    improvements: "The next step is to deploy the model on edge devices (smartwatches) for offline processing, improve the dataset size for higher accuracy, and add a fall-detection feature."
  }
];