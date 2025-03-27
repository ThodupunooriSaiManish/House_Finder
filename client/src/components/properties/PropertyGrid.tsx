import { Property } from "@/types";
import PropertyCard from "./PropertyCard";
import { Loader2 } from "lucide-react";

interface PropertyGridProps {
  properties: Property[];
  loading: boolean;
  mapVisible: boolean;
}

export default function PropertyGrid({ properties, loading, mapVisible }: PropertyGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center my-12">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="text-gray-400 text-5xl mb-4">🏠</div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">No properties found</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center mt-2">Try adjusting your search filters or exploring different locations.</p>
      </div>
    );
  }

  return (
    <div 
      className={`grid grid-cols-1 gap-6 ${
        mapVisible 
          ? 'md:grid-cols-1 lg:grid-cols-2' 
          : 'md:grid-cols-2 lg:grid-cols-3'
      }`}
    >
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
