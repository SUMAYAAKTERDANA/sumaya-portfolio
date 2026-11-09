import Image from "next/image";
import Link from "next/link";
import { projects } from "./ProjectData"; 
export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-800 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col group">
              
              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <h4 className="text-sm text-blue-400 font-medium mb-4">{project.subtitle}</h4>
                <p className="text-gray-400 mb-6 grow">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href={project.liveLink} 
                    target="_blank" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition text-center w-full"
                  >
                    Live Link
                  </Link>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-2 px-4 rounded transition text-center w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}