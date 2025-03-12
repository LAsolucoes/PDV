import Link from "next/link";
import styles from "@/app/page.module.css";
import "./remember.css";
import Button from "@/app/components/Button";
import ImageEmail from "../../../public/ImageEmail.png";
import Image from "next/image";

export default function Remember() {
  return (
    <>
      <div className="ContainerRemember">
        <div className={styles.ContainerForm}>
          <div className={styles.ContainerLogo}>
            <Image
              src={ImageEmail}
              alt="Imagem do LogoTipo"
              width={80}
              height={80}
              className={styles.LogoTipo}
            />

            <label className="alertMessage">
              Preencha o email cadastrado no sistema e enviaremos uma nova senha
              para você.
            </label>
          </div>

          <form action="" className={styles.Form}>
            <div className="inputField">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>

            <div className={styles.FooterForm}>
              <Button
                icon={""}
                value={"Redefinir senha"}
                name={"login"}
                type={"submit"}
                className={"btnDark"}
                title={"Enviar uma nova senha para email cadastrado"}
              />

              <span className={styles.Register}>
                Lembrou email e senha?
                <Link href={"/"} title="Clique para voltar à página de login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
