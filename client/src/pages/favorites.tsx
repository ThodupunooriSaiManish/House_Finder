import { useFavorites } from "@/hooks/useFavorites";
import { useProperties } from "@/hooks/useProperties";
import SearchFilters from "@/components/search/SearchFilters";
import PropertyGrid from "@/components/properties/PropertyGrid";
import PropertyMap from "@/components/map/PropertyMap";
import { Button } from "@/components/ui/button";
import { Map, Heart } from "lucide-react";

export default function Favorites() {
  const { getFavoriteProperties } = useFavorites();
  const {
    searchParams,
    updateSearchParams,
    resetFilters,
    mapVisible,
    toggleMapView,
    loading,
    applyFilters
  } = useProperties();

  const favoriteProperties = getFavoriteProperties();
  const filteredFavorites = applyFilters(favoriteProperties, searchParams);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <SearchFilters
        searchParams={searchParams}
        onUpdateParams={updateSearchParams}
        onResetFilters={resetFilters}
      />

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Heart className="h-5 w-5 mr-2 text-accent-500 fill-accent-500" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Favorite Properties
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
              {filteredFavorites.count} {filteredFavorites.count === 1 ? 'property' : 'properties'} found
            </span>
          </h2>
        </div>
        <Button
          variant={mapVisible ? "secondary" : "outline"}
          onClick={toggleMapView}
          className="flex items-center"
        >
          <Map className="h-4 w-4 mr-2" />
          {mapVisible ? "Hide Map" : "Show Map"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" 
        style={{ gridTemplateColumns: mapVisible ? "2fr 1fr" : "1fr" }}>
        <div className={mapVisible ? "lg:col-span-2" : "lg:col-span-3"}>
          <PropertyGrid 
            properties={filteredFavorites.properties} 
            loading={loading} 
            mapVisible={mapVisible} 
          />
        </div>
        
        {mapVisible && (
          <div className="lg:col-span-1">
            <PropertyMap properties={filteredFavorites.properties} />
          </div>
        )}
      </div>
    </div>
  );
}
