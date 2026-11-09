import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition duration-300 shadow-lg"
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="font-semibold text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}