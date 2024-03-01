import AddList from "@/components/addList";
import List from "@/components/lista";
import { Suspense } from "react";
import styles from "./page.module.css";

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <select data-theme-picker name="themepicker" className={styles.select}>
          <option value="☀️">☀️</option>
          <option value="🌑">🌑</option>
        </select>
      </main>
      <div className={styles.main}>
        <AddList />
        <Suspense fallback={<p>Carregando...</p>}>
          <List />
        </Suspense>
      </div>
    </>
  );
}
