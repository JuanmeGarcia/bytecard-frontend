import { FC } from "react"

interface Props {
    children: JSX.Element
}

export const Title: FC<Props> = ({children}) => {
    return (
        <h1>
            {children}
        </h1>
    )
}
