import { FC } from "react"
import { useFormContext } from "../context/useFormContext"
import { inputType } from "../types"

interface Props{
    type: inputType,
    value: string,
    name?: string,
    placeholder?: string
}

export const Input: FC<Props> = ({type, value, name, placeholder}) => {

    const { onChangeEvent } = useFormContext() 

    return type === 'text' 
        ? <input 
                type={type} 
                value={value} 
                name={name}  
                placeholder={placeholder}
                className='input'
                onChange={onChangeEvent}
            />
        : <input 
                type={type} 
                value={value} 
                name={name}  
                placeholder={placeholder}
                className='button'
                onChange={onChangeEvent}
            />
    
}
