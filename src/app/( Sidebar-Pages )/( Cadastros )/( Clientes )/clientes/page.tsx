"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa"; /* EDITAR */
import { MdDeleteForever } from "react-icons/md"; /* DELETE */
import { RiFileCopy2Fill } from "react-icons/ri"; /* MOVIMENTACOES */
import { FaCheck } from "react-icons/fa"; /* CHECK */
import { TiDelete } from "react-icons/ti"; /* NO ATIVO */
import { IoSearchSharp } from "react-icons/io5"; /* SEARCH */

import { TitlePages } from "../../../../_components/TitlePages";
import { Button } from "../../../../_components/( Buttons )/Button";
import { Modal } from "@/app/_components/Modal";

export default function Client() {
  interface ClientsProps {
    id: string;
    nome: string;
    email: string;
    endereco: string;
    contato: string;
    dataCadastro: string;
    usuarioCadastro: string;
    ativo: boolean;
  }
  const [listClient, setListClient] = useState<ClientsProps[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientsProps | null>(
    null
  );

   const [modalOpenClose, setModalOpenClose] = useState(false);

  useEffect(() => {
    async function handleListClients() {
      try {
        const response = await fetch("/clients.json");
        const data = await response.json();
        setListClient(data);

        console.log(data);
      } catch {
        alert("erro");
      }
    }

    handleListClients();
  }, []);

  function handleDetailsClient(e: React.MouseEvent<HTMLTableRowElement>) {
    const elementId = e.currentTarget.id;
    const client = listClient.find((client) => client.id === elementId);

    if (client) {
      setSelectedClient(client);
      setModalOpenClose(true)
    }
  }

  function HandleOpenCloseModal(){
    setModalOpenClose(false)
    setSelectedClient(null)
  }

  return (
    <>
      <div>
        <TitlePages title={"CLIENTES"} />
      </div>

      <div className="ContainerBtnPagesNavegation">
        <Link
          href={"/novo-cliente"}
          className="btnNew"
          title="Cadastrar novo Cliente"
        >
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
            <option value="">Todos</option>
            <option value="active">Ativo</option>
            <option value="inactive">Inátivo</option>
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
          Total de Registros: <span>{listClient.length}</span>
        </label>
      </div>
      <div>
        <label>
          Total de Registros da Pesquisa: <span>{listClient.length}</span>
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
          {listClient.map((item) => (
            <tr key={item.id} id={item.id} onClick={handleDetailsClient}>
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

              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.endereco}</td>
              <td>{item.contato}</td>
              <td>{item.dataCadastro}</td>
              <td>{item.usuarioCadastro}</td>
              <td>{item.ativo ? <FaCheck /> : <TiDelete />}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {selectedClient && modalOpenClose && (
        <Modal
          tittle="CLIENTES"
          name={`Nome: ${selectedClient.nome}`}
          email={`Email: ${selectedClient.email}`}
          address={`Endereço: ${selectedClient.endereco}`}
          contact={`Contato: ${selectedClient.contato}`}
          registrationDate={`Data do Cadastro: ${selectedClient.dataCadastro}`}
          registrationUser={`Cadastrado por: ${selectedClient.usuarioCadastro}`}
          onClick={HandleOpenCloseModal}
        />
      )}
    </>
  );
}
