import { ReactNode } from 'react';

import { appShellStyles as styles } from '@/modules/components/layout/AppShell.styles';
import Footer from '@/modules/components/layout/Footer';
import Header from '@/modules/components/layout/Header';
import Sidebar from '@/modules/components/layout/Sidebar';

interface AppShellProps {
   children: ReactNode;
}

export default function AppShell(props: AppShellProps) {
   return (
      <div className={styles.shell}>
         <div className={styles.sidebar}>
            <Sidebar />
         </div>
         <div className={styles.contentArea}>
            <Header />
            <main className={styles.main}>{props.children}</main>
            <Footer />
         </div>
      </div>
   );
}
