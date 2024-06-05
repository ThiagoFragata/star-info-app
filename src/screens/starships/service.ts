import { Endpoints } from '../../services/endpoints';

export const fetchStarships = async (page: number) => {
  return await Endpoints.listStarships(page);
};
