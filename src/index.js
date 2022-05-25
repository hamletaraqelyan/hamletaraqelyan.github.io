import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
