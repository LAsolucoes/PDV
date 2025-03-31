"use client";
import { TitlePages, AlertInputRequired } from "@/app/_components/TitlePages";
import { ButtonSalvarVoltar } from "@/app/_components/( Buttons )/ButtonSalvarVoltar";
import { ButtonViewPassword } from "@/app/_components/( Buttons )/ButtonViewPassword";
import { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { Modal } from "@/app/_components/Modal";

export default function NewUser() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleDiscount, setPasswordVisibleDiscount] = useState(false);
  const [allowDiscount, setAllowDiscount] = useState(false);
  const inputDiscountPassword = useRef<HTMLInputElement | null>(null);
  const [modalOpenClose, setModalOpenClose] = useState(false);

  function handleViewPassword() {
    setPasswordVisible(!passwordVisible);
    return;
  }

  function handleViewPasswordDiscount() {
    setPasswordVisibleDiscount(!passwordVisibleDiscount);
    return;
  }

  function AllowDiscount(event: React.ChangeEvent<HTMLSelectElement>) {
    const inputValue = event.target.value;
    if (inputValue !== "yes") {
      setAllowDiscount(false);
      return;
    }
    setAllowDiscount(true);
  }

  useEffect(() => {
    if (inputDiscountPassword.current) {
      inputDiscountPassword.current.focus();
    }
  }, [allowDiscount]);

  function handleCloseModal() {
    setModalOpenClose(!modalOpenClose);
  }

  return (
    <>
      <div>
        <TitlePages title={"NOVO USUÁRIO"} />
        <AlertInputRequired />
      </div>
      <div className="fieldGroup">
        <div className="inputField">
          <label htmlFor="name" className="required">
            Nome
          </label>
          <input type="text" id="name" required />
        </div>
        <div className="inputField">
          <label htmlFor="name" className="required">
            Email
          </label>
          <input type="text" id="email" required className="input-md" />
        </div>

        <div className="inputField">
          <label htmlFor="password" className="required">
            Senha
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            required
          />
        </div>

        <div className="inputField">
          <ButtonViewPassword
            onClick={handleViewPassword}
            title={passwordVisible ? "Esconder Senha " : " Mostar Senha"}
            icon={passwordVisible ? <FaEyeSlash /> : <FaEye />}
          />
        </div>
        <div className="inputField">
          <label htmlFor="active" className="required">
            Ativo
          </label>
          <select name="activeUser" id="active" required>
            <option value="">Sim</option>
            <option value="">Não</option>
          </select>
        </div>
      </div>

      <div className="fieldGroup">
        <div className="inputField">
          <label htmlFor="typeUser" className="required">
            Nive de Acesso
          </label>
          <select name="" id="typeUser" required>
            <option value="">Admin</option>
            <option value="">Gerente</option>
            <option value="">Op. Caixa</option>
          </select>
        </div>

        <div className="inputField">
          <label htmlFor="route">
            Rota Padrão{" "}
            <FaFileContract
              title="Click e saiba mais!"
              className="iconSaibaMais"
              onClick={handleCloseModal}
            />
          </label>
          <input
            type="text"
            id="route"
            placeholder="https://meusistema/pdv.com.br"
            className="input-md"
            required
          />
        </div>

        <div className="inputField">
          <label htmlFor="listPrice">Lista de Preços</label>
          <select name="listPrice" id="listPrice">
            <option value=""> - - </option>
            <option value="">Atacado</option>
            <option value="">Varejo</option>
          </select>
        </div>

        <div className="inputField">
          <label htmlFor="allowDiscount">Permitir descontos</label>
          <select
            name="allowDiscount"
            id="allowDiscount"
            onChange={AllowDiscount}
          >
            <option value=""> - - </option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>

        {allowDiscount && (
          <>
            <div className={"inputField"}>
              <label htmlFor="discountPassword" className="required">
                Senha para Desconto
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="discountPassword"
                ref={inputDiscountPassword}
                required
              />
            </div>
            <div className="inputField">
              <ButtonViewPassword
                onClick={handleViewPasswordDiscount}
                title={
                  passwordVisibleDiscount ? "Ocutar senha" : "Exibir senha"
                }
                icon={passwordVisibleDiscount ? <FaEyeSlash /> : <FaEye />}
              />
            </div>
          </>
        )}
      </div>
      <div>
        <ButtonSalvarVoltar name={"salvar"} href={"/marcas"} />
      </div>

      {modalOpenClose && <Modal onClick={handleCloseModal} />}
    </>
  );
}
