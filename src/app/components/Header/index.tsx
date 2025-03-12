import { IoNotifications } from "react-icons/io5";
import { RiFullscreenFill } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import { BsBasket2Fill } from "react-icons/bs";

import { FaPlay } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import ImageAvatar from "../../../../public/ImageAvatar.png";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.ContainerHeader}>
        <div className={styles.headerBtns}>
          <Button
            icon=""
            value={"Planos Atual"}
            type={"button"}
            className={"btnSecondary"}
            name={"currentPlan"}
            title={"Detalhes do Plano Atual"}
          />
          <Button
            icon=""
            value={"Upground Plano"}
            type={"button"}
            className={"btnLight"}
            name={"upFlat"}
            title={"Veja outros Planos"}
          />
          <Link href={"/"} className={"btnPrimary"} title={"Video Ajuda"}>
            <FaPlay /> Video Ajuda
          </Link>
        </div>

        <div className={styles.headerNotificationsUserAvatarLogout}>
          <div className={styles.iconsAcoes}>
            <IoNotifications title="Notificações" className="icons" />
            <IoMdMoon title="Tema Dark" className="icons" />
            <BsBasket2Fill title="PDV"className="icons"/>
            <RiFullscreenFill title="Tela Cheia" className="icons" />
          </div>

          <Image
            className={styles.ImageAvatar}
            src={ImageAvatar}
            alt="Foto do Usuário"
            width={50}
            height={50}
            title="Foto do Usuário"
          />
          <span title="Nome do Usuário logado" className={styles.nameUser}>Usúario Logado</span>

          <Button
            icon={<ImExit />}
            value={"Sair"}
            type={"button"}
            className={"btnDanger"}
            name={"upFlat"}
            title={"Sair da sua Conta"}
          />
        </div>
      </div>
    </header>
  );
}
