import { Endpoints } from '../../services/endpoints';

export const fetchPlanets = async (page: number) => {
  return await Endpoints.listPlanets(page);
};
