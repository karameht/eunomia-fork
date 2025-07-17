import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppShell from '@/modules/components/layout/AppShell';

import App from './App';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <AppShell>
            <App />
         </AppShell>
      </BrowserRouter>
   </StrictMode>
);
