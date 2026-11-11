import Link from "next/link";
import Image from "next/image";

const projects = [
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

type ProjectType = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
};

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id);
  
  const project = projects.find((p: ProjectType) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-3xl">Project not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/#projects" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 font-semibold">
          <span className="mr-2">←</span> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{project.subtitle}</p>

        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 border border-gray-700 shadow-2xl">
          
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Project Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Challenges Faced</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.challenges}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Future Improvements</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.improvements}</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 h-fit space-y-6">
            <div>
              <h3 className="font-bold text-white mb-2 text-lg">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string, i: number) => (
                  <span key={i} className="text-sm bg-gray-900 text-blue-400 px-3 py-1 rounded-full border border-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2 text-lg">Project Links</h3>
              <div className="flex flex-col gap-3">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded transition">
                  Live Demo
                </a>
                {project.githubLink !== "#" && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded transition">
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}