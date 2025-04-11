
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  CircuitBoard, 
  Code, 
  GraduationCap,
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Send
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* About Hero Section */}
      <section className="py-16 md:py-20 bg-circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 tech-gradient">About Me</h1>
            <p className="text-xl text-gray-700 mb-8">
              Electronics Engineer & Educator
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-100 h-80 rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-deep-blue">Hello, I'm <span className="text-electric-blue">Your Name</span></h2>
              <p className="text-gray-700 mb-4">
                I'm an electronics engineer with over X years of experience in designing circuits, embedded systems,
                and IoT solutions. My passion lies in creating innovative electronic devices and sharing knowledge
                with fellow engineers and enthusiasts.
              </p>
              <p className="text-gray-700 mb-6">
                Through this website, I aim to provide valuable resources, tutorials, and tools that help
                electronics professionals and hobbyists alike. I believe in open-source principles and the
                power of knowledge sharing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-electric-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-gray-600">Master's in Electronics Engineering</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-electric-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-gray-600">X+ Years in Electronics Design</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CircuitBoard className="h-5 w-5 text-electric-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Expertise</h3>
                    <p className="text-gray-600">Embedded Systems, IoT, PCB Design</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="h-5 w-5 text-electric-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Programming</h3>
                    <p className="text-gray-600">C/C++, Python, VHDL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-deep-blue">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm circuit-card">
              <h3 className="font-bold text-lg mb-4">Hardware Design</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">PCB Design</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "90%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Circuit Analysis</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Signal Integrity</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm circuit-card">
              <h3 className="font-bold text-lg mb-4">Software Development</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Embedded C/C++</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "95%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "80%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">VHDL/Verilog</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "75%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm circuit-card">
              <h3 className="font-bold text-lg mb-4">System Integration</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">IoT Systems</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "90%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">System Architecture</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Wireless Protocols</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-deep-blue">Get In Touch</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">City, Country</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 234 567 890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MessageSquare className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <div className="flex space-x-2 mt-2">
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-deep-blue hover:bg-electric-blue hover:text-white transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-deep-blue hover:bg-electric-blue hover:text-white transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-deep-blue hover:bg-electric-blue hover:text-white transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.22 5.92c-.09-1.9-1.46-3.52-3.37-3.67H5.1c-1.9.15-3.27 1.77-3.36 3.67v12.15c.09 1.9 1.46 3.53 3.36 3.67h13.75c1.9-.15 3.28-1.77 3.37-3.67V5.92zm-6.28 7.05l-4.33 2.15c-.22.1-.45-.05-.45-.3v-4.28c0-.24.23-.4.45-.3l4.33 2.13c.26.13.26.48 0 .6z"/></svg>
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-deep-blue hover:bg-electric-blue hover:text-white transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.223 0h.002z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input 
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-electric-blue hover:bg-deep-blue"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4 mr-2" /> {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
