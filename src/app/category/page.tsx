import MainContent from "../components/MainContent";
import TitlePages from "../components/TitlePages";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";



export default function Category() {
  return (
    <>
      <MainContent>
        <div>
          <TitlePages title={"CATEGORIA"} />
        </div>

        <div className="ContainerBtnPagesNavegation">
          <Link href={"/new-category"} className="btnSuccess">
            <IoMdAdd />
            Nova Categoria
          </Link>
          
        </div>

        <div className="inputField">
          <label>Nome</label>
          <input
          className="input-md"
          type="text" />

        </div>

        <div>
          <label htmlFor="">Total de Registros: <span>3</span></label>
        </div>

        <table border={2}>
          <thead>
            <tr>
              <th>Ações</th>
              <th>Nome</th>
              <th>Ativo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acoes</td>
              <td>Bebidas</td>
              <td> Sim </td>
            </tr>
          </tbody>
        </table>
      </MainContent>
    </>
  );
}
