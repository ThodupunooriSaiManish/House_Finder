import { useState, useEffect } from 'react';
import { Property } from '@/types';
import { propertyData } from '@/lib/propertyData';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (propertyId: number) => {
    let newFavorites: number[];
    
    if (favorites.includes(propertyId)) {
      newFavorites = favorites.filter(id => id !== propertyId);
    } else {
      newFavorites = [...favorites, propertyId];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (propertyId: number) => {
    return favorites.includes(propertyId);
  };

  const getFavoriteProperties = (): Property[] => {
    return propertyData.filter(property => favorites.includes(property.id));
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoriteProperties,
    favoriteCount: favorites.length
  };
}
