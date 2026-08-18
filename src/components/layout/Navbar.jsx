function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Branding */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-400"
        >
          Konke<span className="text-white">Tech</span>
        </a>

        {/* Navigation */}
        <ul className="flex gap-8 text-slate-300">

          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Networking
            </a>
          </li>

          <li>
            <a
              href="#machine-learning"
              className="hover:text-blue-400 transition"
            >
              Machine Learning
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-blue-400 transition"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;