import React, { FC } from 'react'

interface Props{
    children: JSX.Element
}

export const Text: FC<Props> = ({children}) => {
    return (
        <p>
            {children}
        </p>
    )
}
