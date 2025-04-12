import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Impede que as queries refaçam fetch ao voltar a focar a janela ou em intervalos
      refetchOnWindowFocus: false,
      refetchInterval: false,
      // Desativa novas tentativas caso a query falhe
      retry: false,
      // Considera os dados sempre atualizados (nunca "stale")
      staleTime: Infinity,
    },
  },
});

