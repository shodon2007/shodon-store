import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

interface ReactQueryProps {
  children: React.ReactNode;
}

const ReactQuery: FC<ReactQueryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQuery;
