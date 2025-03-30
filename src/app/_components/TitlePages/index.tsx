import styles from "./titlePages.module.css";
import { IoWarningOutline } from "react-icons/io5";

interface TitlePagesProps {
  title: string;
}

export function TitlePages({ title }: TitlePagesProps) {
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

export function AlertInputRequired(){
  return(
    <label className={styles.AlertInputRequired}><IoWarningOutline /> ATENÇÃO : Campos com ( * ) são campos obrigatórios de preenchimento </label>
  )
}
