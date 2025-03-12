import { ReactNode } from 'react';

interface ButtonProps {
    value: string
    name: string
    className: string
    type?: "button" | "submit" | "reset";
    icon: ReactNode;
    title: string

}

export default function Button({ value, name, className, type, icon, title }: ButtonProps) {
    return (
        <button name={name} className={className} type={type} title={title}> {icon} {value} </button>
    )
}



