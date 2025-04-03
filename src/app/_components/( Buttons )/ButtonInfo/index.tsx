import { BsFillQuestionSquareFill } from "react-icons/bs";


interface ButtonInfoProps{
    id: string
    onClick: ( e : React.MouseEvent<HTMLButtonElement> )=> void
}
export function ButtonInfo( {id , onClick}: ButtonInfoProps) {
  return (
    <button
      title="Click e saiba mais!"
      className="iconSaibaMais"
      id={id}
      onClick={onClick}
    >
      <BsFillQuestionSquareFill />
    </button>
  );
}
