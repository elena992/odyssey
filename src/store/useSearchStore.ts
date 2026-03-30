import { create } from 'zustand';

interface SearchState {
  searchTerm: string;
  category: string;
  setSearchTerm: (term: string) => void;
  setCategory: (category: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: '',
  category: 'All',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategory: (category) => set({ category: category }),
}));
