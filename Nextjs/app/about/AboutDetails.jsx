
import styles from './AboutStyles.module.css'; // Importing styles

const AboutDetails = () => {
    return (
      <div>
        <h2 className={styles.aboutTitle}>About Details</h2> {/* Use local class name */}
        <p>This is some detailed information about our service.</p>
      </div>
    );
  };
  
  export default AboutDetails;