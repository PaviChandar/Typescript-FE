import React, { createContext } from "react"

export const theme = {
    primary: {
        main: '#3f51b5',
        text: '#fff'
    },
    secondary: {
        main: '#f50057',
        text: '#fff'
    }
}

type ContextSampleProps = {
    children: React.ReactNode
}

export const ContextSample = createContext(theme)

export const ContextSampleProvider = ({ children }: ContextSampleProps) => {
    return <ContextSample.Provider value={theme}>{children}</ContextSample.Provider>
}