import { createContext, FC, useContext } from "react";
import { useForm } from "../hooks";

const data = {
    email: '',
    password: '',
} 

type FormContextType = {
    formData: typeof data,
    onChangeEvent: (e: any) => void
}


const FormContext = createContext({});

interface Props{
    children: React.ReactNode
}

export const FormContextProvider: FC<Props> = ( {children} ) => {

    const { formData, onChangeEvent } = useForm(data)


    return (
    <FormContext.Provider value={{
        formData,
        onChangeEvent,
    }}>
        {children}
    </FormContext.Provider>)
}

export const useFormContext = () => useContext(FormContext) 