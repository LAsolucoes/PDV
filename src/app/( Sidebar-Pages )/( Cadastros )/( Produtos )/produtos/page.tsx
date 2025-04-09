"use client";
import Link from "next/link";
import Image from "next/image";
import { TitlePages } from "../../../../_components/TitlePages";
import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa"; /* EDITAR */
import { MdDeleteForever } from "react-icons/md"; /* DELETE */
import { IoIosCopy } from "react-icons/io"; /* COPY */
import { RiFileCopy2Fill } from "react-icons/ri"; /* MOVIMENTACOES */
import { FaCheck } from "react-icons/fa"; /* CHECK */
import { TiDelete } from "react-icons/ti"; /* NO ATIVO */
import { IoSearchSharp } from "react-icons/io5"; /* SEARCH */
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "../../../../_components/( Buttons )/Button";
import { useEffect, useState } from "react";

export default function Products() {
  interface ProductsProps {
    id: string;
    image: string;
    name: string;
    estoque: number;
    category: string;
    saleprice: number;
    costprice: number;
    updateCad: string;
    user: string;
    isActive: boolean;
  }
  const [listProducts, setListProducts] = useState<ProductsProps[]>([]);
 

  useEffect(() => {
    async function handleListProducts() {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        console.log(data);
        setListProducts(data);
      } catch {
        alert("erro");
      }
    }
    handleListProducts();
  }, []);

  return (
    <>
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
            placeholder="Pesquise o nome do produto..."
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
            <option value="">Ativo</option>
            <option value="">Inátivo</option>
          </select>
        </div>

        <Button
          icon={<IoSearchSharp />}
          value={"Pesquisar"}
          name={"filterCategory"}
          type={"button"}
          className={"btnPrimary"}
          title={"Pesquisar Produto"}
        />
        <Button
          icon={<IoCloseSharp />}
          value={"Limpar filtros"}
          name={"filterLimp"}
          type={"button"}
          className={"btnDanger"}
          title={"Limpar campos da pesquisa"}
        />
      </div>
      <hr />

      <div>
        <label>
          Total de Registros: <span>2</span>
        </label>
      </div>
      <div>
        <label>
          Total de Registros da Pesquisa: <span>2</span>
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
          {listProducts.map((item) => (
            <tr key={item.id}>
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
                <Image src={item.image} alt={""} width={40} height={40} />
              </td>
              <td>{item.name}</td>
              <td>{item.estoque}</td>
              <td>{item.category}</td>
              <td>{item.saleprice}</td>
              <td>{item.costprice}</td>
              <td>{item.updateCad}</td>
              <td>{item.user}</td>
              <td>
                {item.isActive ? <FaCheck /> : <TiDelete />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
