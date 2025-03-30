


/*  BOTÃO DE VISUALIZAR SENHA DIGITADA PELO USUÁRIO */
interface ButtonViewPasswordProps {
  title: string;
  onClick?: () => void;
  icon: React.ReactNode;
}
export function ButtonViewPassword({
  title,
  onClick,
  icon,
}: ButtonViewPasswordProps) {
  return (
    
      <button className="btnViewPassword" title={title} onClick={onClick}>
        {icon}
      </button>
    
  );
}
