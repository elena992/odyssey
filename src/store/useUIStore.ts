import { create } from 'zustand';

interface UIState {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));
