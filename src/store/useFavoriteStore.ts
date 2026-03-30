import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FavoriteState {
  favorites: string[]; // Array of destination IDs
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({
          favorites: [...state.favorites, id],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((favId) => favId !== id),
        })),
      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: 'favorite-destinations', // key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
