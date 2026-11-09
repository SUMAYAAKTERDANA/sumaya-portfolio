import { FaGraduationCap, FaLaptopCode, FaQuran, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Journey Text */}
          <div className="lg:w-3/5 bg-gray-800/40 p-8 md:p-10 rounded-3xl border border-gray-700 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-blue-500">My</span> Journey
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hello! I&apos;m <span className="text-white font-semibold">Sumaya Akter</span>, a recent Computer Science and Engineering graduate from Manarat International University. My journey into programming started with a simple curiosity about how websites work, which quickly turned into a deep passion for building them.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I specialize in frontend development, focusing on creating clean, responsive, and user-friendly interfaces using <span className="text-blue-400 font-semibold">React, Next.js, and Tailwind CSS</span>. I am constantly sharpening my skills through the Full Stack Web Engineering course at Programming Hero.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Outside of coding, I am a certified Quran teacher (A+ Grade) and enjoy helping others learn. I am a fast learner, a problem solver, and always eager to take on new challenges.
            </p>

            {/* Key Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 border-t border-gray-700 pt-6">
              <div className="flex items-center gap-3 text-gray-300">
                <FaCheckCircle className="text-blue-500" /> Fast Learner & Adaptable
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCheckCircle className="text-blue-500" /> Strong Problem Solver
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCheckCircle className="text-blue-500" /> Team Player & Communicator
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCheckCircle className="text-blue-500" /> Passionate about UI/UX
              </div>
            </div>
          </div>

          {/* Right Side: Quick Info Cards */}
          <div className="lg:w-2/5 space-y-6 w-full">
            
            {/* Card 1: Education */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 flex items-start gap-5 shadow-lg">
              <div className="bg-blue-500/20 p-4 rounded-full text-blue-500 text-2xl">
                <FaGraduationCap />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Education</h4>
                <p className="text-gray-300 mt-1">B.Sc in Computer Science & Engineering</p>
                <p className="text-sm text-gray-500 mt-1">Manarat International University</p>
              </div>
            </div>

            {/* Card 2: Current Status */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 flex items-start gap-5 shadow-lg">
              <div className="bg-purple-500/20 p-4 rounded-full text-purple-400 text-2xl">
                <FaLaptopCode />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Current Focus</h4>
                <p className="text-gray-300 mt-1">Full Stack Web Engineering</p>
                <p className="text-sm text-gray-500 mt-1">Programming Hero (Ongoing)</p>
              </div>
            </div>

            {/* Card 3: Extra Skill */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 flex items-start gap-5 shadow-lg">
              <div className="bg-green-500/20 p-4 rounded-full text-green-400 text-2xl">
                <FaQuran />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Certification</h4>
                <p className="text-gray-300 mt-1">Muallim Training Certificate</p>
                <p className="text-sm text-gray-500 mt-1">Ta&apos;leemul Quran Foundation (A+ Grade)</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}