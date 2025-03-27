import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useFavorites } from "@/hooks/useFavorites";
import { Home, Heart, Map, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const [location] = useLocation();
  const { favoriteCount } = useFavorites();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Home className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">House<span className="text-primary">Finder</span></span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link href="/">
              <Button
                variant={location === "/" ? "secondary" : "ghost"}
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                All Properties
              </Button>
            </Link>
            <Link href="/favorites">
              <Button
                variant={location === "/favorites" ? "secondary" : "ghost"}
                className="px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Heart className="h-4 w-4 mr-1 text-accent-500" />
                Favorites
                {favoriteCount > 0 && (
                  <Badge variant="secondary" className="ml-1 bg-accent-500 text-white">
                    {favoriteCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link href="/">
              <Button
                variant={location === "/" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={closeMenu}
              >
                <Home className="h-4 w-4 mr-2" />
                All Properties
              </Button>
            </Link>
            <Link href="/favorites">
              <Button
                variant={location === "/favorites" ? "secondary" : "ghost"}
                className="w-full justify-start flex items-center"
                onClick={closeMenu}
              >
                <Heart className="h-4 w-4 mr-2 text-accent-500" />
                Favorites
                {favoriteCount > 0 && (
                  <Badge variant="secondary" className="ml-1 bg-accent-500 text-white">
                    {favoriteCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Toggle theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
