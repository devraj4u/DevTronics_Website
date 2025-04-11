
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Star } from "lucide-react";

// Mock data for products
const productsList = [
  {
    id: 1,
    name: "Circuit Simulator Pro Plugin",
    description: "Advanced circuit simulation plugin with real-time analysis and component library.",
    price: 49.99,
    image: "/placeholder.svg",
    rating: 4.8,
    category: "Plugins",
    isNew: true
  },
  {
    id: 2,
    name: "PCB Layout Assistant",
    description: "Automated PCB layout optimization tool for complex circuit designs.",
    price: 39.99,
    image: "/placeholder.svg",
    rating: 4.5,
    category: "Plugins"
  },
  {
    id: 3,
    name: "Microcontroller Code Generator",
    description: "Generate optimized code templates for various microcontroller platforms.",
    price: 29.99,
    image: "/placeholder.svg",
    rating: 4.7,
    category: "Plugins"
  },
  {
    id: 4,
    name: "Electronics Project E-book Bundle",
    description: "Collection of 10 e-books with step-by-step electronics projects and tutorials.",
    price: 24.99,
    image: "/placeholder.svg",
    rating: 4.6,
    category: "E-books"
  },
  {
    id: 5,
    name: "IoT Sensor Data Analyzer",
    description: "Tool for processing and visualizing data from various IoT sensors and devices.",
    price: 34.99,
    image: "/placeholder.svg",
    rating: 4.4,
    category: "Plugins"
  },
  {
    id: 6,
    name: "Component Library for EAGLE",
    description: "Extensive library of components for EAGLE PCB design software.",
    price: 19.99,
    image: "/placeholder.svg",
    rating: 4.9,
    category: "Libraries"
  },
];

const categories = [
  "All",
  "Plugins",
  "Libraries",
  "E-books",
  "Templates"
];

const priceRanges = [
  "All Prices",
  "Under $20",
  "$20 - $50",
  "Over $50"
];

const Shop = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-circuit-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tech-gradient">Electronics Engineering Shop</h1>
            <p className="text-lg text-gray-700">
              High-quality plugins, tools, and resources for electronics engineers and enthusiasts.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-3/4 flex">
              <Input 
                placeholder="Search products..." 
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" 
              />
              <Button className="rounded-l-none bg-electric-blue hover:bg-deep-blue">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="w-full md:w-1/4">
              <select 
                className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm"
                defaultValue="popular"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <Tabs defaultValue="All">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">Categories</h3>
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

                <h3 className="font-semibold mb-4 mt-6">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range} className="flex items-center">
                      <input 
                        type="radio" 
                        id={range} 
                        name="price-range"
                        className="mr-2 h-4 w-4 rounded-full border-gray-300 text-electric-blue focus:ring-electric-blue" 
                      />
                      <label htmlFor={range} className="text-sm text-gray-700">
                        {range}
                      </label>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold mb-4 mt-6">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`rating-${rating}`} 
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-electric-blue focus:ring-electric-blue" 
                      />
                      <label htmlFor={`rating-${rating}`} className="text-sm text-gray-700 flex items-center">
                        {rating}+ 
                        <Star className="h-3 w-3 ml-1 text-yellow-400 fill-yellow-400" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-3/4">
                {categories.map((category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {productsList
                        .filter((product) => category === "All" || product.category === category)
                        .map((product) => (
                          <Card key={product.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="relative h-48 w-full overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                              />
                              {product.isNew && (
                                <Badge className="absolute top-2 right-2 bg-highlight-orange">New</Badge>
                              )}
                            </div>
                            <CardHeader>
                              <CardTitle className="text-xl">{product.name}</CardTitle>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600">{product.description}</p>
                              <p className="text-xl font-bold text-deep-blue mt-4">${product.price.toFixed(2)}</p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-2 flex flex-col sm:flex-row gap-2">
                              <Button asChild className="w-full sm:w-auto bg-electric-blue hover:bg-deep-blue">
                                <Link to={`/shop/product/${product.id}`}>
                                  View Details
                                </Link>
                              </Button>
                              <Button className="w-full sm:w-auto" variant="outline">
                                <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
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

export default Shop;
