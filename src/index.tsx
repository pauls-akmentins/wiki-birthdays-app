import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/store';

import './index.css';

import { BirthdaysSection } from './containers/sections/BirthdaysSection';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BirthdaysSection />
    </Provider>
  </React.StrictMode>,
);
