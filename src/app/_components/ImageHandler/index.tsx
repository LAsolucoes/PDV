import Image from "next/image";
import SemImage from "../../../../public/SemImage.jpeg";
import styles from "./imageHandle.module.css";

export function ImageHandler() {
  return (
    <div className={styles.ContainerImage}>
      <div className={styles.Image}>
          <Image
            src={SemImage}
            alt={"Imagem"}
            width={150}
            height={150}
            quality={100}
            priority
            className="Image"
          />
      </div>

      <div className={styles.SaveRemoveImage}>
        <button className="btnPrimary" title="Adicionar Imagem">Adicionar</button>
        <button className="btnDanger" title="Remover Imagem">Remover</button>
      </div>
    </div>
  );
}
