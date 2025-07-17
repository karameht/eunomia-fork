import { LayoutDashboard, Settings } from 'lucide-react';

import { sidebarStyles as styles } from '@/modules/components/layout/Sidebar.styles';

export default function Sidebar() {
   return (
      <aside className={styles.aside}>
         <div className={styles.header}>
            <h1 className={styles.title}>EUNOMIA</h1>
         </div>

         <div className={styles.divider}></div>

         <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>
               <LayoutDashboard size={20} />
               Dashboard
            </a>
            <a href="/configuration" className={styles.navLink}>
               <Settings size={20} />
               Configuration
            </a>
         </nav>
      </aside>
   );
}
