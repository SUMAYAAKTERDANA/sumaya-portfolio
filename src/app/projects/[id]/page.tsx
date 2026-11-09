import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/components/ProjectData";


export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id);
  
  const project = projects.find((p) => p.id === projectId);

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
        
        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 font-semibold">
          <span className="mr-2">←</span> Back to Home
        </Link>

        {/* Project Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{project.subtitle}</p>

        {/* Project Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 border border-gray-700 shadow-2xl">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        {/* Project Details Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Main Content (Left Side) */}
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

          {/* Sidebar (Right Side) */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 h-fit space-y-6">
            <div>
              <h3 className="font-bold text-white mb-2 text-lg">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
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