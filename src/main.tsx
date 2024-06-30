import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import WebApp from '@twa-dev/sdk';

import './index.css';
import { UserProvider } from './context/userContextProvider.tsx';

// WebApp.ready();
// WebApp.expand();

// const user = WebApp.initDataUnsafe.user;
// const userId = user ? user.id : null;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App userId={userId} /> */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
