import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}> {/* Use the updated local class */}
      <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
