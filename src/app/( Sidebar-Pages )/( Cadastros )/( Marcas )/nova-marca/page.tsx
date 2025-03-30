import { ButtonSalvarVoltar } from "@/app/_components/( Buttons )/ButtonSalvarVoltar";
import TitlePages from "@/app/_components/TitlePages";

export default function NewMark() {
  return (
    <>
      <div>
        <TitlePages title={"NOVA MARCA"} />

        <div className="fieldGroup">
          <div className="inputField">
            <label>Nome</label>
            <input
              type="text"
              className="input-md"
              placeholder="Nome da Marca"
              name="name"
              required
            />
          </div>

          <div className="inputField">
            <label>Ativo</label>
            <select name="" id="">
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </div>
        </div>

        <div>
          <ButtonSalvarVoltar name={"salvar"} href={"/marcas"} />
        </div>
      </div>
    </>
  );
}
