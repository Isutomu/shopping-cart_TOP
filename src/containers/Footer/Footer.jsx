import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.link}
        href="https://github.com/Isutomu/shopping-cart_TOP"
      >
        <img
          className={styles.logo}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        />
        <span>
          <nobr>Developed by Isutomu Naruto</nobr>
        </span>
      </a>
      <span className={styles.disclaimer}>
        Free to use for educational purposes
      </span>
    </footer>
  );
};

export default Footer;
