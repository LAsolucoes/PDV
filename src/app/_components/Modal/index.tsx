import styles from "./modal.module.css"

interface ModalProps{
    onClick?: ()=> void
}
export function Modal({onClick }: ModalProps){
    return(
        <div className={styles.ContainerBackground}>
 
            <div className={styles.Modal}>

            <h1>Minha modal</h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut error, commodi perferendis rem, maxime eos, suscipit tenetur dicta perspiciatis non provident? Quam tenetur doloremque perferendis, aliquid harum et assumenda incidunt.
            <hr />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium autem ullam? Dolorum consectetur quibusdam animi unde cupiditate, optio laboriosam explicabo? Eum temporibus quibusdam, voluptatem dolor voluptatibus autem animi laborum.
            <hr />
            
           
           <button onClick={ onClick }>Close</button>

            </div>


        </div>
    )
}