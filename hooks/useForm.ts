import { useState } from "react"

export const useForm = (
    formValues: {[key: string]: string}
) => {    
    const [formData, setFormData] = useState<{[key: string]: any}>({formValues});

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setFormData(prevFormData =>({
            ...prevFormData,
            [name]: value
        }))
        
    } 

    return { 
        formData,
        onChangeEvent
    }
}
