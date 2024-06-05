import { create } from 'zustand';
import { User } from '../screens/people/model';

interface UserStore {
  page: number;
  users: User[];
  clearUsers: () => void;
  setPage: (page: number) => void;
  incPage: () => void;
  addUsers: (newUsers: User[]) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  page: 1,
  users: [],
  clearUsers: () => set(() => ({ users: [], page: 1 })),
  setPage: (page) => set(() => ({ page: page })),
  incPage: () => set((state) => ({ page: state.page + 1 })),
  addUsers: (newUsers) => set((state) => ({ users: [...state.users, ...newUsers] })),
}));
