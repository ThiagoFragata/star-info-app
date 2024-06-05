import { useMutation } from '@tanstack/react-query';
import { usePlanetStore } from '../../stores/usePlanetsStore';
import { fetchPlanets } from './service';

export function usePlanetsViewModel() {
  const { addPlanets, clearPlanets, planets, page, incPage, setPage } = usePlanetStore();
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: () => fetchPlanets(page),
    onSuccess: (data) => {
      if (page === 1) {
        clearPlanets();
      }

      addPlanets(data.results);
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
    planets,
    mutate,
    onRefresh,
    isPending,
    handleNextPage,
  };
}
