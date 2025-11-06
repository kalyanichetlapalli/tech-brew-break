import { ReactElement } from 'react';
import { 
  render as rtlRender,
  RenderOptions,
  act,
  cleanup,
  renderHook
} from '@testing-library/react';
import {
  screen,
  waitFor,
  within,
  waitForElementToBeRemoved,
  fireEvent
} from '@testing-library/dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  const testQueryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testQueryClient}>
      <TooltipProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

// Re-export utilities from React Testing Library
export { default as userEvent } from '@testing-library/user-event';
export {
  screen,
  waitFor,
  within,
  waitForElementToBeRemoved,
  fireEvent,
  act,
  cleanup,
  renderHook
};

// Export our custom render
export { customRender as render };
