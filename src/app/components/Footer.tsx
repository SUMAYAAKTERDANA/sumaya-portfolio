export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 text-center border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Sumaya Akter. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}