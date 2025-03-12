import MainContent from "../../components/MainContent";
import TitlePages from "../../components/TitlePages";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa"; /* EDITAR */
import { MdDeleteForever } from "react-icons/md"; /* DELETE */
import { IoIosCopy } from "react-icons/io"; /* COPY */
import { RiFileCopy2Fill } from "react-icons/ri"; /* MOVIMENTACOES */
import { FaCheck } from "react-icons/fa"; /* CHECK */
import { TiDelete } from "react-icons/ti"; /* NO ATIVO */
import { IoSearchSharp } from "react-icons/io5"; /* SEARCH */
import Image from "next/image";
import ImageProduct1 from "../../../public/COCA COLA 350ML.png";
import ImageProduct2 from "../../../public/FANTA LARANJA 350ML.png";
import Button from "../../components/( Buttons )/Button";

export default function Category() {
  return (
    <>
      <MainContent>
        <div>
          <TitlePages title={"PRODUTOS"} />
        </div>

        <div className="ContainerBtnPagesNavegation">
          <Link href={"#"} className="btnNew" title="Cadastrar novo Produto">
            <IoMdAdd />
            Novo Produto
          </Link>
        </div>

        <div className="fieldGroup">
          <div className="inputField">
            <label>Nome</label>
            <input
              className="input-md"
              type="text"
              placeholder="Pesquise o nome da categoria..."
            />
          </div>
          <div className="inputField">
            <label>Cod. Barras</label>
            <input
              className="input-md"
              type="text"
              placeholder="Pesquise pelo cod.barras..."
            />
          </div>

          <div className="inputField">
            <label>Categoria</label>
            <select>
              <option value=""> - - </option>
              <option value=""> Bebidas</option>
            </select>
          </div>
          <div className="inputField">
            <label>Marca</label>
            <select>
              <option value="">- -</option>
              <option value=""> Adidas </option>
            </select>
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
            title={"Pesquisar Categoria"}
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
              <th>Imagem</th>
              <th>Nome</th>
              <th>Estoque</th>
              <th>Categoria</th>
              <th>Valor de Venda</th>
              <th>Valor de Custo</th>
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
                  icon={<IoIosCopy />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnPrimary"}
                  title={"Duplicar Cadastro"}
                />
                <Button
                  icon={<RiFileCopy2Fill />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnSecondary"}
                  title={"Movimentações do Produto"}
                />
              </td>
              <td>
                <Image src={ImageProduct1} alt={""} width={40} height={40} />
              </td>
              <td>Coca cola 350ml</td>
              <td>12</td>
              <td>Bebidas</td>
              <td>5,00</td>
              <td>2,79</td>
              <td>12/03/2025 08:54</td>
              <td>Nome do Usuário</td>
              <td>
                {" "}
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
                  icon={<IoIosCopy />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnPrimary"}
                  title={"Duplicar Cadastro"}
                />
                <Button
                  icon={<RiFileCopy2Fill />}
                  value={""}
                  name={"BtnAcoesEdit"}
                  className={"btnSecondary"}
                  title={"Movimentações do Produto"}
                />
              </td>
              <td>
                <Image src={ImageProduct2} alt={""} width={40} height={40} />
              </td>
              <td>Fanta Laranja 350ml</td>
              <td>7</td>
              <td>Bebidas</td>
              <td>4,00</td>
              <td>2,39</td>
              <td>12/03/2025 08:54</td>
              <td>Nome do Usuário</td>
              <td>
                <TiDelete />
              </td>
            </tr>
          </tbody>
        </table>
      </MainContent>
    </>
  );
}
