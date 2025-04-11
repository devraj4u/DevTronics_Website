
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
}

const latestArticles: Article[] = [
  {
    id: 1,
    title: "Understanding PWM Control for Motor Applications",
    excerpt: "Learn how to implement efficient PWM control for DC motors in your embedded systems projects.",
    image: "/placeholder.svg",
    category: "Motor Control",
    readTime: "8 min",
    date: "Apr 5, 2025"
  },
  {
    id: 2,
    title: "Getting Started with ESP32 Bluetooth Low Energy",
    excerpt: "A comprehensive guide to implementing BLE communication with ESP32 microcontrollers.",
    image: "/placeholder.svg",
    category: "Microcontrollers",
    readTime: "12 min",
    date: "Mar 28, 2025"
  },
  {
    id: 3,
    title: "PCB Design Tips for High-Speed Digital Circuits",
    excerpt: "Best practices for routing, grounding, and layer stackup to improve signal integrity.",
    image: "/placeholder.svg",
    category: "PCB Design",
    readTime: "10 min",
    date: "Mar 22, 2025"
  }
];

const LatestArticles = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue">Latest Articles</h2>
          <Button asChild variant="ghost" className="text-electric-blue">
            <Link to="/blog" className="flex items-center">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-electric-blue hover:bg-blue-600">
                  {article.category}
                </Badge>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime} read
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-2">
                <Button asChild variant="outline" className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
                  <Link to={`/blog/${article.id}`}>
                    Read Article
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
