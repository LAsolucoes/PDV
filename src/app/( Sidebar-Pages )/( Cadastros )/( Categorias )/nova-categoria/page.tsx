import { ButtonSalvarVoltar } from "@/app/_components/( Buttons )/ButtonSalvarVoltar";
import { AlertInputRequired, TitlePages } from "@/app/_components/TitlePages";

export default function NewCategory() {
  return (
    <>
      <div>
        <TitlePages title={"NOVA CATEGORIA"} />
        <AlertInputRequired />
        <div className="fieldGroup">
          <div className="inputField">
            <label className="required">Nome</label>
            <input
              type="text"
              className="input-md"
              placeholder="Nome da Categoria"
              name="name"
              required
            />
          </div>

          <div className="inputField">
            <label className="required">Ativo</label>
            <select name="" required>
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </div>
        </div>

        <div>
          <ButtonSalvarVoltar name={"salvar"} href={"/categorias"} />
        </div>
      </div>
    </>
  );
}
