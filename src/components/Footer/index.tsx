import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>Blog &copy; 2022</p>
    </footer>
  );
};

export default Footer;