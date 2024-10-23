import ProductList from "../../controllers/ProductList";
import styles from "./GalleryPhotos.module.css";

export default function GalleryPhotos() {
  return (
    <main>
      <h3>Galeria</h3>
      <div className={styles.mainContainer}>
        <ul className={styles.listStyle}>
          <ProductList />
        </ul>
      </div>
    </main>
  );
}
