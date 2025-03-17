import Header from "@/components/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  );
}
