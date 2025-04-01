"use client"
import { ButtonSalvarVoltar } from "@/app/_components/( Buttons )/ButtonSalvarVoltar";
import { AlertInputRequired, TitlePages } from "@/app/_components/TitlePages";
import React, { useState } from "react";

export default function NewClient() {

    const [selectType, setSelectType] = useState(false)
    const [inputType, setInputType] = useState("CNPJ")
    const [inputRazaoSocial, setInputRazaoSocial] = useState("Razão Social")
    const [inputNomeFantasia, setInputNomeFantasia] = useState("Nome Fantasia")

    function HandleTypeClient(e: React.ChangeEvent<HTMLSelectElement>) {
        const valueSelect = e.target.value
        if (valueSelect !== "cnpj") {
            setSelectType(!selectType)
            setInputType("CPF")
            setInputRazaoSocial("Nome")
            setInputNomeFantasia("Apelido")
            return

        } else {
            setInputType("CNPJ")
            setInputRazaoSocial("Razão Social")
            setInputNomeFantasia("Nome Fantasia")
        }

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
                    <select name=""
                        required
                        onChange={HandleTypeClient}>
                        <option value="cnpj">CNPJ</option>
                        <option value="cpf">CPF</option>
                    </select>
                </div>
            </div>

            <div className="fieldGroup">
                <div className="inputField">
                    <label className="required">{inputType}</label>
                    <input
                        type="text"
                        className="input-md"
                        required
                    />
                </div>

                <div className="inputField">
                    <label className="required">{inputRazaoSocial}</label>
                    <input
                        type="text"
                        className="input-md"
                        required
                    />

                </div>
                <div className="inputField">
                    <label>{inputNomeFantasia}</label>
                    <input
                        type="text"
                        className="input-md"
                        required
                    />

                </div>
            </div>

            <div className="fieldGroup">
                <div className="inputField">
                    <label>CEP</label>
                    <input type="text" className="input-sm" />
                </div>

                <div className="inputField">
                    <label>Endereço</label>
                    <input type="text" 
                    className="input-lg"
                    />
                </div>

                <div className="inputField">
                    <label>Nº</label>
                    <input type="text" 
                    className="input-sm"
                    />
                </div>

                <div className="inputField">
                    <label>Bairro</label>
                    <input type="text" 
                    className="input-lg"
                    />
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
                    <label>Limite de Crédito</label>
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
                    <select name=""
                        required
                        onChange={HandleTypeClient}>
                        <option value=""> - - </option>
                        <option value="cnpj">Sim</option>
                        <option value="cpf">Não</option>
                    </select>
                </div>
                <div className="inputField">
                    <label>Ativo</label>
                    <select name=""
                        required
                        onChange={HandleTypeClient}>
                        <option value="cnpj">Sim</option>
                        <option value="cpf">Não</option>
                    </select>
                </div>


            </div>

            <ButtonSalvarVoltar
                name={"Salvar"}
                href={"/clientes"}
            />
        </>
    )
}