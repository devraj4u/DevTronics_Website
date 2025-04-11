
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  isFeatured: boolean;
  isNew?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Circuit Simulator Pro Plugin",
    description: "Advanced circuit simulation plugin with real-time analysis and component library.",
    price: 49.99,
    image: "/placeholder.svg",
    rating: 4.8,
    isFeatured: true,
    isNew: true
  },
  {
    id: 2,
    name: "PCB Layout Assistant",
    description: "Automated PCB layout optimization tool for complex circuit designs.",
    price: 39.99,
    image: "/placeholder.svg",
    rating: 4.5,
    isFeatured: true
  },
  {
    id: 3,
    name: "Microcontroller Code Generator",
    description: "Generate optimized code templates for various microcontroller platforms.",
    price: 29.99,
    image: "/placeholder.svg",
    rating: 4.7,
    isFeatured: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue">Featured Products</h2>
          <Button asChild variant="ghost" className="text-electric-blue">
            <Link to="/shop" className="flex items-center">
              Browse shop <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
