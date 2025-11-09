import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-gradient ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 max-w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-primary tracking-wide">
              C
              <FontAwesomeIcon
                icon={faCog}
                className="text-primary inline-block mx-1"
                style={{
                  fontSize: "0.7em",
                  verticalAlign: "baseline",
                  lineHeight: "1",
                }}
              />
              DE<span className="text-accent">CRATZ</span>{" "}
              <span className="text-accent">'26</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 md:space-x-6">
              <img
                src="/1.png"
                alt="Agnel Polytechnic Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain logo-attractive hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/2.png"
                alt="Codecratz Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain logo-attractive hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/3.png"
                alt="Sponsor Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain logo-attractive hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              className="btn-gradient text-xs sm:text-sm px-3 sm:px-4"
              onClick={() =>
                window.open("https://forms.gle/DNR6vKFJuj1bSYkeA", "_blank")
              }
            >
              Register Now
            </Button>

            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>

              {/* Mobile Logos */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                <img
                  src="/1.png"
                  alt="Agnel Polytechnic Logo"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src="/2.png"
                  alt="Codecratz Logo"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src="/3.png"
                  alt="Sponsor Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
