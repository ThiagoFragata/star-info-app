import { Users } from '../screens/people/model';
import { api } from './axios';

export class Endpoints {
  static async listPeople(page: number): Promise<Users> {
    try {
      const { data } = await api.get(`/people?page=${page}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async listPlanets(page: number) {
    try {
      const { data } = await api.get(`/planets?page=${page}`);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async listStarships(page: number) {
    try {
      const { data } = await api.get(`/starships?page=${page}`);
      return data;
    } catch (error) {
      return error;
    }
  }
}
