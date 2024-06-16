import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';

import { rootReducer, RootState } from '..';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: Partial<RootState>;
}

export const testStoreInit = ({ preloadedState }: { preloadedState?: Partial<RootState> } = {}) => {
  return configureStore({ reducer: rootReducer, preloadedState });
};

export function reduxRenderWithStore(
  ui: React.ReactNode,
  { initialState, ...renderOptions }: ExtendedRenderOptions = {},
) {
  const store = testStoreInit({ preloadedState: initialState });
  function ProviderWrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return render(ui, { wrapper: ProviderWrapper, ...renderOptions });
}
