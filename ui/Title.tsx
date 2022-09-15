import { FC } from "react"
import { titleType } from "../types"

interface Props {
    children: React.ReactNode
    type: titleType
}

export const Title: FC<Props> = ({children, type}) => {
    let titleType = type

    if(titleType === 'h1'){
        return <h1 className="title title--big">{children}</h1>
    }
    if(titleType === 'h2'){
        return <h2 className="title title--medium">{children}</h2>
    }
    return <h3 className="title title--small">{children}</h3>

}
