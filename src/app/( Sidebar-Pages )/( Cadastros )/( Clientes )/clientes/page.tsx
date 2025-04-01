
import Link from "next/link";
import {TitlePages} from "../../../../_components/TitlePages";
import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa"; /* EDITAR */
import { MdDeleteForever } from "react-icons/md"; /* DELETE */
import { RiFileCopy2Fill } from "react-icons/ri"; /* MOVIMENTACOES */
import { FaCheck } from "react-icons/fa"; /* CHECK */
import { TiDelete } from "react-icons/ti"; /* NO ATIVO */
import { IoSearchSharp } from "react-icons/io5"; /* SEARCH */
import {Button} from "../../../../_components/( Buttons )/Button";



export default function Clientes() {
  return (
    <>
     
        <div>
          <TitlePages title={"CLIENTES"} />
        </div>

        <div className="ContainerBtnPagesNavegation">
          <Link href={"/novo-cliente"} className="btnNew" title="Cadastrar novo Cliente">
            <IoMdAdd />
            Novo Cliente
          </Link>
        </div>

        <div className="fieldGroup">
          <div className="inputField">
            <label>Nome</label>
            <input
              className="input-md"
              type="text"
              placeholder="Pesquise o nome do cliente..."
            />
          </div>
        
          <div className="inputField">
            <label>Ativo</label>
            <select>
              <option value="">- -</option>
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </div>

          <Button
            icon={<IoSearchSharp />}
            value={"Pesquisar"}
            name={"filter"}
            type={"button"}
            className={"btnPrimary"}
            title={"Pesquisar Cliente"}
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
              <th>Endereço</th>
              <th>Contato</th>
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
              <td>Rua dev lasolucoes</td>
              <td>11 94045-1410</td>
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
              <td>Av Aricanduva </td>
              <td>11 94001-6064</td>
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
