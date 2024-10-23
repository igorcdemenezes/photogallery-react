import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.containerHeader}>
      <nav className={styles.containerNav}>
        <a href="">Logo</a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Galeria</a>
          </li>
        </ul>
        <input />
        <div>
          <img alt="Foto do usuário" />
        </div>
      </nav>
    </header>
  );
}
