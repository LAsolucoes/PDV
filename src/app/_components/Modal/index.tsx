import styles from "./modal.module.css";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  tittle: string;
  descriprion?: string;
  name?: string
  email?: string
  address?: string
  contact?: string
  registrationDate?: string
  registrationUser?:string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;


}
export function Modal({ tittle,  descriprion , name, email, address, contact , registrationDate , registrationUser ,onClick, }: ModalProps) {
  return (
    <div className={styles.ModalOverlay} >
      <div className={styles.ModalContent}>
        <div className={styles.HeaderModal}>
          <h1>{tittle}</h1>
          <button className="btnDanger" onClick={onClick} title="Fechar Modal">
            <IoCloseSharp />
          </button>
        </div>
        <hr />

        <div className={styles.MainModal}>
          <p>{descriprion}</p>
          <div className={styles.MainContent}>
            <p><strong>{name}</strong></p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{contact}</p>
            <p>{registrationDate}</p>
            <p>{registrationUser}</p>
          </div>
         
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
