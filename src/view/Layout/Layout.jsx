import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../Main/GalleryPhotos";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.containerLayout}>
      <Header />
      <Main>{children}</Main>
      <Footer>2024 @React 0,5 to hero</Footer>
    </div>
  );
}
