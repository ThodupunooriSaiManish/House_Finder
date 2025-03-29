export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'sale' | 'rent';
  images: string[];
  description: string;
  coordinates: { lat: number; lng: number };
}

export interface SearchParams {
  location: string;
  minPrice: string | 'none';
  maxPrice: string | 'none';
  bedrooms: string | 'any';
  propertyType: string | 'sale' | 'rent';
}

export interface FilteredResults {
  properties: Property[];
  count: number;
}
