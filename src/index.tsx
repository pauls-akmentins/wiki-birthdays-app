import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { WikiBirthdays } from '@/containers/sections/WikiBirthdays';
import { store } from '@/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WikiBirthdays />
    </Provider>
  </React.StrictMode>,
);
