import { create } from 'zustand';
import { Planet } from '../screens/planets/model';

interface PlanetStore {
  page: number;
  planets: Planet[];
  clearPlanets: () => void;
  setPage: (page: number) => void;
  incPage: () => void;
  addPlanets: (newPlanets: Planet[]) => void;
}

export const usePlanetStore = create<PlanetStore>((set) => ({
  page: 1,
  planets: [],
  clearPlanets: () => set(() => ({ planets: [], page: 1 })),
  setPage: (page) => set(() => ({ page: page })),
  incPage: () => set((state) => ({ page: state.page + 1 })),
  addPlanets: (newPlanets) => set((state) => ({ planets: [...state.planets, ...newPlanets] })),
}));
