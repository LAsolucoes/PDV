"use client"

import { useState } from "react";

import Image from "next/image"
import ImageLogo from "../../../../public/LogoTipo.jpg"
import styles from "./sidebar.module.css"
import Link from "next/link"
import { FaHome } from "react-icons/fa";

/* ICONS CADASTROS */
import { FaAddressCard } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi"; /* CATEGOTY */
import { FaCopyright } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";


/* ICONS ESTOQUE */

import { FaCubes } from "react-icons/fa6";
import { LuCornerRightDown } from "react-icons/lu";
import { FaFileInvoice } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbAdjustments } from "react-icons/tb";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdLock } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";


/* ICONS CAIXA */

import { MdPointOfSale } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md";
import { BsBasket2Fill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaDollyFlatbed } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Sidebar(){


    const [openCloseMenuCadastros , setOpenCloseMenuCadastros] = useState(false)
     function OpenCloseCadastros(){
        setOpenCloseMenuCadastros(!openCloseMenuCadastros)
     }
     
     const [ openCloseMenuEstoque , setOpenCloseMenuEstoque] = useState(false)
     function OpenCloseEstoque(){
        setOpenCloseMenuEstoque(!openCloseMenuEstoque)
     }
     
     const [ openCloseMenuCaixa , setOpenCloseMenuCaixa] = useState(false)
     function OpenCloseCaixa(){
        setOpenCloseMenuCaixa(!openCloseMenuCaixa)
     }
     





    return(
    
        <aside className={styles.Sidebar}>


            <div className={styles.ContainerImageLogo}>
                <Image
                 src={ImageLogo}
                 alt="LogoTipo"
                 width={60}
                 height={60}
                 className={styles.ImageLogoSidebar}
                 />
            </div>
               
            
            <nav className={styles.Nav}>
                      {/* HOME */}
                    <ul>
                     <Link href={"/dashboard"}> <FaHome /> Home </Link>
                    </ul>
               
                    {/* CADASTROS */}
                    <ul>
                        <li><Link href={""} onClick={OpenCloseCadastros}> <FaAddressCard /> Cadastros</Link>
                        <div className={styles.SubMenu} >
                            <ul className={openCloseMenuCadastros ? styles.open : styles.close}>
                                <li><Link href={"/categorias"}><BiSolidCategory />Categoria</Link></li>
                                <li><Link href={"/marcas"}><FaCopyright />Marcas</Link></li>
                                <li><Link href={"/produtos"}><FaTshirt />Produtos</Link></li>
                                <li><Link href={"/"}><FaUser />Usuários</Link></li>
                                <li><Link href={"/"}><FaAddressBook />Clientes</Link></li>
                                <li><Link href={"/"}><FaTruck />Fornecedores</Link></li>
                                <li><Link href={"/"}><FaTools />Serviços</Link></li>
                                <li><Link href={"/"}><MdPriceChange />Lista de Preços</Link></li>
                                <li><Link href={"/"}><FaClipboardList />Taxa de Cartões</Link></li>
                                <li><Link href={"/"}><FaCalculator />Taxa de Vendas</Link></li>
                                <li><Link href={"/"}><FaMoneyCheckDollar />Taxa de Pagamentos</Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
              
                     {/* ESTOQUE */}
                     <ul>
                    <li><Link href={""} onClick={OpenCloseEstoque}><FaCubes />Estoque</Link> 
                    <div className={styles.SubMenu}>
                        <ul className={openCloseMenuEstoque ? styles.open : styles.close}>
                            <li><Link href={"/"}><FaFileInvoice  />Entrada Manual</Link></li>
                            <li><Link href={"/"}><LuCornerRightDown />Nota de Saida</Link></li>
                            <li><Link href={"/"}><FaCartArrowDown />Compras</Link></li>
                            <li><Link href={"/"}><MdEmail />Cotação</Link></li>
                            <li><Link href={"/"}><TbAdjustments />Ajuste de Estoque</Link></li>
                            <li><Link href={"/"}><LiaClipboardListSolid />Iventário</Link></li>
                            <li><Link href={"/"}><MdLock />Gerenciar Estoque</Link></li>
                            <li><Link href={"/"}><FaListCheck />Lista de Alterações</Link></li>
                            <li><Link href={"/"}><MdOutlinePublishedWithChanges />Movimentações</Link></li>
                        </ul>
                    </div>
                    </li>
                     </ul>


                    {/* CAIXA */}
                     <ul>
                    <li><Link href={""} onClick={OpenCloseCaixa}> <MdPointOfSale /> Caixa</Link> 
                    <div className={styles.SubMenu}>
                        <ul className={openCloseMenuCaixa ? styles.open : styles.close}>
                            <li><Link href={"/"}><GiMoneyStack />Lista de Vendas</Link></li>
                            <li><Link href={"/"}><MdCancelPresentation />Vendas Canceladas</Link></li>
                            <li><Link href={"/"}><BsBasket2Fill />PDV</Link></li>
                            <li><Link href={"/"}><SlBasket />Pré Vendas</Link></li>
                            <li><Link href={"/"}><FaDollyFlatbed />Rascunhos</Link></li>
                            <li><Link href={"/"}><GiShakingHands />Consignados</Link></li>
                            <li><Link href={"/"}><IoBagHandleSharp />Vendas Balcão</Link></li>
                            <li><Link href={"/"}><FaMoneyBillTransfer />Sangria</Link></li>
                            <li><Link href={"/"}><BiSolidDiscount />Descontos</Link></li>
                            <li><Link href={"/"}><FaMoneyBillTrendUp />Acrécimos</Link></li>
                        </ul>
                    </div>
                    </li>
                     </ul>


     
            </nav>

        </aside>
    )
}