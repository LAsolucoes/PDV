import Link from "next/link";
import styles from "@/app/page.module.css";
import "./register.css"
import Button from "@/app/components/Button";
import LogoTipo from "../../../public/LogoTipo.jpg";
import Image from "next/image";

export default function Register() {
  return (
    <>
      <div className="ContainerRegister">
        <div className={styles.ContainerForm}>
          <div className={styles.ContainerLogo}>
            <Image
              src={LogoTipo}
              alt="Imagem do LogoTipo"
              width={80}
              height={80}
              className={styles.LogoTipo}
            />
          </div>

          <form action="" className={styles.Form}>
            <div className="inputField">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Email" required name="email" />
            </div>
            <div className="inputField">
              <label htmlFor="">Senha</label>
              <input
                type="password"
                placeholder="*****"
                required
                name="password"
              />
            </div>
            <div className="inputField">
              <label htmlFor="">Confirmar Senha</label>
              <input
                type="password"
                placeholder="*****"
                required
                name="confirmPassword"
              />
            </div>

            <div className={styles.FooterForm}>
              <Button
                value={"Registrar-se"}
                name={"login"}
                type={"submit"}
                className={"btnDark"}
              />

              <span className={styles.Register}>
                Já possui uma conta?
                <Link href={"/"}> Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
