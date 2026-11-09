import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 overflow-hidden">
      
      {/* Background Gradient Effect */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-10">
        
        {/* Left Side: Text and Buttons */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <p className="text-blue-400 font-semibold tracking-wide uppercase mb-2">Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I&apos;m <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Sumaya Akter
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mt-4 text-gray-300">
            Web Developer & CSE Graduate
          </h2>
          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I build modern, responsive, and user-friendly web applications. Passionate about learning new technologies and creating impactful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 text-center"
            >
              Download Resume
            </a>
            <Link
              href="#projects"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-center"
            >
              View Projects
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center md:justify-start gap-5">
            <a 
              href="https://github.com/SUMAYAAKTERDANA" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-white hover:bg-gray-700 border border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/30"
            >
              <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sumaya-akter-dana1" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-white hover:bg-blue-600 border border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl z-10">
              <Image
                src="/protfolio-image.png"
                alt="Sumaya Akter"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}