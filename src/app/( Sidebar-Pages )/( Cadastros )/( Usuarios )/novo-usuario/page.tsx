"use client";
import { TitlePages, AlertInputRequired } from "@/app/_components/TitlePages";
import { ButtonSalvarVoltar } from "@/app/_components/( Buttons )/ButtonSalvarVoltar";
import { ButtonViewPassword } from "@/app/_components/( Buttons )/ButtonViewPassword";
import { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Modal } from "@/app/_components/Modal";
import { ButtonInfo } from "@/app/_components/( Buttons )/ButtonInfo";

export default function NewUser() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleDiscount, setPasswordVisibleDiscount] = useState(false);
  const [allowDiscount, setAllowDiscount] = useState(false);
  const inputDiscountPassword = useRef<HTMLInputElement | null>(null);
  const [modalOpenClose, setModalOpenClose] = useState(false);
  const [modalId, setModalId] = useState<string | null>(null);

  function HandleOpenCloseModal(e: React.MouseEvent<HTMLButtonElement>) {
    const elementId = e.currentTarget.id;
    setModalId(elementId)
    setModalOpenClose(!modalOpenClose)
  }

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
          <div className="labelBtnInfo">
            <label>Rota Padrão</label>
           <ButtonInfo
           id={"standardRoute"}
           onClick={HandleOpenCloseModal}
           
           />
          </div>
          <input
            type="text"
            id="route"
            placeholder="https://meusistema/pdv.com.br"
            className="input-md"
            required
          />
        </div>

        <div className="inputField">

        <div className="labelBtnInfo">
            <label>Lista de Preços</label>
            <ButtonInfo
           id={"listPrice"}
           onClick={HandleOpenCloseModal}
           
           />
          </div>
          
          <select name="listPrice">
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
        <ButtonSalvarVoltar name={"salvar"} href={"/usuarios"} />
      </div>

      {modalOpenClose && modalId === "standardRoute" && (
        <Modal
          tittle={"ROTA PADRÃO"}
          onClick={HandleOpenCloseModal}
          label={`A Rota padrão é usada para definir a página para a qual o usuário será redirecionado assim que realizar o login no sistema. Ao cadastrar uma rota padrão para o usuário, você garante que, após a autenticação, ele seja automaticamente levado à página que foi designada pelo administrador do sistema. Por exemplo, ao fazer login, o usuário pode ser direcionado diretamente para uma página específica, como: https://meusistema/pdv.com.br, sem precisar navegar por outras áreas do sistema. Essa funcionalidade facilita a navegação, proporcionando uma experiência mais fluida e objetiva, levando o usuário diretamente ao ponto mais relevante de acordo com a configuração do administrador.`}
        />
      )}

      {modalOpenClose && modalId === "listPrice" && (
        <Modal 
        tittle={"LISTA DE PREÇOS"}
        onClick={HandleOpenCloseModal}
          label={"Ao atribuir uma lista de preços a um usuário, ele terá acesso apenas a essa lista específica para realizar as vendas. Isso permite que o sistema tenha diferentes listas de preços cadastradas, como ATACADO e VAREJO, com valores distintos para cada tipo de venda. Por exemplo, na lista de atacado os preços são mais baixos, enquanto na lista de varejo os valores são mais altos.Essa funcionalidade permite que você atribua uma única lista de preços ou múltiplas listas a um usuário, conforme necessário.Além disso, é possível direcionar cada caixa de venda para um tipo específico de operação, como ATACADO e VAREJO, garantindo que os preços corretos sejam aplicados dependendo do tipo de cliente ou do ponto de venda.  "}
        
        />
      )}
    </>
  );
}
