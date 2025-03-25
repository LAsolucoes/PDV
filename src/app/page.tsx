import Link from "next/link";
import styles from "./page.module.css";
import Button from "./_components/( Buttons )/Button";
import LogoTipo from "../../public/LogoTipo.jpg";
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

            <div className="checkboxWrapper" title="Marque para ser lembrado no próximo login">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember" title="Marque para ser lembrado no próximo login">Lembrar-me</label>
            </div>

            <div>
              <Link href={"/resetPassword"} className={styles.ResetPassword} title="Redefinir senha">
                Esqueci minha senha
              </Link>
            </div>

            <div className={styles.FooterForm}>
              <Button
                icon={""}
                value={"Logar"}
                name={"login"}
                type={"submit"}
                className={"btnDark"}
                title={"Acessar"}
              />

              <span className={styles.Register}>
                Não possui uma conta?
                <Link href={"/register"} title="Registre-se no sistema">Registrar-se</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
