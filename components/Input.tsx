import { FC } from "react"
import { inputType } from "../types"

interface Props{
    type: inputType,
    value: string,
    name?: string,
    placeholder?: string
}

export const Input: FC<Props> = ({type, value, name, placeholder}) => {
    return type === 'text' 
        ? <input 
                type={type} 
                value={value} 
                name={name}  
                placeholder={placeholder}
                className='input'
            />
        : <input 
                type={type} 
                value={value} 
                name={name}  
                placeholder={placeholder}
                className='button'
            />
    
}
