import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Redux Setup
import { Provider } from 'react-redux';
import { store } from './App/Store.jsx';

// ✅ Search Context import
import { SearchProvider } from '../src/Pages/Search/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* ✅ Wrap App inside SearchProvider */}
      <SearchProvider>
        <App />
      </SearchProvider>
    </Provider>
  </React.StrictMode>
);
