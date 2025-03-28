import { useState, useMemo } from 'react';
import { propertyData } from '@/lib/allProperties';
import { Property, SearchParams, FilteredResults } from '@/types';

export function useProperties() {
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: '',
    minPrice: 'none',
    maxPrice: 'none',
    bedrooms: 'any',
    propertyType: ''
  });
  const [mapVisible, setMapVisible] = useState(false);

  // Simulate data loading on initial render
  useMemo(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleMapView = () => {
    setMapVisible(prev => !prev);
  };

  const applyFilters = (properties: Property[], params: SearchParams): FilteredResults => {
    const filtered = properties.filter(property => {
      let match = true;
      
      if (params.location && !property.location.toLowerCase().includes(params.location.toLowerCase())) {
        match = false;
      }
      
      if (params.minPrice && params.minPrice !== 'none' && property.price < parseInt(params.minPrice)) {
        match = false;
      }
      
      if (params.maxPrice && params.maxPrice !== 'none' && property.price > parseInt(params.maxPrice)) {
        match = false;
      }
      
      if (params.bedrooms && params.bedrooms !== 'any' && property.bedrooms < parseInt(params.bedrooms)) {
        match = false;
      }
      
      if (params.propertyType && property.type !== params.propertyType) {
        match = false;
      }
      
      return match;
    });
    
    return {
      properties: filtered,
      count: filtered.length
    };
  };

  const updateSearchParams = (newParams: Partial<SearchParams>) => {
    setSearchParams(prev => ({ ...prev, ...newParams }));
  };

  const resetFilters = () => {
    setSearchParams({
      location: '',
      minPrice: 'none',
      maxPrice: 'none',
      bedrooms: 'any',
      propertyType: ''
    });
  };

  const filteredResults = useMemo(() => {
    return applyFilters(propertyData, searchParams);
  }, [searchParams]);

  return {
    properties: propertyData,
    filteredResults,
    loading,
    searchParams,
    updateSearchParams,
    resetFilters,
    mapVisible,
    toggleMapView
  };
}
