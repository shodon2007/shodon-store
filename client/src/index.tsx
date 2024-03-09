import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ThemeProvider from 'src/app/theme/ThemeProvider';
import { ReactQuery } from './app/providers/tanstack-query';
import { store } from './app/providers/redux';

import App from 'src/app/App';

import './app/styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <ReactQuery>
          <App />
        </ReactQuery>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
