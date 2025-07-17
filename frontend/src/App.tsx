import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Configuration from '@/modules/pages/Configuration';
import Dashboard from '@/modules/pages/Dashboard';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/configuration" element={<Configuration />} />
         </Routes>
      </BrowserRouter>
   );
}
