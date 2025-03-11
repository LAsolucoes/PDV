interface ButtonProps{
    value: string
    name: string
    className: string
    type?: "button" | " submit" | "reset"
    onClick: ()=>void

}

export default function Button({value , name, className , type, onClick} : ButtonProps){
    return(
        <button name={name} className={className} type={type} onClick={onClick} > { value } </button>
    )
}