import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-950/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="#home" className="text-2xl font-bold tracking-wider text-white">
              Sumaya<span className="text-blue-500">.</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#home" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">Home</Link>
            <Link href="#about" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">About</Link>
            <Link href="#skills" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">Skills</Link>
            <Link href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">Projects</Link>
            <Link href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">Contact</Link>
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}