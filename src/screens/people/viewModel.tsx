import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '../../stores/useUsersStore';
import { fetchUsers } from './service';

export function usePeopleViewModel() {
  const { users, addUsers, clearUsers, page, incPage, setPage } = useUserStore();
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => fetchUsers(page),
    onSuccess: (data) => {
      if (page === 1) {
        clearUsers();
      }

      addUsers(data.results);
    },
  });

  const handleNextPage = () => {
    incPage();
  };

  const onRefresh = async () => {
    setPage(1);
  };

  return {
    page,
    data,
    error,
    users,
    mutate,
    onRefresh,
    isPending,
    handleNextPage,
  };
}
