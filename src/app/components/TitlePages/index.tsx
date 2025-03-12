import styles from "./titlePages.module.css";

interface TitlePagesProps {
  title: string;
}

export default function TitlePages({ title,  }: TitlePagesProps) {
  return (
    <>
      <div className={styles.ConstainerTitle}>
        <h3 className={styles.TitlePages}>
          {title}
        </h3>
        <hr />
      </div>
    </>
  );
}
