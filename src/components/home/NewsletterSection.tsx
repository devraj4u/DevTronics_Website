
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      toast.success("Thanks for subscribing!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-12 md:py-16 bg-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Electronics Innovations</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for the latest tutorials, projects, and product updates.
            No spam, just valuable content for electronics enthusiasts.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 text-white border-gray-600 focus-visible:ring-electric-blue"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-electric-blue hover:bg-blue-600 text-white"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
