import clsx from 'clsx';
import { LayoutDashboard, Settings } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { sidebarStyles as styles } from '@/modules/components/layout/Sidebar.styles';
import { ROUTES } from '@/shared/constants/routes';

export default function Sidebar() {
   const location = useLocation();

   const isActive = (path: string) => location.pathname === path;

   return (
      <aside className={styles.aside}>
         <div className={styles.header}>
            <h1 className={styles.title}>EUNOMIA</h1>
         </div>

         <div className={styles.divider}></div>

         <nav className={styles.nav}>
            <a
               href={ROUTES.DASHBOARD}
               className={clsx(styles.navLink, isActive(ROUTES.DASHBOARD) && styles.activeLink)}
            >
               <LayoutDashboard size={20} />
               Dashboard
            </a>
            <a
               href={ROUTES.CONFIGURATION}
               className={clsx(styles.navLink, isActive(ROUTES.CONFIGURATION) && styles.activeLink)}
            >
               <Settings size={20} />
               Configuration
            </a>
         </nav>
      </aside>
   );
}
