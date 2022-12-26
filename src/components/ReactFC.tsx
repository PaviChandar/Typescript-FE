import React from 'react'

type Props = {
    title: string,
    children: JSX.Element  //ReactNode
}

const PropsWithChild: React.FC<Props> = ({ title, children }) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
)

export default PropsWithChild