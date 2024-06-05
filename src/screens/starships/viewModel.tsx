import { useMutation } from '@tanstack/react-query';
import { useStarshipsStore } from '../../stores/useStarshipsStore';
import { fetchStarships } from './service';

export function useStarshipsViewModel() {
  const { addStarships, clearStarships, starships, page, incPage, setPage } = useStarshipsStore();
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => fetchStarships(page),
    onSuccess: (data) => {
      if (page === 1) {
        clearStarships();
      }

      addStarships(data.results);
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
    starships,
    mutate,
    onRefresh,
    isPending,
    handleNextPage,
  };
}
