import styles from "./modal.module.css";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  tittle: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;

}
export function Modal({ tittle, onClick, label  }: ModalProps) {
  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.ModalContent}>
        <div className={styles.HeaderModal}>
          <h1>{tittle}</h1>
          <button className="btnDanger" onClick={onClick} title="Fechar Modal">
            <IoCloseSharp />
          </button>
        </div>
        <hr />

        <div className={styles.MainModal}>
          <p>{label}</p>
        </div>

        <div className={styles.FooterModal}>
          <hr />
          <button onClick={onClick} className="btnDanger" title="Fechar Modal">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
