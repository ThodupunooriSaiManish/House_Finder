import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { SearchParams } from "@/types";
import { MapPin } from "lucide-react";

interface SearchFiltersProps {
  searchParams: SearchParams;
  onUpdateParams: (params: Partial<SearchParams>) => void;
  onResetFilters: () => void;
}

export default function SearchFilters({ 
  searchParams, 
  onUpdateParams, 
  onResetFilters 
}: SearchFiltersProps) {
  
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateParams({ location: e.target.value });
  };

  const handlePropertyTypeChange = (type: string) => {
    onUpdateParams({ propertyType: type });
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-lg">Find Your Dream Home</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative mt-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="location"
                placeholder="City, state, or zip code"
                className="pl-10"
                value={searchParams.location}
                onChange={handleLocationChange}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="price-min">Min Price</Label>
            <Select
              value={searchParams.minPrice}
              onValueChange={(value) => onUpdateParams({ minPrice: value })}
            >
              <SelectTrigger id="price-min">
                <SelectValue placeholder="No minimum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No minimum</SelectItem>
                <SelectItem value="20000">₹20,000</SelectItem>
                <SelectItem value="50000">₹50,000</SelectItem>
                <SelectItem value="100000">₹1 Lakh</SelectItem>
                <SelectItem value="500000">₹5 Lakhs</SelectItem>
                <SelectItem value="1000000">₹10 Lakhs</SelectItem>
                <SelectItem value="5000000">₹50 Lakhs</SelectItem>
                <SelectItem value="10000000">₹1 Crore</SelectItem>
                <SelectItem value="50000000">₹5 Crores</SelectItem>
                <SelectItem value="100000000">₹10 Crores</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="price-max">Max Price</Label>
            <Select
              value={searchParams.maxPrice}
              onValueChange={(value) => onUpdateParams({ maxPrice: value })}
            >
              <SelectTrigger id="price-max">
                <SelectValue placeholder="No maximum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No maximum</SelectItem>
                <SelectItem value="50000">₹50,000</SelectItem>
                <SelectItem value="100000">₹1 Lakh</SelectItem>
                <SelectItem value="1000000">₹10 Lakhs</SelectItem>
                <SelectItem value="5000000">₹50 Lakhs</SelectItem>
                <SelectItem value="10000000">₹1 Crore</SelectItem>
                <SelectItem value="50000000">₹5 Crores</SelectItem>
                <SelectItem value="100000000">₹10 Crores</SelectItem>
                <SelectItem value="200000000">₹20 Crores</SelectItem>
                <SelectItem value="500000000">₹50 Crores</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Select
              value={searchParams.bedrooms}
              onValueChange={(value) => onUpdateParams({ bedrooms: value })}
            >
              <SelectTrigger id="bedrooms">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-3">
            <Label htmlFor="property-type" className="mb-1 block">Property Type</Label>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant={searchParams.propertyType === '' ? 'secondary' : 'outline'}
                onClick={() => handlePropertyTypeChange('')}
              >
                All
              </Button>
              <Button
                type="button"
                variant={searchParams.propertyType === 'sale' ? 'secondary' : 'outline'}
                onClick={() => handlePropertyTypeChange('sale')}
              >
                For Sale
              </Button>
              <Button
                type="button"
                variant={searchParams.propertyType === 'rent' ? 'secondary' : 'outline'}
                onClick={() => handlePropertyTypeChange('rent')}
              >
                For Rent
              </Button>
            </div>
          </div>
          
          <div className="flex items-end">
            <Button
              variant="outline"
              className="w-full"
              onClick={onResetFilters}
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
