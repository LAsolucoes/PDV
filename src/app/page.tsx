
import Link from "next/link";
import styles from "./page.module.css";
import Button from "./components/Button";
import LogoTipo from "../../public/LogoTipo.jpg"
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className={styles.Container}>


        <div className={styles.ContainerForm}>
          <Image
            src={LogoTipo}
            alt="Imagem do LogoTipo"
            width={80}
            height={80}
            className={styles.LogoTipo}

          />

          <form
            action=""
            className={styles.Form}>

            <div className="inputField">
              <label htmlFor="">Email</label>
              <input
                type="text"
               placeholder="Email"
                required
                name="email"

              />
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

            <div className="checkboxWrapper">
              <input
                type="checkbox"
                id="remember"
                name="remember"
              />
              <label htmlFor="remember">Lembrar-me</label>
            </div>

            <div>
              <Link href={"/"}
                className={styles.ResetPassword}>
                Esqueci minha senha</Link>
            </div>

            <div className={styles.FooterForm}>
              <Button
                value={"Logar"}
                name={"login"}
                type={"submit"}
                className={"btnPrimary"}
              />

              <span className={styles.Register}>
                Não possui uma conta?
                <Link href={"/"}> Registrar-se</Link>
              </span>
            </div>




          </form>

        </div>

      </div>

    </>
  )

}