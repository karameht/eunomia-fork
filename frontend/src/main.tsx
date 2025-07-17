import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppShell from '@/modules/components/layout/AppShell';
import { env } from '@/shared/utils/env.utils';

import App from './App';

// A11y Development Tool
if (env.dev.isDev && env.dev.a11yChecks) {
   import('@axe-core/react').then((axe) => {
      console.log('Axe-core loaded!');
      axe.default(React, createRoot, 1000);
   });
}

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <AppShell>
            <App />
         </AppShell>
      </BrowserRouter>
   </StrictMode>
);
