import React, { FC } from 'react'
import { textType } from '../types'

interface Props{
    children: React.ReactNode
    type: textType
}

export const Text: FC<Props> = ({children, type}) => {
    return type === 'paragraph' 
        ? <p className='paragraph '>{children}</p>
        : <p className='paragraph paragraph--translucid'>{children}</p>
}
