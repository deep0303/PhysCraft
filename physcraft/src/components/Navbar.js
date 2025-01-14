import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Book, Award, Send } from "lucide-react";

const NAV_LINKS = [
  { path: "/home", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: Book },
  { path: "/classes", label: "Classes", icon: Book },
  { path: "/apply", label: "Apply", icon: Send },
  { path: "/achievements", label: "Achievements", icon: Award },
];

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (path) =>
    location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 transition-all duration-200";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Redirect to home if current path is root
  React.useEffect(() => {
    if (location.pathname === '/') {
      window.location.href = '/home';
    }
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Home Link */}
          <Link
            to="/home"
            className="text-2xl font-bold text-gray-800 flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200"
          >
            <span className="text-blue-600">
              <Book className="w-8 h-8" />
            </span>
            <span>PhysCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-4 px-2 font-medium flex items-center space-x-1 ${isActiveLink(link.path)}`}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden transition-opacity duration-200"
          onClick={closeMobileMenu}
        >
          <div
            className="bg-white w-72 h-full absolute right-0 shadow-lg transform transition-transform duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="border-b border-gray-200 p-4">
              <Link 
                to="/home"
                className="flex items-center space-x-2"
                onClick={closeMobileMenu}
              >
                <Book className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-800">PhysCraft</span>
              </Link>
            </div>
            
            {/* Mobile Menu Links */}
            <div className="p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  } transition-colors duration-200`}
                  onClick={closeMobileMenu}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;