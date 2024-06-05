import { Endpoints } from '../../../services/endpoints';

export const fetchUsers = async (page: number) => {
  return await Endpoints.listPeople(page);
};
