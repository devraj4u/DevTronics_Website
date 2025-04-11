
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-circuit-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tech-gradient">
            Electronics Engineering & Innovation Hub
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover innovative electronics projects, in-depth tutorials, 
            and professional-grade plugins to supercharge your engineering work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              className="bg-electric-blue hover:bg-deep-blue text-white px-8 py-6 rounded-md text-lg"
            >
              <Link to="/projects">
                Explore Projects
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-6 rounded-md text-lg"
            >
              <Link to="/shop">
                Browse Shop
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-6 md:p-8 text-center">
              <h3 className="font-semibold text-lg mb-2 text-deep-blue">Electronics Projects</h3>
              <p className="text-gray-600 mb-4">Browse open-source electronics designs and implementations</p>
              <Button asChild variant="ghost" size="sm" className="text-electric-blue">
                <Link to="/projects" className="flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="p-6 md:p-8 text-center">
              <h3 className="font-semibold text-lg mb-2 text-deep-blue">Technical Blog</h3>
              <p className="text-gray-600 mb-4">Read in-depth tutorials and electronics engineering insights</p>
              <Button asChild variant="ghost" size="sm" className="text-electric-blue">
                <Link to="/blog" className="flex items-center">
                  Read Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="p-6 md:p-8 text-center">
              <h3 className="font-semibold text-lg mb-2 text-deep-blue">Engineering Tools</h3>
              <p className="text-gray-600 mb-4">Shop high-quality plugins and tools for your projects</p>
              <Button asChild variant="ghost" size="sm" className="text-electric-blue">
                <Link to="/shop" className="flex items-center">
                  Visit Shop <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
