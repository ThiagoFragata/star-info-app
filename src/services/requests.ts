import { api } from './axios';

export class Requests {
  static async listPeople(page: number) {
    try {
      const { data } = await api.get(`/people?page${page}`);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async listPlanets(page: number) {
    try {
      const { data } = await api.get(`/planets?page${page}`);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async listStarships(page: number) {
    try {
      const { data } = await api.get(`/starships?page${page}`);
      return data;
    } catch (error) {
      return error;
    }
  }
}
