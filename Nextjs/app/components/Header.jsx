// app/components/Header.jsx
import styles from '../styles/Header.module.css'; // Correct path to import CSS module
 const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Next.js App</h1>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
