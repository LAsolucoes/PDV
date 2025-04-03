"use client";
import { Button } from "@/app/_components/( Buttons )/Button";
import { ButtonSalvarVoltar } from "@/app/_components/( Buttons )/ButtonSalvarVoltar";
import { ImageHandler } from "@/app/_components/ImageHandler";
import { AlertInputRequired, TitlePages } from "@/app/_components/TitlePages";
import React, { useEffect, useRef, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaFileContract } from "react-icons/fa";
import { Modal } from "@/app/_components/Modal";

export default function NewEmployees() {
  const [selectType, setSelectType] = useState(false);
  const [inputType, setInputType] = useState("CNPJ");
  const [inputRazaoSocial, setInputRazaoSocial] = useState("Razão Social");
  const [inputNomeFantasia, setInputNomeFantasia] = useState("Nome Fantasia");
  const [inputInscricaoEstadual, setInputInscricaoEstadual] =
    useState("Inscrição Estadual");

  const [modalOpenClose, setModalOpenClose] = useState(false);
  const [modalId, setModalId] = useState<string | null>(null);

  const [isCommission, setIsCommission] = useState(false);
  const [typeCommissionMoney, setTypeCommissionMoney] = useState(false);
  const [typeCommissionPorcentage, setTypeCommissionPorcentage] =
    useState(false);

  const typeCommissionRef = useRef<HTMLSelectElement>(null);
  const typeMoneyRef = useRef<HTMLInputElement>(null);
  const typePorcentageRef = useRef<HTMLInputElement>(null);

  function HandleTypeEmployees(e: React.ChangeEvent<HTMLSelectElement>) {
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

  function HandleIsComission(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectComission = e.currentTarget.value;
    if (selectComission === "commission") {
      setIsCommission(true);
      return;
    }
    setIsCommission(false);
    setTypeCommissionMoney(false);
    setTypeCommissionPorcentage(false);
    return;
  }

  useEffect(() => {
    if (isCommission) {
      typeCommissionRef.current?.focus();
      HandleOpenCloseModal();
    }
  }, [isCommission]);

  function HandleTypeCommission(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectTypeCommission = e.currentTarget.value;
    if (selectTypeCommission === "money") {
      setTypeCommissionMoney(true);
      setTypeCommissionPorcentage(false);
      return;
    }
    if (selectTypeCommission === "percentage") {
      setTypeCommissionMoney(false);
      setTypeCommissionPorcentage(true);
      return;
    }
    setTypeCommissionMoney(false);
    setTypeCommissionPorcentage(false);
  }

  useEffect(() => {
    if (typeCommissionMoney) typeMoneyRef.current?.focus();
  }, [typeCommissionMoney]);

  useEffect(() => {
    if (typeCommissionPorcentage) typePorcentageRef.current?.focus();
  }, [typeCommissionPorcentage]);

  const HandleOpenCloseModal = () => {
    const elementId = "assignUser";
    setModalId(elementId);
    setModalOpenClose((prev) => !prev);
  };

  return (
    <>
      <div>
        <TitlePages title={"NOVO FUNCIONÁRIO"} />
        <AlertInputRequired />
      </div>

      <div className="fieldGroup">
        <div className="inputField">
          <label className="required">CNPJ | CPF </label>
          <select name="" required onChange={HandleTypeEmployees}>
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
        {selectType && (
          <div className="inputField">
            <label htmlFor="">Data de Nascimento</label>
            <input type="date" />
          </div>
        )}
        <div className="inputField">
          <label>Salário</label>
          <input type="text" placeholder="R$ 1.500,00" />
        </div>

        <div className="inputField">
          <label>Comissão</label>
          <select name="" required onChange={HandleIsComission}>
            <option value=""> - - </option>
            <option value="commission">Sim</option>
            <option value="noCommission">Não</option>
          </select>
        </div>

        {isCommission && (
          <div className="inputField">
            <label className="required">Tipo de comissão</label>
            <select
              name=""
              ref={typeCommissionRef}
              required
              onChange={HandleTypeCommission}
            >
              <option value=""> - - </option>
              <option value="money">Valor R$</option>
              <option value="percentage">Porcentagem %</option>
            </select>
          </div>
        )}

        {typeCommissionMoney && (
          <div className="inputField">
            <label htmlFor="" className="required">
              Valor R$
            </label>
            <input
              type="text"
              placeholder="R$ 0,00"
              required
              ref={typeMoneyRef}
            />
          </div>
        )}

        {typeCommissionPorcentage && (
          <div className="inputField">
            <label htmlFor="" className="required">
              Porcentagem
            </label>
            <input
              type="text"
              placeholder="%"
              required
              ref={typePorcentageRef}
            />
          </div>
        )}

        <div className="inputField">
          <div className="labelBtnInfo">
            <label>Usuário</label>
            <button
              title="Click e saiba mais!"
              className="iconSaibaMais"
              id="assignUser"
              onClick={HandleOpenCloseModal}
            >
              <FaFileContract />
            </button>
          </div>
          <select name="" required>
            <option value=""> - - </option>
            <option value="">Usuário 1</option>
            <option value="">Usuário 2</option>
          </select>
        </div>

        <div className="inputField">
          <label className="required">Ativo</label>
          <select name="" required>
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

      <ButtonSalvarVoltar name={"Salvar"} href={"/funcionarios"} />

      {modalOpenClose && modalId === "assignUser" && (
        <Modal
          tittle={"ATRIBUIR FUNCIONARIO AO USUÁRIO"}
          onClick={HandleOpenCloseModal}
          label={
            "Ao selecionar a opção de pagar comissão ao funcionário, você pode atribuir um usuário específico do sistema responsável pelos cálculos das comissões de vendas. Caso não selecione nenhum usuário, o funcionário receberá a comissão com base em todas as vendas registradas no sistema. Dessa forma, você terá flexibilidade para atribuir uma comissão individualizada para cada usuário, levando em consideração suas vendas, ou pagar uma comissão com base no total geral de vendas realizadas.  "
          }
        />
      )}
    </>
  );
}
