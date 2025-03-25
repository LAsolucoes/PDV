import Link from 'next/link';
import { FaCheck } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./buttonSalvarVoltar.module.css"


/*  BOTÃO DE SALVAR E VOLTAR NAS PAG DE CADASTROS */
interface ButtonSalvarVoltarProps{
    name : string
    href: string
}

export  function ButtonSalvarVoltar({name , href} : ButtonSalvarVoltarProps) {
    return (
        <div>
            <hr />
            <div className={styles.ButtonSalvarVoltar}>
                <button name={name} className='btnSuccess' type='submit'> <FaCheck /> Salvar </button>
                <Link href={href} className='btnDanger'><FaArrowLeft /> Voltar </Link>
            </div>
            
        </div>
    )
}