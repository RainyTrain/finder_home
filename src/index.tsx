import ErrorBoundary from 'app/providers/ErrorBoundary/ErrorBoundary';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import './app/styles/index.scss';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
);
