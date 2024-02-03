import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routesConfig } from '@/core/base/routes.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/core/base/mui.config.ts';
import 'normalize.css';
import './core/style/palette.css';
import './core/style/reset.css';
import { Provider } from 'react-redux';
import { store } from '@/core/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routesConfig} />
    </ThemeProvider>
  </Provider>,
);
