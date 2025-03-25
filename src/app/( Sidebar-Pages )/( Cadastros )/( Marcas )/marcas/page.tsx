import TitlePages from "@/app/_components/TitlePages";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa"; /* EDITAR */
import { MdDeleteForever } from "react-icons/md"; /* DELETE */
import { FaCheck } from "react-icons/fa"; /* CHECK */
import { TiDelete } from "react-icons/ti"; /* NO ATIVO */
import { IoSearchSharp } from "react-icons/io5"; /* SEARCH */

import Button from "@/app/_components/( Buttons )/Button";

export default function Marcas() {
  return (
    <>
      
        <div>
          <TitlePages title={"MARCAS"} />
        </div>

        <div className="ContainerBtnPagesNavegation">
          <Link href={"#"} className="btnNew" title="Cadastrar nova Marca">
            <IoMdAdd />
            Nova Marca
          </Link>
        </div>

        <div className="fieldGroup">
          <div className="inputField">
            <label>Nome</label>
            <input
              className="input-md"
              type="text"
              placeholder="Pesquise o nome da marca..."
            />
          </div>

          <div className="inputField">
            <label>Ativo</label>
            <select>
              <option value="">Todas</option>
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </div>

          <Button
            icon={<IoSearchSharp />}
            value={"Pesquisar"}
            name={"filterCategory"}
            type={"button"}
            className={"btnPrimary"}
            title={"Pesquisar Marcas"}
          />
        </div>
        <hr />

        <div>
          <label>
            Total de Registros: <span>2</span>
          </label>
        </div>

        <table>
          <thead>
            <tr>
              <th>Ações</th>
              <th>Nome</th>
              <th>Data de Cadastro</th>
              <th>Usuário</th>
              <th>Ativo</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={"BtnAcoesTable"}>
                <Button
                  icon={<FaEdit />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnWarning"}
                  title={"Editar Cadastro"}
                />
                <Button
                  icon={<MdDeleteForever />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnDanger"}
                  title={"Deletar Cadastro"}
                />
              </td>

              <td>Nike</td>
              <td>12/03/2025 08:54</td>
              <td>Nome do Usuário</td>
              <td>
                <FaCheck />
              </td>
            </tr>

            <tr>
              <td className={"BtnAcoesTable"}>
                <Button
                  icon={<FaEdit />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnWarning"}
                  title={"Editar Cadastro"}
                />
                <Button
                  icon={<MdDeleteForever />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnDanger"}
                  title={"Deletar Cadastro"}
                />
              </td>

              <td>Adidas</td>
              <td>12/03/2025 08:54</td>
              <td>Nome do Usuário</td>
              <td>
                <TiDelete />
              </td>
            </tr>
          </tbody>
        </table>
     
    </>
  );
}
