
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Clock, Search } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding PWM Control for Motor Applications",
    excerpt: "Learn how to implement efficient PWM control for DC motors in your embedded systems projects.",
    image: "/placeholder.svg",
    category: "Motor Control",
    readTime: "8 min",
    date: "Apr 5, 2025",
  },
  {
    id: 2,
    title: "Getting Started with ESP32 Bluetooth Low Energy",
    excerpt: "A comprehensive guide to implementing BLE communication with ESP32 microcontrollers.",
    image: "/placeholder.svg",
    category: "Microcontrollers",
    readTime: "12 min",
    date: "Mar 28, 2025",
  },
  {
    id: 3,
    title: "PCB Design Tips for High-Speed Digital Circuits",
    excerpt: "Best practices for routing, grounding, and layer stackup to improve signal integrity.",
    image: "/placeholder.svg",
    category: "PCB Design",
    readTime: "10 min",
    date: "Mar 22, 2025",
  },
  {
    id: 4,
    title: "Power Supply Design for Embedded Systems",
    excerpt: "Learn how to design reliable power supplies for your embedded systems with proper filtering and protection.",
    image: "/placeholder.svg",
    category: "Power Electronics",
    readTime: "15 min",
    date: "Mar 15, 2025",
  },
  {
    id: 5,
    title: "Introduction to FPGA Development for Beginners",
    excerpt: "Get started with FPGA programming and learn how to implement digital circuits using hardware description languages.",
    image: "/placeholder.svg",
    category: "FPGA",
    readTime: "18 min",
    date: "Mar 10, 2025",
  },
  {
    id: 6,
    title: "Implementing Sensor Fusion Algorithms",
    excerpt: "How to combine data from multiple sensors for more accurate measurements in IoT applications.",
    image: "/placeholder.svg",
    category: "IoT",
    readTime: "14 min",
    date: "Mar 5, 2025",
  },
];

const categories = [
  "All",
  "Microcontrollers",
  "Power Electronics",
  "IoT", 
  "PCB Design",
  "FPGA",
  "Motor Control"
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-circuit-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tech-gradient">Electronics Engineering Blog</h1>
            <p className="text-lg text-gray-700">
              In-depth articles, tutorials and insights about electronics engineering, embedded systems, and circuit design.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-3/4 flex">
              <Input 
                placeholder="Search articles..." 
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" 
              />
              <Button className="rounded-l-none bg-electric-blue hover:bg-deep-blue">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="w-full md:w-1/4">
              <select 
                className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm"
                defaultValue="latest"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          <Tabs defaultValue="All">
            <TabsList className="mb-8 flex w-full overflow-x-auto pb-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="min-w-max">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter((post) => category === "All" || post.category === category)
                    .map((post) => (
                      <Card key={post.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="h-48 w-full overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                          />
                        </div>
                        <CardHeader>
                          <Badge className="w-fit mb-2 bg-electric-blue hover:bg-blue-600">
                            {post.category}
                          </Badge>
                          <CardTitle className="text-xl">{post.title}</CardTitle>
                          <div className="flex items-center text-sm text-gray-500 mt-2">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime} read
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="mt-auto pt-2">
                          <Button asChild variant="outline" className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
                            <Link to={`/blog/${post.id}`}>
                              Read Article
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mx-1">1</Button>
            <Button variant="outline" className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
            <Button variant="outline" className="mx-1">...</Button>
            <Button variant="outline" className="mx-1">Next</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
