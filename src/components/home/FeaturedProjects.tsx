
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "IoT Environmental Monitor",
    description: "Build a WiFi-connected environmental monitoring system with temperature, humidity, and air quality sensors.",
    image: "/placeholder.svg",
    category: "IoT",
    difficulty: "Intermediate"
  },
  {
    id: 2,
    title: "Programmable LED Matrix",
    description: "Create a customizable LED matrix controlled by a microcontroller with various animation patterns.",
    image: "/placeholder.svg",
    category: "Microcontrollers",
    difficulty: "Beginner"
  },
  {
    id: 3,
    title: "Solar-Powered Battery Charger",
    description: "Design an efficient solar charging circuit for rechargeable batteries with overcurrent protection.",
    image: "/placeholder.svg",
    category: "Power Electronics",
    difficulty: "Advanced"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const FeaturedProjects = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue">Featured Projects</h2>
          <Button asChild variant="ghost" className="text-electric-blue">
            <Link to="/projects" className="flex items-center">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="circuit-card flex flex-col h-full">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {project.category}
                  </Badge>
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-2">
                <Button asChild className="w-full bg-electric-blue hover:bg-deep-blue">
                  <Link to={`/projects/${project.id}`}>
                    View Project
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

export default FeaturedProjects;
