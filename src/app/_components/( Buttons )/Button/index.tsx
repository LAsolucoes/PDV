
interface ButtonProps {
    value: string
    name: string
    className: string
    type?: "button" | "submit" | "reset";
    icon: React.ReactNode;
    title: string

}

export  function Button({ value, name, className, type, icon, title }: ButtonProps) {
    return (
        <button name={name} className={className} type={type} title={title}> {icon} {value} </button>
    )
}



