import { QueryClientProvider } from '@tanstack/react-query';
import { PublicRoutes } from './src/navigations/public.route';
import { queryClient } from './src/services/query-client';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PublicRoutes />
    </QueryClientProvider>
  );
}
