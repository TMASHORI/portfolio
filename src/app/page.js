
import { Marcellus } from "next/font/google";
import styles from "./page.module.css";
import HomePage from "@/components/home/home";


// const marcellus = Marcellus({ subsets: ["latin"], weight: ['400'] })
// ${styles.marcellus}

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <HomePage />
    </main>
  );
}
