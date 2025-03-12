import Layout from "../Layout";
import styles from "./mainContent.module.css";

export default function MainContent({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Layout />
      <main className={styles.MainContent}>
        <div>{children}</div>
      </main>
    </>
  );
}
