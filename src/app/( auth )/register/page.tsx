import Link from "next/link";
import styles from "@/app/page.module.css";
import "./register.css";
import {Button} from "@/app/_components/( Buttons )/Button";
import LogoTipo from "../../../../public/LogoTipo.jpg";
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
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                required
                name="email"
              />
            </div>

            <div className="inputField">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="*****"
                required
                name="password"
              />
            </div>

            <div className="inputField">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="*****"
                required
                name="confirmPassword"
              />
            </div>

            <div className={styles.FooterForm}>
              <Button
                icon={""}
                value={"Registrar-se"}
                name={"login"}
                type={"submit"}
                className={"btnDark"}
                title={"Registrar-se para uma nova conta"}
              />

              <span className={styles.Register}>
                Já possui uma conta?
                <Link href={"/"} title="Clique para voltar à página de login">
                 
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
