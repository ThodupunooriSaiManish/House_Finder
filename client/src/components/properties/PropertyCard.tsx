import { useState } from "react";
import { Property } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";
import { Badge } from "@/components/ui/badge";
import { Heart, Bed, Bath, Ruler, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ImageCarousel from "./ImageCarousel";

interface PropertyCardProps {
  property: Property;
}

// Format price in Indian style (lakhs and crores)
const formatIndianPrice = (price: number, isRent: boolean): string => {
  if (isRent) {
    return `₹${price.toLocaleString('en-IN')}/mo`;
  }
  
  if (price >= 10000000) {
    // Convert to crores for prices >= 1 crore
    const crores = (price / 10000000).toFixed(2);
    return `₹${crores} Cr`;
  } else if (price >= 100000) {
    // Convert to lakhs for prices >= 1 lakh
    const lakhs = (price / 100000).toFixed(2);
    return `₹${lakhs} L`;
  } else {
    // Normal formatting for smaller amounts
    return `₹${price.toLocaleString('en-IN')}`;
  }
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(property.id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(property.id);
  };

  const handleCardClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card 
        className="bg-white dark:bg-gray-800 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative">
          {/* Image Carousel */}
          <ImageCarousel images={property.images} alt={property.title} />
          
          {/* Property Type Badge */}
          <Badge 
            className={`absolute top-2 left-2 ${
              property.type === 'sale' 
                ? 'bg-amber-500 hover:bg-amber-600' 
                : 'bg-emerald-500 hover:bg-emerald-600'
            } text-white`}
          >
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </Badge>
          
          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-full"
          >
            <Heart 
              className={`h-5 w-5 ${isFav ? 'fill-amber-500 text-amber-500' : 'text-gray-400 hover:text-amber-500'}`} 
            />
          </Button>
        </div>
        
        {/* Property Info */}
        <CardContent className="flex-grow p-4">
          <div className="mb-2 flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate-2">
              {property.title}
            </h3>
            <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">
              {formatIndianPrice(property.price, property.type === 'rent')}
            </span>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{property.location}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
            <span className="flex items-center">
              <Bed className="h-4 w-4 mr-1" /> 
              <span>{property.bedrooms}</span> 
              <span className="text-xs ml-1">BD</span>
            </span>
            <span className="flex items-center">
              <Bath className="h-4 w-4 mr-1" /> 
              <span>{property.bathrooms}</span> 
              <span className="text-xs ml-1">BA</span>
            </span>
            <span className="flex items-center">
              <Ruler className="h-4 w-4 mr-1" /> 
              <span>{property.sqft.toLocaleString()}</span> 
              <span className="text-xs ml-1">SQFT</span>
            </span>
          </div>
          
          <div className="flex justify-center mt-2">
            <Button variant="outline" size="sm" className="w-full">
              <Info className="h-4 w-4 mr-2" /> View Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Property Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex justify-between items-center">
              {property.title}
              <span className="text-primary">
                {formatIndianPrice(property.price, property.type === 'rent')}
              </span>
            </DialogTitle>
            <DialogDescription className="text-base font-medium text-gray-500">
              {property.location}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-2">
            <ImageCarousel images={property.images} alt={property.title} />
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-4 py-2 border-y border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Bed className="h-5 w-5 mr-2 text-primary" />
                <span className="font-semibold text-lg">{property.bedrooms}</span>
              </div>
              <p className="text-sm text-gray-500">Bedrooms</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Bath className="h-5 w-5 mr-2 text-primary" />
                <span className="font-semibold text-lg">{property.bathrooms}</span>
              </div>
              <p className="text-sm text-gray-500">Bathrooms</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Ruler className="h-5 w-5 mr-2 text-primary" />
                <span className="font-semibold text-lg">{property.sqft.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-500">Square Feet</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">About This Property</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {property.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
