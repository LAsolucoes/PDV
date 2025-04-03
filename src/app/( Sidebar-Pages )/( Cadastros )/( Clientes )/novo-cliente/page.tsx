"use client";
import { Button } from "@/app/_components/( Buttons )/Button";
import { ButtonSalvarVoltar } from "@/app/_components/( Buttons )/ButtonSalvarVoltar";
import { ImageHandler } from "@/app/_components/ImageHandler";
import { AlertInputRequired, TitlePages } from "@/app/_components/TitlePages";
import React, { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Modal } from "@/app/_components/Modal";
import { ButtonInfo } from "@/app/_components/( Buttons )/ButtonInfo";

export default function NewClient() {
  const [selectType, setSelectType] = useState(false);
  const [inputInscricaoEstadual, setInputInscricaoEstadual] =
    useState("Inscrição Estadual");
  const [inputType, setInputType] = useState("CNPJ");
  const [inputRazaoSocial, setInputRazaoSocial] = useState("Razão Social");
  const [inputNomeFantasia, setInputNomeFantasia] = useState("Nome Fantasia");

  const [modalOpenClose, setModalOpenClose] = useState(false);
  const [modalId, setModalId] = useState<string | null>(null);

  function HandleOpenCloseModal(e: React.MouseEvent<HTMLButtonElement>) {
    const elementId = e.currentTarget.id;
    setModalId(elementId);
    setModalOpenClose(true);
  }

  function HandleTypeClient(e: React.ChangeEvent<HTMLSelectElement>) {
    const valueSelect = e.target.value;
    if (valueSelect !== "cnpj") {
      setSelectType(true);
      setInputType("CPF");
      setInputRazaoSocial("Nome");
      setInputNomeFantasia("Apelido");
      setInputInscricaoEstadual("RG");

      return;
    }
    setSelectType(false);
    setInputType("CNPJ");
    setInputRazaoSocial("Razão Social");
    setInputNomeFantasia("Nome Fantasia");
    setInputInscricaoEstadual("Inscrição Estadual");
    return;
  }

  return (
    <>
      <div>
        <TitlePages title={"NOVO CLIENTE"} />
        <AlertInputRequired />
      </div>

      <div className="fieldGroup">
        <div className="inputField">
          <label className="required">CNPJ | CPF </label>
          <select name="" required onChange={HandleTypeClient}>
            <option value="cnpj">CNPJ</option>
            <option value="cpf">CPF</option>
          </select>
        </div>
      </div>

      <div className="fieldGroup">
        <div className="inputField">
          <label className="required">{inputType}</label>
          <input type="text" className="input-md" required />
        </div>

        <div className="inputField">
          <label className="required">{inputRazaoSocial}</label>
          <input type="text" className="input-md" required />
        </div>
        <div className="inputField">
          <label>{inputNomeFantasia}</label>
          <input type="text" className="input-md" />
        </div>
        <div className="inputField">
          <label>{inputInscricaoEstadual}</label>
          <input type="text" className="input-md" />
        </div>
      </div>

      <div className="fieldGroup">
        <div className="inputField">
          <label>CEP</label>
          <input type="text" className="input-sm" />
        </div>

        <div className="inputField">
          <Button
            value={"Buscar CEP"}
            name={"buscarCep"}
            className={"btnPrimary"}
            icon={<HiMiniMagnifyingGlass />}
            title={
              "Preencha o CEP e clique no botão abaixo para realizar a busca. O sistema irá preencher automaticamente os dados correspondentes com baso no número de CEP informado."
            }
            type={"button"}
          />
        </div>

        <div className="inputField">
          <label>Endereço</label>
          <input type="text" className="input-lg" />
        </div>

        <div className="inputField">
          <label>Nº</label>
          <input type="text" className="input-sm" />
        </div>
      </div>
      <div className="fieldGroup">
        <div className="inputField">
          <label>Bairro</label>
          <input type="text" className="input-lg" />
        </div>

        <div className="inputField">
          <label>Complemento</label>
          <input type="text" />
        </div>

        <div className="inputField">
          <label>UF</label>
          <select id="estado" name="estado">
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>
        </div>
      </div>

      <div className="fieldGroup">
        <div className="inputField">
          <label htmlFor="">Telefone</label>
          <input type="text" />
        </div>
        <div className="inputField">
          <label htmlFor="">Telefone 2</label>
          <input type="text" />
        </div>
        <div className="inputField">
          <label htmlFor="">Email</label>
          <input type="email" className="input-md" />
        </div>
        <div className="inputField">
          <label htmlFor="">Email Alternativo</label>
          <input type="email" className="input-md" />
        </div>
      </div>

      <div className="fieldGroup">
        <div className="inputField">
          <div className="labelBtnInfo">
            <label>Limite de Crédito</label>
           <ButtonInfo 
           id={"creditLimit"}
           onClick={HandleOpenCloseModal}
           
           />
          </div>
          <input type="text" placeholder="R$ 500,00" />
        </div>

        <div className="inputField">
          <label>Crédito Utilizado</label>
          <input type="text" placeholder="R$ 230,00" readOnly />
        </div>

        <div className="inputField">
          <label>Limite Disponivel</label>
          <input type="text" placeholder="R$ 270,00" readOnly />
        </div>

        <div className="inputField">
          <label>Bloqueiar Crédito</label>
          <select name="" required onChange={HandleTypeClient}>
            <option value=""> - - </option>
            <option value="cnpj">Sim</option>
            <option value="cpf">Não</option>
          </select>
        </div>

        {selectType && (
          <div className="inputField">
            <label htmlFor="">Data de Nascimento</label>
            <input type="date" />
          </div>
        )}

        <div className="inputField">
          <label className="required">Ativo</label>
          <select name="" required onChange={HandleTypeClient}>
            <option value="cnpj">Sim</option>
            <option value="cpf">Não</option>
          </select>
        </div>
      </div>

      <div>
        <div className="inputField">
          <label htmlFor="">Observações</label>
          <textarea
            name=""
            rows={4}
            maxLength={500}
            placeholder="Permitido no maximo 500 caractéries"
          />
        </div>
      </div>

      <div className="fieldGroup">
        <ImageHandler />
      </div>

      <ButtonSalvarVoltar name={"Salvar"} href={"/clientes"} />
      {modalOpenClose && modalId === "creditLimit" && (
            <Modal
              tittle="LIMITE DE CRÉDITO"
              onClick={HandleOpenCloseModal}
              label={
                "Se nenhum valor for atribuído ao Limite de Crédito, o cliente poderá realizar compras sem restrição de valor, o que oferece um crédito ilimitado. Caso deseje limitar o crédito do cliente, basta atribuir um valor ao Limite de Crédito. Com o valor definido, o sistema realizará uma verificação para garantir que o cliente possua crédito disponível para efetuar suas compras."
              }
            />
          )}
    </>
  );
}
