
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Mock data for projects
const projectsList = [
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
  },
  {
    id: 4,
    title: "Bluetooth Audio Amplifier",
    description: "Build a high-quality audio amplifier with Bluetooth connectivity and digital signal processing.",
    image: "/placeholder.svg",
    category: "Audio",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    title: "DIY Oscilloscope",
    description: "Create a basic oscilloscope using a microcontroller and an LCD display for signal analysis.",
    image: "/placeholder.svg",
    category: "Test Equipment",
    difficulty: "Advanced"
  },
  {
    id: 6,
    title: "Smart Home Controller",
    description: "Design a central control hub for home automation using ESP32 and various sensors.",
    image: "/placeholder.svg",
    category: "IoT",
    difficulty: "Intermediate"
  },
];

const categories = [
  "All",
  "IoT",
  "Microcontrollers",
  "Power Electronics", 
  "Audio",
  "Test Equipment"
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

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

const Projects = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-circuit-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tech-gradient">Electronics Projects</h1>
            <p className="text-lg text-gray-700">
              Explore open-source electronics projects with complete documentation, schematics, and code.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-3/4 flex">
              <Input 
                placeholder="Search projects..." 
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
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">Filter By Category</h3>
                <TabsList className="flex flex-col w-full h-auto bg-transparent">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="justify-start mb-2 data-[state=active]:bg-blue-50 data-[state=active]:text-electric-blue"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <h3 className="font-semibold mb-4 mt-6">Filter By Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <div key={difficulty} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={difficulty} 
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-electric-blue focus:ring-electric-blue" 
                      />
                      <label htmlFor={difficulty} className="text-sm text-gray-700">
                        {difficulty}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-3/4">
                {categories.map((category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      {projectsList
                        .filter((project) => category === "All" || project.category === category)
                        .map((project) => (
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
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600">{project.description}</p>
                            </CardContent>
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
                  </TabsContent>
                ))}

                <div className="mt-12 flex justify-center">
                  <Button variant="outline" className="mx-1">1</Button>
                  <Button variant="outline" className="mx-1">2</Button>
                  <Button variant="outline" className="mx-1">3</Button>
                  <Button variant="outline" className="mx-1">...</Button>
                  <Button variant="outline" className="mx-1">Next</Button>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
