
import { Link } from "react-router-dom";
import { CircuitBoard, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CircuitBoard className="h-8 w-8 text-electric-blue" />
              <span className="font-bold text-xl">Circuit<span className="text-electric-blue">Scribe</span></span>
            </Link>
            <p className="text-gray-300 mb-4">
              Sharing electronics knowledge, projects, and tools for engineers and enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-electric-blue">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-electric-blue">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-300 hover:text-electric-blue">
                <Github size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-electric-blue">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-electric-blue">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-electric-blue">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-electric-blue">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-electric-blue">Blog</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-electric-blue">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-electric-blue">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/category/microcontrollers" className="text-gray-300 hover:text-electric-blue">Microcontrollers</Link>
              </li>
              <li>
                <Link to="/blog/category/iot" className="text-gray-300 hover:text-electric-blue">IoT</Link>
              </li>
              <li>
                <Link to="/blog/category/pcb-design" className="text-gray-300 hover:text-electric-blue">PCB Design</Link>
              </li>
              <li>
                <Link to="/blog/category/power-electronics" className="text-gray-300 hover:text-electric-blue">Power Electronics</Link>
              </li>
              <li>
                <Link to="/blog/category/embedded-systems" className="text-gray-300 hover:text-electric-blue">Embedded Systems</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new projects, blog posts, and products.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-electric-blue hover:bg-blue-600 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CircuitScribe. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
