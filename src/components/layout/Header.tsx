
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CircuitBoard,
  Menu,
  ShoppingCart,
  X,
  LogIn,
  UserPlus,
  LogOut,
  User,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <CircuitBoard className="h-8 w-8 text-electric-blue" />
            <span className="font-bold text-xl text-deep-blue">Dev<span className="text-electric-blue">Tronics</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-electric-blue font-medium transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-electric-blue font-medium transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-electric-blue font-medium transition-colors">
              Blog
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-electric-blue font-medium transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-electric-blue font-medium transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/account">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Account
                  </Button>
                </Link>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-electric-blue hover:bg-deep-blue flex items-center gap-1"
                  onClick={() => signOut()}
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm" className="bg-electric-blue hover:bg-deep-blue flex items-center gap-1">
                    <UserPlus className="h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/shop" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/cart" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Cart
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/account" 
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Account
                </Link>
                <Button 
                  className="w-full mt-2 bg-electric-blue hover:bg-deep-blue"
                  onClick={() => {
                    signOut();
                    toggleMenu();
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
