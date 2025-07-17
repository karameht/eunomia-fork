import { Route, Routes } from 'react-router-dom';

import Configuration from '@/modules/pages/Configuration';
import Dashboard from '@/modules/pages/Dashboard';
import { ROUTES } from '@/shared/constants/routes';

export default function App() {
   return (
      <Routes>
         {' '}
         <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
         <Route path={ROUTES.CONFIGURATION} element={<Configuration />} />
      </Routes>
   );
}
