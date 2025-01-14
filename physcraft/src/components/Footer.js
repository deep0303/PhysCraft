import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Send,
  ArrowRight,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Classes", path: "/Classes" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Physics Tutoring",
    "Competitive Exam Prep",
    "Online Classes",
    "Batch Programs",
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Send className="mr-2 text-blue-400" />
            PhysCraft
          </h3>
          <p className="text-sm text-gray-300">
            Empowering students to excel in physics through innovative teaching
            methods and personalized learning strategies.
          </p>

          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="mr-2 text-white-400 w-5 h-5" />
              <a
                href="tel:+918750038755"
                className="text-white hover:text-blue-300"
              >
                +91 87500 38755
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-green-400 w-5 h-5" />
              <a
                href="mailto:Physcraft2050@gmail.com"
                className="text-white hover:text-green-300"
              >
                Physcraft2050@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition flex items-center"
                >
                  <ArrowRight className="mr-2 w-4 h-4 text-blue-400" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {services.map((service) => (
              <li
                key={service}
                className="text-gray-300 flex items-center hover:text-white transition"
              >
                <ArrowRight className="mr-2 w-4 h-4 text-blue-400" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>

          {/* Newsletter Signup */}
          <div className="mb-6">
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter for latest updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 transition">
                Send
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/phys.craft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@PhysCraft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/phys-craft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/phys.craft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © {currentYear} PhysCraft Tutors. All Rights Reserved.
          <span className="ml-4 text-xs">
            Designed with <span className="text-red-500">❤</span> for Physics
            Lovers
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
