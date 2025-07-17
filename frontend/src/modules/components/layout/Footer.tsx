import { footerStyles as styles } from '@/modules/components/layout/Footer.styles';

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.leftSection}>
               <span className={styles.brandName}>EUNOMIA</span>
               <span className={styles.separator}>•</span>
               <span className={styles.description}>Trust-Level E-Mail Architecture System.</span>
            </div>

            <div className={styles.rightSection}>
               <span>Trust by Design, Security by Default.</span>
               <span className={styles.separator}>•</span>
               <span>
                  Craftsmanship by{' '}
                  <a href="https://karameht.com" target="_blank" className={styles.link}>
                     karameht
                  </a>
               </span>
            </div>
         </div>
      </footer>
   );
}
