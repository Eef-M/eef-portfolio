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
        ? "top-0 bg-white/40 backdrop-blur-md"
        : "mx-3 md:mx-12 rounded-lg bg-white/40 backdrop-blur-md py-2 md:py-3"
    }
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto md:px-8 px-0">
        <div className="flex justify-between items-center md:px-0 px-4">
          <div className="md:hidden text-xl font-bold text-eefAccent">
            efmkllno
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-2 rounded-md text-eefAccent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-32">
            <a
              href="#"
              className="text-eefPrimary hover:text-eefSecondary rounded-md p-2 font-medium transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-eefPrimary hover:text-eefSecondary rounded-md p-2 font-medium transition duration-300 ease-in-out"
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
              className="text-eefPrimary hover:text-eefSecondary rounded-md p-2 font-medium transition duration-300 ease-in-out"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-eefPrimary hover:text-eefSecondary rounded-md p-2 font-medium transition duration-300 ease-in-out"
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
              className="block px-3 py-2 text-eefLight font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-eefLight font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-eefLight font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-eefLight font-medium"
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
