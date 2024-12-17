import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out
    ${
      isScrolled
        ? "top-0 bg-eefLight/70"
        : "mx-3 md:mx-12 rounded-md bg-eefLight border border-eefDark py-2 md:py-3"
    }
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto md:px-8 px-0">
        <div className="flex justify-between items-center md:px-0 px-4">
          <div className="md:hidden text-xl font-bold text-eefPrimary">
            efmkllno
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-2 rounded-md text-gray-600 hover:text-gray-900"
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
              href="#projects"
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
              href="#skills"
              className="text-eefDark hover:text-eefPrimary rounded-md p-2 font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
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
