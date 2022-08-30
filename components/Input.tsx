import { FC } from "react"
import { inputType } from "../types"

interface Props{
    type: inputType,
    value: string,
    name?: string,
    placeholder?: string
}

export const Input: FC<Props> = ({type, value, name, placeholder}) => {
    return (
        <input 
            type={type} 
            value={value} 
            name={name}  
            placeholder={placeholder}
        />
    )
}
