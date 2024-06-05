import { create } from 'zustand';
import { Starship } from '../screens/starships/model';

interface StarshipsStore {
  page: number;
  starships: Starship[];
  clearStarships: () => void;
  setPage: (page: number) => void;
  incPage: () => void;
  addStarships: (newStarships: Starship[]) => void;
}

export const useStarshipStore = create<StarshipsStore>((set) => ({
  page: 1,
  starships: [],
  clearStarships: () => set(() => ({ planets: [], page: 1 })),
  setPage: (page) => set(() => ({ page: page })),
  incPage: () => set((state) => ({ page: state.page + 1 })),
  addStarships: (newStarships) =>
    set((state) => ({ starships: [...state.starships, ...newStarships] })),
}));
