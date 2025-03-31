import {TitlePages} from "../../../../_components/TitlePages";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa"; /* EDITAR */
import { MdDeleteForever } from "react-icons/md"; /* DELETE */
import { RiFileCopy2Fill } from "react-icons/ri"; /* MOVIMENTACOES */
import { FaCheck } from "react-icons/fa"; /* CHECK */
import { TiDelete } from "react-icons/ti"; /* NO ATIVO */
import { IoSearchSharp } from "react-icons/io5"; /* SEARCH */
import {Button} from "../../../../_components/( Buttons )/Button";

export default function Category() {
  return (
    <>
    
        <div>
          <TitlePages title={"USUÁRIOS"} />
        </div>

        <div className="ContainerBtnPagesNavegation">
          <Link href={"/novo-usuario"} className="btnNew" title="Cadastrar novo Usuário">
            <IoMdAdd />
            Novo Usuário
          </Link>
        </div>

        <div className="fieldGroup">
          <div className="inputField">
            <label>Nome</label>
            <input
              className="input-md"
              type="text"
              placeholder="Pesquise o nome do usuário..."
            />
          </div>
        
          <div className="inputField">
            <label>Ativo</label>
            <select>
              <option value=""> - -</option>
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
            title={"Pesquisar Usuário"}
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
              <th>Email</th>
              <th>Nivel de Acesso</th>
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
                
                <Button
                  icon={<RiFileCopy2Fill />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnSecondary"}
                  title={"Movimentações do Produto"}
                />
              </td>
              
              <td>Nome do usuário</td>
              <td>email@email.com.br</td>
              <td>Admin</td>
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
               
                <Button
                  icon={<RiFileCopy2Fill />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnSecondary"}
                  title={"Movimentações do Produto"}
                />
              </td>
              
              <td>Nome do usuário</td>
              <td>email@emial.com.br</td>
              <td>Admin</td>
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
