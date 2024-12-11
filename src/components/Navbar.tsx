import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-eefLight shadow-sm border border-eefDark rounded-md mx-3 md:mx-12">
      <div className="max-w-7xl mx-auto md:px-8 px-0">
        <div className="flex justify-between h-16 items-center md:px-0 px-4">
          <div className="md:hidden text-xl font-bold text-eefPrimary">
            efmkllno
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-32">
            <a
              href="#"
              className="text-eefDark hover:text-eefPrimary rounded-md p-2 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-eefDark hover:text-eefPrimary rounded-md p-2 font-medium"
            >
              Projects
            </a>
          </div>

          {/* Logo/Brand */}
          <div className="hidden md:flex text-2xl font-bold text-eefPrimary">
            EEF MEKELLIANO
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex space-x-32">
            <a
              href="#"
              className="text-eefDark hover:text-eefPrimary rounded-md p-2 font-medium"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-eefDark hover:text-eefPrimary rounded-md p-2 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 text-eefDark hover:bg-eefSecondary font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-eefDark hover:bg-eefSecondary font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-eefDark hover:bg-eefSecondary font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-eefDark hover:bg-eefSecondary font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
