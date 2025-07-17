import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import AppShell from './modules/components/layout/AppShell.tsx';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <AppShell>
         <App />
      </AppShell>
   </StrictMode>
);
